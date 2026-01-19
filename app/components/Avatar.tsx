interface Props {
  src: string;
  size?: string;
}

export default function Avatar({ src, size }: Props) {
  return (
    <img
      style={{ width: size || "33px", borderRadius: "100%" }}
      className="shadow-border"
      referrerPolicy="no-referrer"
      src={src}
      alt=""
    />
  );
}
