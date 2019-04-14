import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import Layout from "../components/Layout";
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
  <SceneWrapper backgroundColor={YELLOW}>
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
    </Layout>
  </SceneWrapper>
);

export default SceneThree;
