import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaYelp } from "react-icons/fa";
// import posed from "react-pose";
import SEO from "../components/seo";
import {
  BiddefordSeal,
  SweetcreamLogo,
  Banner
} from "../components/svgElements";

const YELLOW = "#FEE7A4";
const GRAY = "#808285";
const VIOLET = "#A6B0D9";
const GREEN = "#B8DDB9";
const PINK = "#F48780";

const SceneWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: ${props => props.backgroundColor};

  h1 {
    padding: 30px;
    font-size: 12rem;
    color: #f9edd3;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMedia = styled.div`
  width: 100vw;
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #f9edd3;
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
          <SceneWrapper backgroundColor={GRAY}>
            <BannerWrapper>
              <SweetcreamLogo />
              <SocialMedia>
                <FaInstagram size={"4em"} />
                <FaFacebook size={"4em"} />
                <FaYelp size={"4em"} />
              </SocialMedia>
            </BannerWrapper>
          </SceneWrapper>
          <SceneWrapper backgroundColor={GREEN}>
            {/* <h1>Scene 2</h1> */}
            <Banner fill={VIOLET} />
          </SceneWrapper>
          <SceneWrapper backgroundColor={VIOLET}>
            <h1>Scene 3</h1>
          </SceneWrapper>
          <SceneWrapper backgroundColor={PINK}>
            <h1>Scene 4</h1>
          </SceneWrapper>
        </ReactPageScroller>
      </>
    );
  }
}

export default IndexPage;
