import type { NextPage } from "next";
import { Button, Col, Container, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import { LotteryCard } from "../components/Cards";

const Home: NextPage = () => {
  const { push } = useRouter();

  const [data] = useRequestData(
    [],
    `https://loteriascaixa-api.herokuapp.com/api`
  );
  const [concursos] = useRequestData([],`https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`);
  const [loterias, setLoterias] = useState(0);
  const [valor, setValor] = useState(2359);

  //Setando o nome
  // const nomeLoteria = data && data?.filter((loteria: any) => {
  //   return loterias === loteria.nome
  // });

  // console.log("concursos", concursos.dezenas);

  //Vou filtrar o id da loteria-concurso pelo id do select
  // const loteriaconcurso = concursos?.filter((loteria: any) => {
  //   return loterias === loteria.loteriaId
  // });

  // console.log("Loteria Concursos *** " , loteriaconcurso)

  //Buscando os resultados dos sorteios
  const [resultadoConcursoMegaSena] = useRequestData([],`https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`);
  const [resultadoConcursoQuina] = useRequestData([],`https://loteriascaixa-api.herokuapp.com/api/quina/latest`);

  return (
    <Container
      fluid
      responsive={false}
      display={"flex"}
      gap={0}
      alignItems={"center"}
      justify={"center"}
      direction={"row"}
      css={{
        background: "$backgroundColor",
        height: "100%",
      }}
    >
      <Header />

      <Row
        css={{
          maxWidth: "1440px",
          padding: 0,
          height: "100vh",
          "@smMax": {
            flexDirection: "column-reverse",
            maxWidth: "100%",
            height: "auto",
            padding: 0,
          },
        }}
      >
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            margin: "2rem", // Divisão dos Cards
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LotteryCard
            loteria="MEGA-SENA"
            resultadoConcurso={resultadoConcursoMegaSena}
          />
          
          <LotteryCard
            loteria="QUINA"
            resultadoConcurso={resultadoConcursoQuina}
          />

          <Row
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
