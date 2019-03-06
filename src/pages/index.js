import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import styled, { createGlobalStyle } from "styled-components";
import { FaInstagram, FaFacebook, FaYelp } from "react-icons/fa";

// Importing fonts
import AvertaBold from "../fonts/AvertaDemoPE-ExtraBold.otf";
import Averta from "../fonts/AvertaDemoPECuttedDemo-Regular.otf";

import SEO from "../components/seo";
import {
  BiddefordSeal,
  SweetcreamLogo,
  Banner,
  Watermelon,
  Brownie,
  PinkJaggedBlob
} from "../components/svgElements";

const YELLOW = "#FEE7A4";
const GRAY = "#808285";
const VIOLET = "#A6B0D9";
const GREEN = "#B8DDB9";
const PINK = "#F48780";
const OFFWHITE = "#FFFFF0";
const WHITE = "#ffffff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvertaBold';
    src: url(${AvertaBold});
  }
  @font-face {
    font-family: 'Averta';
    src: url(${Averta});
  }
`;

const SceneWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: ${props => props.backgroundColor};
  z-index: -1;

  h1 {
    padding: 30px;
    font-size: 12rem;
    color: #f9edd3;
    font-family: "AvertaBold";
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
  z-index: 1;
`;

const InfoBlockContainer = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  alignt-items: center;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  height: 30vh;
  font-family: 'Averta';
  font-size: 3em;
  
  .intense {
    font-family: 'AvertaBold'
    font-size: 4em;
  }
`;

const BrownieWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 50px;
  left: 100px;
  z-index: 2;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 50px;
  left: 150px;
  z-index: 1;
`;

const PinkJaggedBlobWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 40%;
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
          <SceneWrapper backgroundColor={WHITE}>
            <BannerWrapper>
              <SweetcreamLogo />
              <SocialMedia>
                <FaInstagram size={"4em"} />
                <FaFacebook size={"4em"} />
                <FaYelp size={"4em"} />
              </SocialMedia>
              <InfoBlockContainer>
                <InfoBlock>
                  <span>
                    <span className="intense day">SUN - TUES</span>
                    <span>CLOSED</span>
                  </span>
                  <span>
                    <span className="intense day">WED - FRI</span>
                    <span>12P - 8P</span>
                  </span>
                  <span>
                    <span className="intense day">SAT</span>
                    <span>9P - 8P</span>
                  </span>
                </InfoBlock>
                <InfoBlock>
                  <span>
                    <span>(207) 520-2386</span>
                  </span>
                </InfoBlock>
              </InfoBlockContainer>
            </BannerWrapper>
          </SceneWrapper>
          <SceneWrapper backgroundColor={GREEN}>
            <BrownieWrapper>
              <Brownie />
            </BrownieWrapper>
            <BadgeWrapper>
              <BiddefordSeal />
            </BadgeWrapper>
            <Banner fill={VIOLET} />
          </SceneWrapper>
          <SceneWrapper backgroundColor={VIOLET}>
            <h1>Averta test</h1>
            <Watermelon />
            <PinkJaggedBlobWrapper>
              <PinkJaggedBlob />
            </PinkJaggedBlobWrapper>
          </SceneWrapper>
          <SceneWrapper backgroundColor={PINK}>
            <h1>Scene 4</h1>
          </SceneWrapper>
        </ReactPageScroller>
        <GlobalStyle />
      </>
    );
  }
}

export default IndexPage;
