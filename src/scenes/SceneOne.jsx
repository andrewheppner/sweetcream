import React from "react";
import styled from "styled-components";
import {
  PositionalWrapper,
  SceneWrapper,
  InfoBlockContainer,
  TextBox
} from "../components/styledElements";
import {
  PinkJaggedBlob,
  Cone,
  BiddefordSeal,
  SweetcreamLogo
} from "../components/svgElements";

const GREEN = "#B8DDB9";

const BadgeWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: -80px;
  left: 100px;
  z-index: -1;
`;

const PinkJaggedBlobWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 40%;
`;

const BannerWrapper = styled.div`
  width: 100%;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SceneOne = () => (
  <SceneWrapper backgroundColor={GREEN}>
    <PinkJaggedBlobWrapper>
      <PinkJaggedBlob />
    </PinkJaggedBlobWrapper>
    <PositionalWrapper top={20} right={20} zIndex={1}>
      <Cone />
    </PositionalWrapper>
    <BadgeWrapper>
      <BiddefordSeal />
    </BadgeWrapper>
    <BannerWrapper>
      <SweetcreamLogo />
      <InfoBlockContainer>
        <TextBox>
          <div className="left">
            <span>MON</span>
            <span>TUE-FRI</span>
            <span>SAT</span>
            <span>SUN</span>
          </div>
          <div className="right">
            <span>Closed</span>
            <span>12P-8P</span>
            <span>9A-8P</span>
            <span>12P-8P</span>
          </div>
        </TextBox>
        <TextBox>
          <div className="center">
            <p>
              <span>410 Main St.</span>
              <span>Building 13 - Suite 138</span>
              <span>Biddeford, Maine</span>
            </p>
            <span>(207) 520-2386</span>
            <a href="www.twitter.com/gatsbyjs">Twitter</a>
          </div>
        </TextBox>
      </InfoBlockContainer>
    </BannerWrapper>
  </SceneWrapper>
);

export default SceneOne;
