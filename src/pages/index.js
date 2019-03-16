import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import styled, { createGlobalStyle } from "styled-components";

// Importing fonts
import AvertaBold from "../fonts/AvertaDemoPE-ExtraBold.otf";
import Averta from "../fonts/AvertaDemoPECuttedDemo-Regular.otf";

import SEO from "../components/seo";
import SceneOne from "../scenes/SceneOne";
import SceneTwo from "../scenes/SceneTwo";
import SceneThree from "../scenes/SceneThree";
import SceneFour from "../scenes/SceneFour";

const YELLOW = "#FEE7A4";
const GRAY = "#808285";
const VIOLET = "#A6B0D9";
const GREEN = "#B8DDB9";
const PINK = "#F48780";
const OFFWHITE = "#FFFFF0";
const WHITE = "#ffffff";
const PEACH = "#ffb993";

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

class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ReactPageScroller
          ref={c => (this.reactPageScroller = c)}
          animationTimer={1500}
          pageOnChange={() => console.log("pageScrolled!!!")}
        >
          <SceneOne />
          <SceneTwo />
          <SceneThree />
          <SceneFour />
        </ReactPageScroller>
        <GlobalStyle />
      </>
    );
  }
}

export default IndexPage;
