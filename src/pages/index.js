import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import GreenLogo from "../images/logo-green.svg";
import ConeSvg from "../images/cone.svg";
import BadgeSvg from "../images/landing_corner.svg";
import Layout from "../components/layout";

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
  position: absolute;
  bottom: 0%;
  left: 0%;
`;

const IndexPage = () => (
  <>
    <Layout color="#B8DDB9" logoSrc={GreenLogo}>
      <SceneWrapper backgroundColor={WHITE}>
        <Cone>
          <img src={ConeSvg} />
        </Cone>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
      </SceneWrapper>
    </Layout>
  </>
);

export default IndexPage;
