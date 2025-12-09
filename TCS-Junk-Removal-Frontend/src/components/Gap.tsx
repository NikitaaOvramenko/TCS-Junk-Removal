interface props {
  height?: number;
}

export default function gap({ height }: props) {
  return <div style={{ height: height }}></div>;
}
