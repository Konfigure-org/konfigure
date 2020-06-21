import React from "react";
import { Flex, Box } from "reflexbox";
import Link from "next/link";
import { Button } from "antd";

import { Container } from "../common";

import META from "../../configs/meta";

import { TitleBarWrapper, Logo } from "./styles";

const TitleBar: React.FC = () => {
  return (
    <TitleBarWrapper>
      <Container>
        <Flex>
          <Box width={1 / 2}>
            <Link href="/">
              <a>
                <Logo
                  src="/logo.svg"
                  alt={`${META.title} ${META.description} logo`}
                />
                <h1>{META.title}</h1>
              </a>
            </Link>
          </Box>
          <Box width={1 / 2} textAlign="right">
            <Link href="/signup">
              <Button type="primary" size="large" shape="round">
                Sign up
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </TitleBarWrapper>
  );
};

export default TitleBar;
