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
  BannerTwo,
  Watermelon,
  Brownie,
  PinkJaggedBlob,
  YellowBlob,
  SeedsOne,
  Strawberry,
  SeedsTwo,
  GreenBlob,
  Cone,
  Peach,
  Lime
} from "../components/svgElements";

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

const SceneWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: ${props => props.backgroundColor};
  z-index: 0;

  h1 {
    padding: 30px;
    font-size: 12rem;
    color: #f9edd3;
    font-family: "AvertaBold";
  }

  h4 {
    font-size: 3rem;
    color: #f9edd3;
    font-family: "AvertaBold";
    padding-left: 30px;
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
  margin-top: 10%;
  width: 90%;
  height: 50%;
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
  z-index: 0;
  animation: verticalSlide 5s steps(22, start);
  animation-delay: 3s;
  // transform: translateY(-400px);

  // @keyframes verticalSlide {
  //   0% {
  //     transform: translateY(-200px);
  //   }

  //   10% {
  //     transform: translateY(-20px);
  //   }

  //   30% {
  //     transform: translateY(50px);
  //   }

  //   50% {
  //     transform: translateY(30px);
  //   }

  //   70% {
  //     transform: translateY(500px);
  //   }

  //   100% {
  //     transform: translateY(1200px);
  //   }
  // }
`;

const BadgeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: -80px;
  left: 100px;
  z-index: -1;
`;

const PinkJaggedBlobWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 40%;
`;

const GreenBlobWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -20px;
  height: 100%;
  width: 50%;
  z-index: -1;
  animation: jiggle 9s steps(30, start);

  @keyframes jiggle {
    0% {
      transform: translateX(20px);
    }

    10% {
      transform: translateX(70px);
    }

    30% {
      transform: translateX(150px);
    }

    50% {
      transform: translateX(90px);
    }

    70% {
      transform: translateX(30px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;

const TextBox = styled.div`
  width: 40%;
  height: 100%;
  border: 2px solid black;
  text-align: justify;
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.9);
  padding: 30px;
  background: white;
  font-family: "Averta";
  display: flex;
  z-index: 1;

  &.fullWidth {
    width: 60%;
    height: 65%;
    margin: auto;
  }

  .bold {
    font-family: 'AvertaBold'
    font-size: 5rem;
  }

  .left {
    padding: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-family: "AvertaBold";

    span {
      display: block;
    }
  }

  .right {
    padding: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      display: block;
    }
  }

  .center {
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      display: block;
    }

    a {
      color: black;
      z-index: 10;
    }
  }
`;

const PositionalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  z-index: ${props => props.zIndex};
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

class IndexPage extends Component {
  render() {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* <ReactPageScroller
          ref={c => (this.reactPageScroller = c)}
          animationTimer={1500}
          pageOnChange={() => console.log("pageScrolled!!!")}
        > */}
        {/* <SceneWrapper backgroundColor={WHITE} /> */}
        <SceneWrapper backgroundColor={GREEN}>
          <PinkJaggedBlobWrapper>
            <PinkJaggedBlob />
          </PinkJaggedBlobWrapper>
          <PositionalWrapper top={20} right={20} zIndex={1}>
            <Cone />
          </PositionalWrapper>
          <BadgeWrapper>
            <BiddefordSeal />
          </BadgeWrapper>
          <BannerWrapper>
            <SweetcreamLogo />
            <InfoBlockContainer>
              <TextBox>
                <div className="left">
                  <span>MON</span>
                  <span>TUE-FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>
                <div className="right">
                  <span>Closed</span>
                  <span>12P-8P</span>
                  <span>9A-8P</span>
                  <span>12P-8P</span>
                </div>
              </TextBox>
              <TextBox>
                <div className="center">
                  <p>
                    <span>410 Main St.</span>
                    <span>Building 13 - Suite 138</span>
                    <span>Biddeford, Maine</span>
                  </p>
                  <span>(207) 520-2386</span>
                  <a href="www.twitter.com/gatsbyjs">Twitter</a>
                </div>
              </TextBox>
            </InfoBlockContainer>
          </BannerWrapper>
        </SceneWrapper>
        <SceneWrapper backgroundColor={PINK}>
          <GreenBlobWrapper>
            <GreenBlob />
          </GreenBlobWrapper>
          <PositionalWrapper top={50} right={-250} zIndex={3}>
            <TextBox>
              <div className="center">
                <p>
                  <span>
                    SIMPLE We keep our ingredient list short. We believe that
                    fewer components translates to better, brighter, and more
                    genuine flavor.
                  </span>
                </p>
                <p>
                  <span>
                    NATURAL We do not use corn syrup, artificial flavorings,
                    gums, or emulsifiers.
                  </span>
                </p>
                <p>
                  <span>
                    LOCAL We source our ingredients and flavorings directly from
                    Maine farms whenever possible.
                  </span>
                </p>
              </div>
            </TextBox>
          </PositionalWrapper>
          <PositionalWrapper top={200} right={50} zIndex={2}>
            <SeedsTwo />
          </PositionalWrapper>
          <div>
            <h1>46%</h1>
            <h4>
              of total food costs went directly into the hands of local farmers
            </h4>
          </div>
        </SceneWrapper>
        <SceneWrapper backgroundColor={VIOLET}>
          <PinkJaggedBlobWrapper>
            <PinkJaggedBlob />
          </PinkJaggedBlobWrapper>
          <BrownieWrapper>
            <Brownie />
          </BrownieWrapper>
          <TextBox className="fullWidth">Cake Info</TextBox>
        </SceneWrapper>
        <SceneWrapper backgroundColor={PEACH}>
          <PositionalWrapper top={0} right={0} zIndex={1}>
            <YellowBlob />
          </PositionalWrapper>
          <PositionalWrapper top={400} right={500} zIndex={1}>
            <Peach />
          </PositionalWrapper>
          <PositionalWrapper top={200} right={300} zIndex={1}>
            <Strawberry />
          </PositionalWrapper>
          <PositionalWrapper top={100} left={100} zIndex={1}>
            <Lime />
          </PositionalWrapper>
        </SceneWrapper>
        {/* </ReactPageScroller> */}
        <GlobalStyle />
      </>
    );
  }
}

export default IndexPage;
