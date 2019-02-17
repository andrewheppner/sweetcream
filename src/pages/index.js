import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
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

const BannerWrapper = styled.div`
  width: 100%;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBanner = posed.div({
  hidden: { opacity: 0, width: "100%" },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      opacity: { ease: "easeIn", duration: 1000 },
      default: { ease: "linear", duration: 500 }
    }
  }
});

const sketch = p => {
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
    points.forEach(point => {
      p.vertex(point[0], point[1]);
      point[1] += p.noise(
        point[0] * 1.1 * noiseScaleX,
        p.frameCount * 0.001 * noiseScaleY
      );
    });
    p.endShape();
  }
};

class IndexPage extends Component {
  state = {
    scrollY: null,
    showBanner: false
  };

  updateScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showBanner: !this.state.showBanner
      });
    }, 1000);
    this.P5Wrapper = require("react-p5-wrapper");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => this.updateScroll());

      this.setState({ sketch });
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => this.updateScroll());
    }
  }

  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <MainWrapper>
          <Canvas>
            {this.state.sketch && <this.P5Wrapper sketch={this.state.sketch} />}
          </Canvas>
          <TitleBanner
            key="Title Banner"
            pose={this.state.showBanner ? "visible" : "hidden"}
          >
            <BannerWrapper>
              <SweetcreamLogo />
              <BiddefordSeal />
            </BannerWrapper>
          </TitleBanner>
        </MainWrapper>
      </>
    );
  }
}

export default IndexPage;
