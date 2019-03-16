import React from "react";
import styled from "styled-components";
import { PositionalWrapper, SceneWrapper } from "../components/styledElements";
import { YellowBlob, Peach, Strawberry, Lime } from "../components/svgElements";

const PEACH = "#ffb993";

const SceneFour = () => (
  <SceneWrapper backgroundColor={PEACH}>
    <PositionalWrapper top={0} right={0} zIndex={1}>
      <YellowBlob />
    </PositionalWrapper>
    <PositionalWrapper top={400} right={500} zIndex={1}>
      <Peach />
    </PositionalWrapper>
    <PositionalWrapper top={200} right={300} zIndex={1}>
      <Strawberry />
    </PositionalWrapper>
    <PositionalWrapper top={100} left={100} zIndex={1}>
      <Lime />
    </PositionalWrapper>
  </SceneWrapper>
);

export default SceneFour;
