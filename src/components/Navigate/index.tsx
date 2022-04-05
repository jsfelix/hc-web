import Link from 'next/link';
import { ReactNode } from 'react';

type NavigateProps = {
  href: string;
  children: ReactNode;
};

export function Navigate({ href, children }: NavigateProps) {
  return (
    <Link href={href} passHref>
      <a href="dummy">{children}</a>
    </Link>
  );
}
