import React from "react";
import styled from "styled-components";
import {
  PositionalWrapper,
  SceneWrapper,
  TextBox
} from "../components/styledElements";
import { GreenBlob, SeedsTwo } from "../components/svgElements";

const PINK = "#F48780";

const GreenBlobWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -20px;
  height: 100%;
  width: 50%;
  z-index: -1;
  animation: jiggle 9s steps(30, start) infinite;

  @keyframes jiggle {
    0% {
      transform: translateX(20px);
    }

    10% {
      transform: translateX(70px);
    }

    30% {
      transform: translateX(150px);
    }

    50% {
      transform: translateX(90px);
    }

    70% {
      transform: translateX(30px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;

const SceneTwo = () => (
  <SceneWrapper backgroundColor={PINK}>
    <GreenBlobWrapper>
      <GreenBlob />
    </GreenBlobWrapper>
    <PositionalWrapper top={50} right={-250} zIndex={3}>
      <TextBox>
        <div className="center">
          <p>
            <span>
              SIMPLE We keep our ingredient list short. We believe that fewer
              components translates to better, brighter, and more genuine
              flavor.
            </span>
          </p>
          <p>
            <span>
              NATURAL We do not use corn syrup, artificial flavorings, gums, or
              emulsifiers.
            </span>
          </p>
          <p>
            <span>
              LOCAL We source our ingredients and flavorings directly from Maine
              farms whenever possible.
            </span>
          </p>
        </div>
      </TextBox>
    </PositionalWrapper>
    <PositionalWrapper top={200} right={50} zIndex={2}>
      <SeedsTwo />
    </PositionalWrapper>
    <div>
      <h1>46%</h1>
      <h4>of total food costs went directly into the hands of local farmers</h4>
    </div>
  </SceneWrapper>
);

export default SceneTwo;
