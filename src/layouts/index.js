import React from "react";
import NavBar from "../components/NavBar";
import { createGlobalStyle } from "styled-components";

// Importing fonts
import AvertaBold from "../fonts/Averta-Bold.otf";
import AvertaSemiBold from "../fonts/Averta-Semibold.otf";
import Averta from "../fonts/Averta-Regular.otf";

import SEO from "../components/seo";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  @font-face {
    font-family: 'AvertaBold';
    src: url(${AvertaBold});
  }
  @font-face {
    font-family: 'AvertaSemiBold';
    src: url(${AvertaSemiBold});
  }
  @font-face {
    font-family: 'Averta';
    src: url(${Averta});
  }
`;

const Layout = ({ children }) => (
  <>
    <SEO
      title="Home"
      keywords={[`Ice Cream`, `Biddeford`, `Maine`, `Portland`, `Sweetcream`]}
    />
    <NavBar />
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
