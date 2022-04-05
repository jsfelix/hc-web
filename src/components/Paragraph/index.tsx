import { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export function Paragraph({ children, className = "" }: ParagraphProps) {
  return <p className={`${className} py-2 font-light leading-7`}>{children}</p>;
}
