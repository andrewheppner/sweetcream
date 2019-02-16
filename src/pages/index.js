import React, { Component } from "react";
import styled from "styled-components";
import { window, document } from "browser-monads";
import P5Wrapper from "react-p5-wrapper";
import SEO from "../components/seo";
import { BiddefordSeal, SweetcreamLogo } from "../components/svgElements";

const MainWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;

const Canvas = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow-y: scroll;
`;

const Box = styled.div`
  position: absolute
  left: 500px;
  transform: translateY(${props => (props.top < 1000 ? props.top : 1000)}px);
  width: 200px;
  height: 200px;
  background-color: white;
  // transition: all linear 0s;
`;

function sketch(p) {
  let points;
  let noiseScaleX;
  let noiseScaleY;
  let stepsPerFrame;

  p.setup = () => {
    stepsPerFrame = 3;
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noFill();
    p.strokeWeight(6);
    p.stroke("#8B97B9");
    reset();
  };

  p.draw = () => {
    for (let i = 0; i < stepsPerFrame; i++) {
      drawLine();
    }
  };

  function reset() {
    p.background("#BA6446");
    noiseScaleX = p.random(0.001, 0.009);
    noiseScaleY = p.random(0.004, 0.009);
    resetPoints();
  }

  function resetPoints() {
    points = [];
    for (let i = 0; i < p.windowWidth; i++) {
      points.push([i, 0]);
    }
  }

  function drawLine() {
    p.beginShape();
    let atLeastOneOnScreen = false;
    points.forEach(point => {
      p.vertex(point[0], point[1]);
      point[1] += p.noise(
        point[0] * 1.1 * noiseScaleX,
        p.frameCount * 0.001 * noiseScaleY
      );
      if (point[1] < p.windowHeight * 1.1) {
        atLeastOneOnScreen = true;
      }
    });
    p.endShape();
    if (!atLeastOneOnScreen) {
      reset();
    }
  }
}

class IndexPage extends Component {
  state = {
    scrollY: null
  };

  updateScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    window.addEventListener("scroll", () => this.updateScroll());
  }

  componentWillUnmount() {
    window.addEventListener("scroll", () => this.updateScroll());
  }

  render() {
    console.log(this.state.scrollY, "scrollY");
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <MainWrapper>
          <Canvas>
            <P5Wrapper sketch={sketch} />
          </Canvas>
          <BiddefordSeal />
          <Box top={5 * this.state.scrollY} />
          <SweetcreamLogo />
        </MainWrapper>
      </>
    );
  }
}

export default IndexPage;
