interface Props {
  src: string;
}

export default function Avatar({ src }: Props) {
  return (
    <img
      style={{ width: "33px", borderRadius: "100%" }}
      className="shadow-border"
      referrerPolicy="no-referrer"
      src={src}
      alt=""
    />
  );
}
