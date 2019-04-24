import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import Layout from "../components/layout";
import BadgeSvg from "../images/events_corner.svg";
import CakeOneSvg from "../images/cake1.svg";
import CakeTwoSvg from "../images/cake2.svg";
import CartSvg from "../images/catering_cart.svg";
import LogoSvg from "../images/logo.svg";

const YELLOW = "#faf9e1";
const ORANGE = "#E5A88C";
const CHARCOAL = "#414042";

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
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 5%;
  left: 7%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
    bottom: 30%;
  }
`;

const CakeOne = styled.div`
  width: 13%;
  height: auto;
  position: absolute;
  top: 15%;
  right: 30%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 15%;
    top: 20%;
    right: 20%;
  }
`;

const CakeTwo = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 28%;
  right: 10%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 13%;
    right: 7%;
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
  font-size: 1vw;
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
      top: 20%;
      width: 50%;
      left: 7%;
    }
    ${TextBlock}.second {
      top: 60%;
      width: 45%;
      left: 50%;
    }

    ${Heading}.first {
      top: 15%;
      left: 7%;
    }

    ${Heading}.second {
      top: 55%;
      left: 50%;
    }
  }
`;

const SceneThree = props => (
  <SceneWrapper backgroundColor={YELLOW} height="150vh">
    <EventsWrapper>
      <Layout color={CHARCOAL} logoSrc={LogoSvg}>
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
        <Heading top="17%" left="10%" color={CHARCOAL} className="first">
          <span>ICE CREAM CAKES</span>
        </Heading>
        <TextBlock top="25%" left="10%" color={CHARCOAL} className="first">
          <p>
            <span>
              We offer numerous ways to customize your very own ice cream cake!
              First, choose your size. Our 6” cake feeds 8-10 people while our
              9” cake feeds 16-20 people. You then get to pick from an array of
              different ice cream flavors, mix-ins, toppings, frostings and even
              sides so that you can make it truly your own.
            </span>
          </p>
          <p>
            <span className="bold">CLICK HERE</span> for our ice cream cake
            order form.
          </p>
          <p>
            Please allow at least 72 hours advance notice for ice cream cakes.
            For any additional inquiries, please CONTACT US.
          </p>
        </TextBlock>

        <Heading top="60%" left="50%" color={CHARCOAL} className="second">
          <span>CATERING</span>
        </Heading>
        <TextBlock top="68%" left="50%" color={CHARCOAL} className="second">
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
