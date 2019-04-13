import React from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import {
  PositionalWrapper,
  SceneWrapper,
  InfoBlockContainer,
  TextBox
} from "../components/styledElements";
import ConeSvg from "../images/cone.svg";
import BadgeSvg from "../images/landing_corner.svg";

const WHITE = "#FFFFFF";

const Cone = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 20%;
  right: 12%;
`;

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: fixed;
  bottom: -2%;
  left: -2%;
`;

const SceneOne = props => (
  <Waypoint onEnter={() => props.handleEnter(1)}>
    <SceneWrapper backgroundColor={WHITE}>
      <Cone>
        <img src={ConeSvg} />
      </Cone>
      <Badge>
        <img src={BadgeSvg} />
      </Badge>
    </SceneWrapper>
  </Waypoint>
);

export default SceneOne;
