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
  top: 30%;
  left: 10%;
`;

const Seeds = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 70%;
  left: 50%;
`;

const SceneFour = props => (
  <SceneWrapper backgroundColor={GREEN}>
    <Layout color={WHITE} logoSrc={WhiteLogo}>
      <Shop>
        <img src={ShopSvg} />
      </Shop>
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
