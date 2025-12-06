import type { Mode } from "../types.ts";

type Props = {
  mode: Mode;
  onSwitch: (m: Mode) => void;
};

export default function ModeTabs({ mode, onSwitch }: Props) {
  return (
    <div className="tabs">
      <button className={mode === "work" ? "active" : ""} onClick={() => onSwitch("work")}>Foco</button>
      <button className={mode === "short" ? "active" : ""} onClick={() => onSwitch("short")}>Pausa Curta</button>
      <button className={mode === "long" ? "active" : ""} onClick={() => onSwitch("long")}>Pausa Longa</button>
    </div>
  );
}
