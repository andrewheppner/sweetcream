import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import Layout from "../components/layout";
import WhiteLogo from "../images/logo-white.svg";

const GREEN = "#B8DDB9";
const WHITE = "#FFFFFF";

const SceneFour = props => (
  <SceneWrapper backgroundColor={GREEN}>
    <Layout color={WHITE} logoSrc={WhiteLogo} />
  </SceneWrapper>
);

export default SceneFour;
