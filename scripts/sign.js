import { spawn } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

//Assinatura do aplicativo pomodoro. 
//Certifique-se de que o arquivo de assinatura (SIGN_PFX) esteja na pasta do projeto.
//Certifique-se de que o arquivo de assinatura (SIGN_PFX) tenha a senha (SIGN_PASS) configurada.

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await listFiles(full)));
    else files.push(full);
  }
  return files;
}

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd, stdio: "inherit", shell: true });
    p.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

async function main() {
  const pfx = process.env.SIGN_PFX;
  const pass = process.env.SIGN_PASS;
  const ts = process.env.SIGN_TS || "http://timestamp.digicert.com";
  if (!pfx || !pass) {
    throw new Error("Defina SIGN_PFX e SIGN_PASS nas variáveis de ambiente");
  }
  const bundleDir = path.resolve("src-tauri/target/release/bundle");
  try {
    await stat(bundleDir);
  } catch {
    throw new Error("Artefatos não encontrados. Rode 'npm run tauri build' primeiro");
  }
  const all = await listFiles(bundleDir);
  const targets = all.filter((f) => f.endsWith(".exe") || f.endsWith(".msi"));
  for (const file of targets) {
    await run(
      "signtool",
      [
        "sign",
        "/f",
        `"${pfx}"`,
        "/p",
        `"${pass}"`,
        "/tr",
        `"${ts}"`,
        "/td",
        "sha256",
        "/fd",
        "sha256",
        `"${file}"`,
      ],
      process.cwd()
    );
    await run("signtool", ["verify", "/pa", `"${file}"`], process.cwd());
  }
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});

