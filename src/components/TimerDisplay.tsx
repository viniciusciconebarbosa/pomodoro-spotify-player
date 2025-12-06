import { useMemo } from "react";

type Props = {
  timeLeft: number;
};

export default function TimerDisplay({ timeLeft }: Props) {
  const formatted = useMemo(() => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [timeLeft]);

  return <div className="timer-display">{formatted}</div>;
}

