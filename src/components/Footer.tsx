import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, [currentYear]);

  return (
    <footer className="mt-8 pt-2 border-t-2 border-slate-800">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy;{currentYear} hinariocentral.net - Todos os direitos reservados.
      </p>
    </footer>
  );
}
