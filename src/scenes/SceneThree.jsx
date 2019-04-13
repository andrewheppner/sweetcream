import React from "react";
import styled from "styled-components";
import { SceneWrapper, TextBox } from "../components/styledElements";
import { PinkJaggedBlob, Brownie } from "../components/svgElements";
import { Waypoint } from "react-waypoint";
import BadgeSvg from "../images/events_corner.svg";
import CakeOneSvg from "../images/cake1.svg";
import CakeTwoSvg from "../images/cake2.svg";
import CartSvg from "../images/catering_cart.svg";

const YELLOW = "#FBFBE3";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: -8%;
  right: -2%;
`;

const Cart = styled.div`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 18%;
  left: 10%;
`;

const CakeOne = styled.div`
  width: 10%;
  height: auto;
  position: absolute;
  top: 15%;
  right: 25%;
`;

const CakeTwo = styled.div`
  width: 10%;
  height: auto;
  position: absolute;
  top: 23%;
  right: 10%;
`;

const SceneThree = props => (
  <Waypoint onEnter={() => props.handleEnter(3)} bottomOffset="99%">
    <SceneWrapper backgroundColor={YELLOW}>
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
    </SceneWrapper>
  </Waypoint>
);

export default SceneThree;
