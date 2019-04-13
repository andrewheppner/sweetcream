import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Element } from "react-scroll";

// Importing fonts
import AvertaBold from "../fonts/AvertaDemoPE-ExtraBold.otf";
import Averta from "../fonts/AvertaDemoPECuttedDemo-Regular.otf";

import SEO from "../components/seo";
import NavBar from "../components/NavBar";

import SceneOne from "../scenes/SceneOne";
import SceneTwo from "../scenes/SceneTwo";
import SceneThree from "../scenes/SceneThree";
import SceneFour from "../scenes/SceneFour";

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
  constructor() {
    super();
    this.state = {
      activeScene: 1
    };
    this.setActiveScene = this.setActiveScene.bind(this);
  }

  setActiveScene(nextScene) {
    this.setState({
      activeScene: nextScene
    });
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <NavBar currentScene={this.state.activeScene} />
        <Element name="SceneOne">
          <SceneOne handleEnter={this.setActiveScene} />
        </Element>
        <Element name="SceneTwo">
          <SceneTwo handleEnter={this.setActiveScene} />
        </Element>
        <Element name="SceneThree">
          <SceneThree handleEnter={this.setActiveScene} />
        </Element>
        <Element name="SceneFour">
          <SceneFour handleEnter={this.setActiveScene} />
        </Element>
        <GlobalStyle />
      </>
    );
  }
}

export default IndexPage;
