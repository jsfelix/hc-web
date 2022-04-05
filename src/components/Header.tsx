import { MdMusicNote } from "react-icons/md";

export function Header() {
  return (
    <header className="pb-2 mb-4 border-b-2 border-slate-800">
      <h1 className="flex items-center text-2xl pb-2 text-sky-700 dark:text-sky-300">
        <MdMusicNote className="mr-1" /> hinariocentral.net
      </h1>
      <h2 className="text-gray-500 italic text-sm">
        O portal de hinos evangélicos
      </h2>
    </header>
  );
}
