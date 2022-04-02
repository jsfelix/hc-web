import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return <div className="p-3">{children}</div>;
}
