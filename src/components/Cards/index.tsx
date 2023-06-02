import { Card, Col, Image, Row, Button, Text } from "@nextui-org/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";

export const LotteryCard = (props: any) => {
  const loteria = props.loteria;
  const resultadoConcurso = props.resultadoConcurso;

  const [acumulou, setAcumulou] = useState(false);
  const [cardHeight, setCardHeight] = useState("14rem");
  const [cloverImage, setCloverImage] = useState("");
  const [lotteryColor, setLotteryColor] = useState("");

  useEffect(() => {
    if (loteria === "QUINA") {
      setCloverImage("trevo_quina.png");
      setLotteryColor("#260085");
    }

    if (loteria === "MEGA-SENA") {
      setCloverImage("trevo_megasena.png");
      setLotteryColor("#209869");
    }

    if (resultadoConcurso.acumulou) {
      setCardHeight("20rem");
    }
    setAcumulou(resultadoConcurso.acumulou);
  }, [
    loteria,
    resultadoConcurso.acumulou,
    setCardHeight,
    setAcumulou,
    setLotteryColor,
  ]);

  return (
    <Card
      css={{
        width: "50%",
        height: cardHeight,
        margin: "0 auto",
        position: "relative",
        marginBottom: "2rem",
        "@smMax": {
          width: "100%",
          height: "28rem",
        },
      }}
    >
      <Card.Header
        css={{
          position: "absolute",
          backgroundColor: "$whiteColor",
        }}
      >
        <Col
          css={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextImage
            src={`/assets/${cloverImage}`}
            alt="Trevo da Sorte"
            width={32}
            height={32}
          />
          <Text
            css={{
              fontSize: "32px",
              fontWeight: 600,
              color: `${lotteryColor}`,
              fontFamily: "$roboto",
              "@smMax": {
                fontSize: "24px",
                textAlign: "center",
              },
            }}
          >
            &nbsp;{loteria}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body
        css={{
          display: "flex",
          alignItems: "center",
          marginTop: "4rem",
          "@smMax": {
            marginTop: "3rem",
          },
        }}
      >
        <Row
          justify="center"
          css={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Text
            css={{
              fontSize: "24px",
              fontWeight: "bold",
              color: `${lotteryColor}`,
              "@smMax": {
                fontSize: "18px",
              },
            }}
          >
            Concurso: {resultadoConcurso.concurso}
          </Text>
          &nbsp;&nbsp;&nbsp;
          <Text
            css={{
              fontSize: "24px",
              fontWeight: "bold",
              color: `${lotteryColor}`,
              "@smMax": {
                fontSize: "18px",
              },
            }}
          >
            Data: {resultadoConcurso.data}
          </Text>
        </Row>
        <Row justify="center"
          css={{
            display: "flex",
            flexWrap: "wrap",
            "@smMax": {
              paddingTop: "1rem",
            },
          }}
          >
          {resultadoConcurso.dezenas &&
            resultadoConcurso.dezenas?.map((numbers: number) => {
              return (
                <Button
                  auto
                  key={Math.random()}
                  css={{
                    fontSize: "1rem",
                    padding: "1rem",
                    width: "48px",
                    height: "48px",
                    borderRadius: "48px",
                    backgroundColor: `${lotteryColor}`,
                    color: "$whiteColor",
                    fontWeight: "bold",
                    marginRight: "0.5rem",
                    marginBottom: "0.5rem", // Espaçamento vertical entre os botões
                    pointerEvents: "none",
                  }}
                >
                  {numbers}
                </Button>
              );
            })}
        </Row>
      </Card.Body>
      {acumulou ? (
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
            width: "100%",
            textAlign: "center",
            backgroundColor: "$whiteColor",
          }}
        >
          <Row>
            <Col>
              <Row
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  css={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: `${lotteryColor}`,
                  }}
                >
                  ACUMULOU!
                </Text>
              </Row>
              <Row
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  css={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: `${lotteryColor}`,
                  }}
                >
                  {"Estimado para o próximo concurso " +
                    resultadoConcurso.acumuladaProxConcurso}
                </Text>
              </Row>
              <Row
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  css={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: `${lotteryColor}`,
                  }}
                >
                  {"Data do próximo concurso: " +
                    resultadoConcurso.dataProxConcurso}
                </Text>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      ) : null}
    </Card>
  );
};
