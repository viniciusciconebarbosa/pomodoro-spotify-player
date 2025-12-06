type Props = {
  src: string;
};

export default function BackgroundVideo({ src }: Props) {
  return <video className="background-video" src={src} autoPlay loop muted playsInline />;
}

