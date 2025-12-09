import type { ReactNode } from "react";

interface props {
  children?: ReactNode;
  className?: string;
}

export default function Section({ children, className }: props) {
  return <div className={`h-dvh w-full ${className}`}>{children}</div>;
}
