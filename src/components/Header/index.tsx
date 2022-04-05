import { MdMusicNote } from 'react-icons/md';
import { Navigate } from '../Navigate';

export function Header() {
  return (
    <div className="container">
      <Navigate href="/">
        <h1 className="flex text-2xl font-bold text-sky-500">
          <MdMusicNote className="text-3xl p-1 mr-2 bg-sky-500 text-white rounded" />
          hinariocentral
        </h1>
        <p className="text-slate-500 dark:text-slate-400 italic text-sm">
          O portal de hinos evangélicos
        </p>
      </Navigate>
    </div>
  );
}
