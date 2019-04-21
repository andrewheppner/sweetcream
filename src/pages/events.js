import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import Layout from "../components/layout";
import BadgeSvg from "../images/events_corner.svg";
import CakeOneSvg from "../images/cake1.svg";
import CakeTwoSvg from "../images/cake2.svg";
import CartSvg from "../images/catering_cart.svg";
import OrangeLogo from "../images/logo-orange.svg";

const YELLOW = "#FBFBE3";
const ORANGE = "#E5A88C";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
  }
`;

const Cart = styled.div`
  width: 17%;
  height: auto;
  position: absolute;
  bottom: 5%;
  left: 7%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
    bottom: 15%;
  }
`;

const CakeOne = styled.div`
  width: 9%;
  height: auto;
  position: absolute;
  top: 23%;
  right: 10%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 20%;
    top: 15%;
  }
`;

const CakeTwo = styled.div`
  width: 9%;
  height: auto;
  position: absolute;
  top: 28%;
  right: 15%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 18%;
  }
`;

const Heading = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-family: AvertaBold;
  font-size: 3.5vw;
  color: ${props => props.color};

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 35%;
  top: ${props => props.top};
  left: ${props => props.left};
  font-size: 1.2vw;
  font-family: Averta;
  color: ${props => props.color};
  line-height: 27px;

  .bold {
    font-family: AvertaSemiBold;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.5vw;
    line-height: 20px;
  }
`;

const EventsWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 25%;
      width: 50%;
      left: 7%;
    }
    ${TextBlock}.second {
      top: 60%;
      width: 45%;
    }

    ${Heading}.first {
      top: 20%;
      left: 7%;
    }

    ${Heading}.second {
      top: 55%;
    }
  }
`;

const SceneThree = props => (
  <SceneWrapper backgroundColor={YELLOW}>
    <EventsWrapper>
      <Layout color={ORANGE} logoSrc={OrangeLogo}>
        <CakeOne>
          <img src={CakeOneSvg} />
        </CakeOne>
        <CakeTwo>
          <img src={CakeTwoSvg} />
        </CakeTwo>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
        <Cart>
          <img src={CartSvg} />
        </Cart>
        <Heading top="25%" left="20%" color={ORANGE} className="first">
          <span>ICE CREAM CAKES</span>
        </Heading>
        <TextBlock top="35%" left="20%" color={ORANGE} className="first">
          <p>
            <span className="bold">CLICK HERE</span> for our ice cream cake
            order form.
          </p>
          <p>
            Please allow at least 72 hours advance notice for ice cream cakes.
            For any additional inquiries, please CONTACT US.
          </p>
        </TextBlock>

        <Heading top="65%" left="45%" color={ORANGE} className="second">
          <span>CATERING</span>
        </Heading>
        <TextBlock top="75%" left="45%" color={ORANGE} className="second">
          <p>
            Sweetcream comes to you! We offer catering services for parties and
            events serving parties of all sizes. CONTACT US for more
            information.
          </p>
        </TextBlock>
      </Layout>
    </EventsWrapper>
  </SceneWrapper>
);

export default SceneThree;
