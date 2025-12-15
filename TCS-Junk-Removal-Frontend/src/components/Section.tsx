import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Section({ children, className }: Props) {
  return (
    <div className={`w-full  h-[1024px] lg:h-dvh ${className ?? ""}`}>
      {children}
    </div>
  );
}
