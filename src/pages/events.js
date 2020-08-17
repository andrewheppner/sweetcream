import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/events_corner.svg";
import CakeSvg from "../images/cake.svg";
import CartSvg from "../images/catering_cart.svg";
import { cartAnimation } from "../helpers/animations";
import CakeFormPdf from "../assets/cake_order_form.pdf";

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
  left: 17%;

  &:hover {
    animation: ${cartAnimation} 2s steps(5, end) forwards;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
    bottom: 20%;
    left: 8%;
    &:hover {
      animation: none;
    }
  }
`;

const CakeOne = styled.div`
  width: 25%;
  height: auto;
  position: absolute;
  top: 15%;
  right: 10%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 30%;
    top: 20%;
    right: 5%;
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
  &.first {
    width: 45%;
  }
  position: absolute;
  width: 40%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-size: 0.9rem;
  font-family: Averta;
  color: ${(props) => props.color};
  line-height: 27px;

  .bold {
    font-family: AvertaSemiBold;
  }

  a {
    color: ${(props) => props.color};
    text-decoration: none;
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
      top: 70%;
      width: 45%;
      left: 50%;
    }

    ${Heading}.first {
      top: 15%;
      left: 7%;
    }

    ${Heading}.second {
      top: 65%;
      left: 50%;
    }
  }
`;

const SceneThree = (props) => (
  <SceneWrapper backgroundColor={YELLOW} height="1200px" mobileHeight="150vh">
    <EventsWrapper>
      <CakeOne>
        <img src={CakeSvg} />
      </CakeOne>
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
          <span>Cakes are subject to availability</span>
          {/* <span>
            <a
              href={CakeFormPdf}
              download="cake_order_form.pdf"
              className="bold"
            >
              {" "}
              CLICK HERE
            </a>{" "}
            for our ice cream cake order form.
          </span> */}
        </p>
        <p>
          For any cake inquiries, please{" "}
          <a href="mailto:info@sweetcreamdairy.com" className="bold">
            CONTACT US
          </a>
          .
        </p>
      </TextBlock>

      <Heading top="60%" left="50%" color={CHARCOAL} className="second">
        <span>CATERING</span>
      </Heading>
      <TextBlock top="68%" left="50%" color={CHARCOAL} className="second">
        <p>
          Sweetcream comes to you! We offer catering services for parties and
          events serving parties of all sizes.{" "}
          <a href="mailto:info@sweetcreamdairy.com" className="bold">
            CONTACT US
          </a>{" "}
          for more information.
        </p>
      </TextBlock>
    </EventsWrapper>
  </SceneWrapper>
);

export default SceneThree;
