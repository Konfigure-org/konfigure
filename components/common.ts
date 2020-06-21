import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 4px;
    padding-right: 4px;
  }
`;
