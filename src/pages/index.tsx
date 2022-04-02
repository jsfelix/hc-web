import type { NextPage } from "next";
import { Content } from "../components/Content";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Content>Em breve!</Content>
    </div>
  );
};

export default Home;
