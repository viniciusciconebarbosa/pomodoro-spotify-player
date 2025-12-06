type Props = {
  embedKey: number;
  onRefresh: () => void;
};

export default function SpotifyPlayer({ embedKey, onRefresh }: Props) {
  return (
    <div className="spotify-wrapper">
      <div className="spotify-header">
        <button className="power-btn" onClick={onRefresh} title="Recarregar Player">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        </button>
      </div>
      <iframe
        key={embedKey}
        className="spotify-embed"
        src="https://open.spotify.com/embed/playlist/27qLGri6S21veVdixOFSie?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture "
        loading="eager"
      />
    </div>
  );
}

