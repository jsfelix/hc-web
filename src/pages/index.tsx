import type { NextPage } from "next";

import { MdConstruction } from "react-icons/md";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <MdConstruction className="mr-2 text-sky-700 dark:text-sky-300 text-3xl" />
      <p className="text-xl">Em breve!</p>
    </div>
  );
};

export default Home;
