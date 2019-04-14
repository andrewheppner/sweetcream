import React from "react";
import NavBar from "./NavBar";
import { createGlobalStyle } from "styled-components";

// Importing fonts
import AvertaBold from "../fonts/AvertaDemoPE-ExtraBold.otf";
import Averta from "../fonts/AvertaDemoPECuttedDemo-Regular.otf";

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
    font-family: 'Averta';
    src: url(${Averta});
  }
`;

const Layout = ({ children, color, logoSrc }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavBar color={color} logo={logoSrc} />
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
