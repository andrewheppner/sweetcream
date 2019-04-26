import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import ShopSvg from "../images/shop.svg";
import SeedsSvg from "../images/seeds.svg";
import BadgeSvg from "../images/findus_corner.svg";

const GREEN = "#d0e8cc";
const WHITE = "#FFFFFF";
const CHARCOAL = "#414042";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 45%;
  }
`;

const Shop = styled.div`
  width: 30%;
  height: auto;
  position: absolute;
  top: 20%;
  left: 22%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 45%;
    left: 10%;
  }
`;

const Seeds = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 77%;
  left: 35%;
`;

const Heading = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-family: AvertaBold;
  font-size: 3.5rem;
  color: ${props => props.color};

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 40%;
  font-size: 0.9rem;
  font-family: Averta;
  line-height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};

  .header {
    font-family: AvertaBold;
    font-size: 3.5rem;
    margin-bottom: 5%;

    @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
      font-size: 6vw;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bold {
    font-family: AvertaSemiBold;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.7vw;
  }
`;

const FindUsWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 15%;
      left: 55%;
    }
    .scoop-heading {
      left: 10%;
    }

    ${TextBlock}.second {
      top: 50%;
    }

    ${TextBlock}.third {
      top: 50%;
    }
  }
`;

const SceneFour = props => (
  <SceneWrapper backgroundColor={GREEN} height="1400px" mobileHeight="165vh">
    <FindUsWrapper>
      <Heading top="15%" left="22%" color={CHARCOAL} className="scoop-heading">
        SCOOP SHOP
      </Heading>
      <TextBlock top="25%" left="42%" color={CHARCOAL} className="first">
        <p>
          <span>40 Main st.</span>
          <span>Building 13 - Suite 138</span>
          <span>Biddeford, ME</span>
          <span>207-520-2386</span>
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
      <TextBlock top="65%" left="5%" color={CHARCOAL} className="second">
        <span className="header">PINTS</span>
        <p>
          <span>Coming Soon!</span>
        </p>
      </TextBlock>
      <TextBlock top="65%" left="50%" color={CHARCOAL} className="third">
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
    </FindUsWrapper>
  </SceneWrapper>
);

export default SceneFour;
