import type { MouseEvent } from "react";

type Props = {
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onClose: () => void;
  onStartDrag: (e: MouseEvent) => void;
};

export default function TitleBar({ onMinimize, onToggleMaximize, onClose, onStartDrag }: Props) {
  return (
    <div className="titlebar">
      <div className="titlebar-drag" onMouseDown={onStartDrag}></div>
      <div className="titlebar-controls">
        <button className="titlebar-btn minimize" onClick={onMinimize} title="Minimizar">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            <rect x="2" y="8" width="6" height="2" fill="currentColor"/>
          </svg>
        </button>
        <button className="titlebar-btn maximize" onClick={onToggleMaximize} title="Maximizar">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 2H8V8H2V2ZM3 3V7H7V3H3Z" fill="currentColor"/>
          </svg>
        </button>
        <button className="titlebar-btn close" onClick={onClose} title="Fechar">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 1H3V2H4V3H6V2H7V1H9V3H8V4H7V6H8V7H9V9H7V8H6V7H4V8H3V9H1V7H2V6H3V4H2V3H1V1Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

