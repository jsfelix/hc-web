import type { NextPage } from "next";
import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { Paragraph } from "../components/Paragraph";

const Home: NextPage = () => {
  return (
    <div className="container">
      <PageTitle title="Em breve!" />
      <Paragraph>
        Estamos preparando o maior banco de dados de hinos evangélicos em língua
        portuguesa!
      </Paragraph>
      <Paragraph>
        Tudo começou em 2005, num projeto de reunir partituras de hinos
        evangélicos e restaurar a história da hinódia em língua portuguesa, hoje
        já muito esquecida e pouco explorada pelas instituições religiosas em
        geral. Para isso, comecei naquela época a escrever as partituras
        clássicas dos hinos tradicionais para impressão de alta qualidade em
        PDF, utilizando o{" "}
        <a
          className="link"
          href="https://lilypond.org"
          target="_blank"
          rel="noreferrer"
        >
          Lilypond
        </a>
        , que é um editor de partituras de código livre e de fácil utilização,
        apesar de não possuir uma interface amigável para escrita das
        partituras, como temos no Finale ou no Sibelius.
      </Paragraph>
      <Paragraph>
        Mas por diversos motivos, este projeto não avançou de forma
        satisfatória. No entanto, o projeto está sendo retomado, e o portal
        entrará no ar em breve, com um catálogo de partituras e hinos em língua
        portuguesa jamais antes visto!
      </Paragraph>
      <Paragraph>
        Para não perder o lançamento desta novidade, recomendo assinar nossa
        newsletter!
      </Paragraph>
      <Button
        className="flex mx-auto my-4 sm:my-6 md:my-8"
        onClick={() => alert("Hello")}
      >
        Assinar newsletter
      </Button>
    </div>
  );
};

export default Home;
