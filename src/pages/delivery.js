import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/findus_corner.svg";

const WHITE = "#FFFFFF";
const CHARCOAL = "#414042";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 25%;
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
    top: 14%;
    left: 5%;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 100%;
  font-size: 1rem;
  font-family: Averta;
  line-height: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: ${(props) => props.color};
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  .bold {
    font-family: AvertaSemiBold;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.7vw;

    .spaced {
      line-height: 15px;
    }
  }
`;

const DeliveryWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock} {
      top: 20%;
      left: 5%;
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-around;
      line-height: 20px;
      align-items: flex-start;
      font-size: 0.7rem;
    }

    ${TextBlock}.second {
      top: 40%;
      left: 5%;
      display: block;
      width: 80%;
      font-size: 0.65rem;
    }
  }
`;

const SceneFive = (props) => (
  <SceneWrapper backgroundColor={WHITE} height="1210px" mobileHeight="100vh">
    <DeliveryWrapper>
      <Heading top="25%" left="20%" color={CHARCOAL} className="scoop-heading">
        Delivery
      </Heading>
      <TextBlock top="32%" left="20%" color={CHARCOAL}>
        <p>We're open!</p>
        <p>
          Orders can be placed online and picked up at the takeout window when
          ready.
        </p>
      </TextBlock>

      <TextBlock top="40%" left="20%" color={CHARCOAL} className="second">
        <a
          style={{ fontSize: "30px", color: "black", textDecoration: "none" }}
          href="https://sweetcreamdairy.square.site"
          target="_blank"
        >
          Order Here
        </a>
      </TextBlock>

      <Badge>
        <img src={BadgeSvg} />
      </Badge>
    </DeliveryWrapper>
  </SceneWrapper>
);

export default SceneFive;
