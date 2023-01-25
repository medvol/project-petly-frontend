import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    
  }
  a {
     cursor: pointer;
     text-decoration: none;
  }
     P,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

`;
