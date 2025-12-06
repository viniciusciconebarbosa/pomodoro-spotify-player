type Props = {
  running: boolean;
  onToggle: () => void;
  onReset: () => void;
};

export default function Controls({ running, onToggle, onReset }: Props) {
  return (
    <div className="controls">
      <button onClick={onToggle}>{running ? "Pausar" : "Iniciar"}</button>
      <button className="reset-btn" onClick={onReset}>Resetar</button>
    </div>
  );
}

