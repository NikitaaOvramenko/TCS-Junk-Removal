interface props {
  height?: string | number;
  color?: string;
}

export default function Gap({ height, color }: props) {
  return (
    <div
      className={`${height} ${color}`}
      style={{ height: height, backgroundColor: color }}
    ></div>
  );
}
