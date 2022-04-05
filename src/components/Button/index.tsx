import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${className} bg-sky-500 py-4 px-6 text-sm text-white font-bold rounded hover:shadow-lg hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {
    // not implemented yet
  },
  className: '',
};
