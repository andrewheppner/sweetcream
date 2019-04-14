import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import GreenLogo from "../images/logo-green.svg";
import ConeSvg from "../images/cone.svg";
import BadgeSvg from "../images/landing_corner.svg";
import Layout from "../components/layout";

const WHITE = "#FFFFFF";

const IndexPage = () => (
  <>
    <Layout color="#B8DDB9" logoSrc={GreenLogo}>
      <SceneWrapper backgroundColor={WHITE}>
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
      </SceneWrapper>
    </Layout>
  </>
);

export default IndexPage;
