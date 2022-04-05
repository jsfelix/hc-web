import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="container">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        &copy;{year} hinariocentral - Todos os direitos reservados.
      </p>
    </div>
  );
}
