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
    left: 38%;
    top: 18%;
  }
`;

const Seeds = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 77%;
  left: 35%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    top: 90%;
    left: 20%;
  }
`;

const Heading = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-family: AvertaBold;
  font-size: 3.5rem;
  color: ${(props) => props.color};

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 40%;
  font-size: 0.9rem;
  font-family: Averta;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.color};
  top: ${(props) => props.top};
  left: ${(props) => props.left};

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

  .spaced {
    line-height: 24px;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.7vw;

    .spaced {
      line-height: 15px;
    }
  }
`;

const FindUsWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 37%;
      left: 0%;
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      line-height: 15px;
      align-items: flex-start;
      font-size: 0.7rem;
    }

    ${TextBlock}.message {
      top: 42%;
      left: 10%;
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-around;
      line-height: 15px;
      align-items: flex-start;
      font-size: 0.7rem;
    }
    .scoop-heading {
      left: 32%;
      top: 13%;
    }

    ${TextBlock}.second {
      top: 55%;
      width: 70%;
      left: 15%;
      font-size: 0.6rem;
    }

    ${TextBlock}.third {
      top: 75%;
      width: 70%;
      left: 15%;
      font-size: 0.6rem;
    }
  }
`;

const SceneFour = (props) => (
  <SceneWrapper backgroundColor={GREEN} height="1400px" mobileHeight="225vh">
    <FindUsWrapper>
      <Heading top="15%" left="22%" color={CHARCOAL} className="scoop-heading">
        SCOOP SHOP
      </Heading>
      <TextBlock top="25%" left="42%" color={CHARCOAL} className="first">
        <p>
          <span>Biddeford, ME</span>
          <span>info@sweetcreamdairy.com</span>
        </p>
      </TextBlock>
      <TextBlock top="37%" left="42%" color={CHARCOAL} className="message">
        <p>
          Sweetcream Dairy is on the move! Our new shop will be located just up Main St. in Biddeford. We’ve been planning the move for well over two years and are finally building out the new space.
        </p>
        <p>
          We have decided to focus our efforts on the new space and will no longer be scooping at our original Pepperell Mill location. Hard to believe we’ve scooped our last cone at the mil but we want to thank everyone who’s supported us for the past 6 year there!
        </p>
      </TextBlock>
      <Shop>
        <img src={ShopSvg} />
      </Shop>
      <TextBlock top="65%" left="5%" color={CHARCOAL} className="second">
        <span className="header">PINTS</span>
        <p className="spaced">
          <span>The Cheese Iron - Scarborough, ME</span>
          <span>Monte's Fine Foods - Portland, ME</span>
          <span>Frith Farm - Scarborough, ME</span>
          <span>New Morning Natural Foods - Kennebunk, ME</span>
          <span>The Maine Homestead Market - Lyman, ME</span>
          <span>Frinklepod Farm - Kennebunk, ME (Seasonal)</span>
          <span>Jordan's Farm - Cape Elizabeth, ME</span>
          <span>Harris Farm - Dayton, ME</span>
          <span>Part and Parcel - Biddeford, ME</span>
          <span>F.O. Goldthwaite's - Biddeford, ME</span>
          <span>Solo Cucina Market - South Portland, ME</span>

          <span>And more to come!</span>
        </p>
      </TextBlock>
      <TextBlock top="65%" left="50%" color={CHARCOAL} className="third">
        <span className="header">RESTAURANTS</span>
        <p className="spaced">

          <span>Crown Jewel - Portland, ME (Seasonal)</span>
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
