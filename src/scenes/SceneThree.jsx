import React from "react";
import styled from "styled-components";
import { SceneWrapper, TextBox } from "../components/styledElements";
import { PinkJaggedBlob, Brownie } from "../components/svgElements";

const VIOLET = "#A6B0D9";

const PinkJaggedBlobWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 40%;
`;

const BrownieWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 50px;
  left: 100px;
  z-index: 0;
`;

const SceneThree = () => (
  <SceneWrapper backgroundColor={VIOLET}>
    <PinkJaggedBlobWrapper>
      <PinkJaggedBlob />
    </PinkJaggedBlobWrapper>
    <BrownieWrapper>
      <Brownie />
    </BrownieWrapper>
    <TextBox className="fullWidth">Cake Info</TextBox>
  </SceneWrapper>
);

export default SceneThree;
