import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: 'Helvetica';
  }`;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={{ color: `blue` }}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  );
};
