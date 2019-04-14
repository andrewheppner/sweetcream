import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/icecream_corner.svg";
import ChartSvg from "../images/chart.svg";
import YellowLogo from "../images/logo-yellow.svg";

const PINK = "#E5A88C";
const YELLOW = "#FBFBE3";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: -2%;
  left: -2%;
`;

const Chart = styled.div`
  width: 35%;
  height: auto;
  position: absolute;
  top: 25%;
  right: 10%;
`;

const SceneTwo = () => (
  <div>
    <SceneWrapper backgroundColor={PINK}>
      <Layout color={YELLOW} logoSrc={YellowLogo}>
        <Chart>
          <img src={ChartSvg} />
        </Chart>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
      </Layout>
    </SceneWrapper>
  </div>
);

export default SceneTwo;
