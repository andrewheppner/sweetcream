import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import Layout from "../components/layout";
import WhiteLogo from "../images/logo-white.svg";
import ShopSvg from "../images/shop.svg";
import SeedsSvg from "../images/seeds.svg";
import BadgeSvg from "../images/findus_corner.svg";

const GREEN = "#B8DDB9";
const WHITE = "#FFFFFF";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

const Shop = styled.div`
  width: 30%;
  height: auto;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const Seeds = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 70%;
  left: 30%;
`;

const Heading = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-family: AvertaBold;
  font-size: 3.5vw;
  color: ${props => props.color};
`;

const TextBlock = styled.div`
  position: absolute;
  width: 40%;
  font-size: 1.1vw;
  font-family: Averta;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};

  .header {
    font-family: AvertaBold;
    font-size: 3.5vw;
    margin-bottom: 5%;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bold {
    font-family: AvertaSemiBold;
  }
`;

const SceneFour = props => (
  <SceneWrapper backgroundColor={GREEN} height="165vh">
    <Layout color={WHITE} logoSrc={WhiteLogo}>
      <Heading top="15%" left="10%" color={WHITE}>
        SCOOP SHOP
      </Heading>
      <TextBlock top="17%" left="35%" color={WHITE}>
        <p>
          <span>40 Main st.</span>
          <span>Building 13 - Suite 138</span>
          <span>Biddeford, ME</span>
        </p>
        <p>
          <span>Hours</span>
          <span>Mon - CL</span>
          <span>Tue: 12 - 8 PM</span>
          <span>Wed: 12 - 8 PM</span>
          <span>Thu: 12 - 8 PM</span>
          <span>Fri: 12 - 8 PM</span>
          <span>Sat: 12 - 8 PM</span>
          <span>Sun: 12 - 8 PM</span>
        </p>
      </TextBlock>
      <Shop>
        <img src={ShopSvg} />
      </Shop>
      <TextBlock top="55%" left="0%" color={WHITE}>
        <span className="header">PINTS</span>
        <p>
          <span>Coming Soon!</span>
        </p>
      </TextBlock>
      <TextBlock top="55%" left="45%" color={WHITE}>
        <span className="header">RESTAURANTS</span>
        <p>
          <span>Coming Soon!</span>
        </p>
      </TextBlock>
      <Seeds>
        <img src={SeedsSvg} />
      </Seeds>
      <Badge>
        <img src={BadgeSvg} />
      </Badge>
    </Layout>
  </SceneWrapper>
);

export default SceneFour;
