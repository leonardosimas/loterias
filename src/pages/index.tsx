import type { NextPage } from "next";
import { Button, Col, Container, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";

const Home: NextPage = () => {
  const { push } = useRouter();

  const [data] = useRequestData(
    [],
    `https://loteriascaixa-api.herokuapp.com/api`
  );
  const [concursos] = useRequestData(
    [],
    `https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`
  );
  const [loterias, setLoterias] = useState(0);
  const [valor, setValor] = useState(2359);

  //Setando o nome
  // const nomeLoteria = data && data?.filter((loteria: any) => {
  //   return loterias === loteria.nome
  // });

  console.log("concursos", concursos.dezenas);

  //Vou filtrar o id da loteria-concurso pelo id do select
  // const loteriaconcurso = concursos?.filter((loteria: any) => {
  //   return loterias === loteria.loteriaId
  // });

  // console.log("Loteria Concursos *** " , loteriaconcurso)

  //Buscando os resultados dos sorteios
  const [resultadoConcurso] = useRequestData(
    [],
    `https://loteriascaixa-api.herokuapp.com/api/mega-sena/latest`
  );

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
        background: "#EFEFEF",
        height: "100%",
      }}
    >
      <Header />
      <Row
        css={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Row
          css={{
            maxWidth: "1440px",
            padding: "0 2rem",
            height: "100vh",
            "@smMax": {
              flexDirection: "column-reverse",
              maxWidth: "100%",
              height: "auto",
              padding: "2rem",
            },
          }}
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              margin: "auto 0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              css={{
                fontSize: "48px",
                fontWeight: 600,
                color: "$megasenaColor",
                "@smMax": {
                  fontSize: "40px",
                  textAlign: "center",
                  marginTop: "2rem",
                },
              }}
            >
              MEGA-SENA
            </Text>
            <Row
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {resultadoConcurso.dezenas &&
                resultadoConcurso.dezenas?.map((numbers: number) => {
                  return (
                    <Button
                      auto
                      key={Math.random()}
                      css={{
                        padding: "1rem",
                        width: "48px",
                        height: "48px",
                        borderRadius: "48px",
                        backgroundColor: "$megasenaColor",
                        color: "$blackColor",
                        fontWeight: "bold",
                      }}
                    >
                      {numbers}
                    </Button>
                  );
                })}
            </Row>
            <Text
              css={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "$megasenaColor",
              }}
            >Concurso: {resultadoConcurso.concurso}</Text>
            <Text
              css={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "$megasenaColor",
              }}
            >Data: {resultadoConcurso.data}</Text>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
