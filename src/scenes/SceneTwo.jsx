import React from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import {
  PositionalWrapper,
  SceneWrapper,
  TextBox
} from "../components/styledElements";
import { GreenBlob, SeedsTwo } from "../components/svgElements";
import BadgeSvg from "../images/icecream_corner.svg";
import ChartSvg from "../images/chart.svg";

const PINK = "#E5A88C";

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

const SceneTwo = props => (
  <div>
    <Waypoint onEnter={() => props.handleEnter(2)} bottomOffset="99%">
      <SceneWrapper backgroundColor={PINK}>
        <Chart>
          <img src={ChartSvg} />
        </Chart>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
      </SceneWrapper>
    </Waypoint>
  </div>
);

export default SceneTwo;
