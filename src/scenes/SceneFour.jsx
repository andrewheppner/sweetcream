import React from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import { PositionalWrapper, SceneWrapper } from "../components/styledElements";
import { YellowBlob, Peach, Strawberry, Lime } from "../components/svgElements";

const GREEN = "#B8DDB9";

const SceneFour = props => (
  <Waypoint onEnter={() => props.handleEnter(4)} bottomOffset="99%">
    <SceneWrapper backgroundColor={GREEN} />
  </Waypoint>
);

export default SceneFour;
