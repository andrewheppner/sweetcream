import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import GreenLogo from "../images/logo-green.svg";
import ConeSvg from "../images/cone.svg";
import BadgeSvg from "../images/landing_corner.svg";
import Layout from "../components/layout";

const WHITE = "#FFFFFF";

const TextBlock = styled.div`
  position: absolute;
  width: 50%;
  top: 25%;
  left: 10%;
  font-size: 1.3vw;
  font-family: Averta;
  color: #b8ddb9;
  line-height: 30px;

  .bold {
    font-family: AvertaSemiBold;
  }
`;

const IndexPage = () => (
  <SceneWrapper backgroundColor={WHITE}>
    <Layout color="#B8DDB9" logoSrc={GreenLogo}>
      <img
        src={ConeSvg}
        style={{
          height: "auto",
          width: "15%",
          position: "absolute",
          top: "20%",
          right: "12%"
        }}
      />

      <img
        src={BadgeSvg}
        style={{
          height: "auto",
          width: "15%",
          position: "absolute",
          bottom: "0%",
          left: "0%"
        }}
      />
      <TextBlock>
        <p>
          <span className="bold">SIMPLE </span> We keep our ingredient list
          short. We believe that fewer components translates to better,
          brighter, and more genuine flavor.
        </p>
        <p>
          <span className="bold">NATURAL</span> We do not use corn syrup,
          artificial flavorings, gums, or emulsifiers.
        </p>
        <p>
          <span className="bold">LOCAL</span> We source our ingredients and
          flavorings directly from Maine farms whenever possible.
        </p>
      </TextBlock>
    </Layout>
  </SceneWrapper>
);

export default IndexPage;
