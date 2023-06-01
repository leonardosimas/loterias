import { useEffect, useState } from "react";
import { Button, Navbar, Link, Text } from "@nextui-org/react";

export default function Header(props: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <Navbar
      disableShadow
      maxWidth={"fluid"}
      containerCss={{
        justifyContent: "center",
        $$navbarBlurBackgroundColor: "#2a9df4",
        $$navbarBackgroundColor: "#2a9df4",
        $$navbarPadding: 0,
        $$navbarContainerMaxWidth: "100%",
        maxW: "100%",
        height: "6rem",
        margin: 0,
        maxHeight: "1rem",
        boxSizing: "inherit",
        borderBottom: "$borderWeights$light solid rgba(124, 122, 128, 0.35)",
        zIndex: 99999,
        "@smMax": {
          $$navbarBlurBackgroundColor: "#2a9df4",
          display: "flex",
          width: "100%",
          height: "50px",
          maxHeight: "1rem",
          margin: "0",
          borderBottom: "$borderWeights$light solid $greyColor",
        },
      }}
    >
      <Navbar.Content
        css={{
          background: "#2a9df4",
          justifyContent: "center",
          width: "100%",
          margin: 0,
          color: "#1A1A1F",
          "@smMax": {
            margin: 0,
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            background: "#2a9df4",
          },
        }}
      >
        <Navbar.Item>
          <Text
            css={{
              color: "$whiteBlue",
              fontWeight: "bold",
              fontSize: "40px !important",
              fontFamily: "$roboto",
              "@smMax": {
                fontSize: "24px !important",
              },
            }}
          >
            RESULTADOS DAS LOTERIAS
          </Text>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
