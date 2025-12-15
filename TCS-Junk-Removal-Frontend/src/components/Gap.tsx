interface props {
  height?: string | number;
}

export default function Gap({ height }: props) {
  return <div className={`${height}`} style={{ height: height }}></div>;
}
