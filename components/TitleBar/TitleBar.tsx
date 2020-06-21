import React from "react";
import { Flex, Box } from "reflexbox";
import Link from "next/link";

import { Container } from "../common";
import { TitleBarWrapper, Logo } from "./styles";

const TitleBar: React.FC = () => {
  return (
    <TitleBarWrapper>
      <Container>
        <Flex>
          <Box width={1 / 2}>
            <Link href="/">
              <a>
                <Logo src="/logo.svg" alt={`konfigure logo`} />
                Konfigure
              </a>
            </Link>
          </Box>
        </Flex>
      </Container>
    </TitleBarWrapper>
  );
};

export default TitleBar;
