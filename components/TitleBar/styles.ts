import styled, { css } from "styled-components";

export const TitleBarWrapper = styled.div`
  height: 80px;
  font-size: 32px !important;
  line-height: 80px;
  h1 {
    display: inline-block;
    font-size: inherit;
    color: inherit;
  }
  @media (max-width: 768px) {
    line-height: 60px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  vertical-align: text-top;
  margin-right: 4px;
`;
