import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { getCurrentWindow } from "@tauri-apps/api/window";
import "./App.css";
import bgVideo from "./assets/background.mp4";
import TitleBar from "./components/TitleBar";
import PinButton from "./components/PinButton";
import BackgroundVideo from "./components/BackgroundVideo";
import ModeTabs from "./components/ModeTabs";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SpotifyPlayer from "./components/SpotifyPlayer";
import { DURATIONS, type Mode } from "./types";

function App() {
  const [mode, setMode] = useState<Mode>("work");
  const [timeLeft, setTimeLeft] = useState(DURATIONS.work);
  const [running, setRunning] = useState(false);
  const [spotifyTriggered, setSpotifyTriggered] = useState(false);
  const [embedKey, setEmbedKey] = useState(0);
  const [alwaysOnTop, setAlwaysOnTop] = useState(false);

  useEffect(() => {
    let id: number | undefined;
    if (running && timeLeft > 0) {
      id = window.setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }
    if (timeLeft === 0 && running) {
      setRunning(false);
      setEmbedKey((k) => k + 1);
      alert("Tempo esgotado!");
    }
    return () => {
      if (id) window.clearInterval(id);
    };
  }, [running, timeLeft]);

  useEffect(() => {
    const triggerSpotify = async () => {
      if (running && mode === "work" && !spotifyTriggered) {
        try {
          setSpotifyTriggered(true);
        } catch (e) {
          await openUrl("https://open.spotify.com/playlist/27qLGri6S21veVdixOFSie?utm_source=generator&theme=0");
          setSpotifyTriggered(true);
        }
      }
    };
    triggerSpotify();
  }, [running, mode, spotifyTriggered]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setRunning(false);
    setTimeLeft(DURATIONS[m]);
    setSpotifyTriggered(false);
  };

  const toggle = () => {
    setRunning((r) => !r);
  };
  const reset = () => {
    setRunning(false);
    setTimeLeft(DURATIONS[mode]);
    setSpotifyTriggered(false);
  };

  const refreshPlayer = () => {
    setEmbedKey((k) => k + 1);
  };

  const toggleAlwaysOnTop = async () => {
    const newStatus = !alwaysOnTop;
    setAlwaysOnTop(newStatus);
    await getCurrentWindow().setAlwaysOnTop(newStatus);
  };

  const appWindow = getCurrentWindow();

  const minimize = () => appWindow.minimize();
  const toggleMaximize = async () => {
    const isMax = await appWindow.isMaximized();
    if (isMax) {
      await appWindow.unmaximize();
    } else {
      await appWindow.maximize();
    }
  };
  const closeApp = () => appWindow.close();
  const startDrag = (e: MouseEvent) => {
    if (e.detail === 2) {
      void toggleMaximize();
      return;
    }
    appWindow.startDragging();
  };

  return (
    <main className="container">
      <TitleBar onMinimize={minimize} onToggleMaximize={toggleMaximize} onClose={closeApp} onStartDrag={startDrag} />
      <BackgroundVideo src={bgVideo} />
      <PinButton
        active={alwaysOnTop}
        onClick={toggleAlwaysOnTop}
        title={alwaysOnTop ? "Desafixar janela" : "Fixar janela no topo"}
      />
      <div className="pomodoro">
        <h1>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="2" width="6" height="2" fill="currentColor"/>
            <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 13V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16.5 4L18.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Pomodoro Timer
        </h1>
        <ModeTabs mode={mode} onSwitch={switchMode} />
        <TimerDisplay timeLeft={timeLeft} />
        <Controls running={running} onToggle={toggle} onReset={reset} />
        <SpotifyPlayer embedKey={embedKey} onRefresh={refreshPlayer} />
      </div>
    </main>
  );
}

export default App;
