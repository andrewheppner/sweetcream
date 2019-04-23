import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/icecream_corner.svg";
import ChartSvg from "../images/chart.svg";
import PensSvg from "../images/pens.svg";
import YellowLogo from "../images/logo-yellow.svg";
import { rotationBuilder } from "../helpers/animations";

const PINK = "#E5A88C";
const YELLOW = "#FBFBE3";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  left: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
  }
`;

const Chart = styled.div`
  width: 20%;
  height: auto;
  position: absolute;
  top: 15%;
  right: 10%;
  animation: ${rotationBuilder()} 70s linear infinite;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 30%;
    top: 23%;
  }
`;

const Pens = styled.div`
  width: 20%;
  height: auto;
  position: absolute;
  top: 18%;
  right: 20%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 30%;
    top: 24%;
  }
`;

const ChartText = styled.div`
  position: absolute;
  width: 15%;
  text-align: center;
  top: 45%;
  right: 10%;
  font-size: 0.8vw;
  font-family: Averta;
  color: #fbfbe3;
  line-height: 20px;
  transform: rotate(-8deg);

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    top: 35%;
    font-size: 1.7vw;
    right: 5%;
    width: 30%;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 50%;
  top: ${props => props.top};
  left: ${props => props.left || "10%"};
  font-size: 1vw;
  font-family: Averta;
  color: #fbfbe3;
  line-height: 20px;

  .bold {
    font-family: AvertaSemiBold;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    line-height: 15px;
    font-size: 2.7vw;
    p {
      margin-bottom: 10%;
    }
  }
`;

const Heading = styled.div`
  font-family: AvertaBold;
  font-size: 3.5vw;
  color: ${props => props.color};
  margin: 5% 0;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const SourcingList = styled.div`
  width: 100%;
  margin: 5% 0;
  display: flex;
  justify-content: space-around;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      margin-bottom: 5%;
    }
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    margin: 7% 0;
  }
`;

const IceCreamWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 10%;
      width: 80%;
    }
    ${TextBlock}.second {
      top: 23%;
      width: 45%;
    }
    ${TextBlock}.third {
      top: 50%;
      width: 80%;
    }
  }
`;

const SceneTwo = () => (
  <IceCreamWrapper>
    <SceneWrapper backgroundColor={PINK} height="185vh">
      <Layout color={YELLOW} logoSrc={YellowLogo}>
        <Chart>
          <img src={ChartSvg} />
        </Chart>
        <Pens>
          <img src={PensSvg} />
        </Pens>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
        <TextBlock className="first" top="15%">
          <p>
            We make ice cream because we love eating it! Our hope is to find the
            most delicious version of each flavor, whether it be an old classic
            or a fresh new idea. We are always tweaking and improving our
            recipes and have found that keeping our recipes simple and sourcing
            our ingredients responsibly most often leads to the best results.
          </p>
        </TextBlock>
        <TextBlock className="second" top="25%" width>
          <Heading>SIMPLICITY</Heading>
          <p>
            We keep our ingredient list short. We believe that fewer components
            translates to better, brighter, and more genuine flavor. We chose to
            pasteurize our own mix so that we could avoid industrial ingredients
            like gums, emulsifiers and artificial flavorings. Instead, we choose
            to work with ingredients you’d likely find at the farmer’s market
            and your local grocery store. You’ll probably find most of our
            ingredients at home in your kitchen pantry!
          </p>
        </TextBlock>
        <TextBlock className="third" top="43%">
          <Heading>SOURCING</Heading>
          <p>
            Our goal is to reinvest as much of our sales as possible back into
            the local economy. We source our ingredients and flavorings directly
            from Maine farms and producers whenever possible. That means direct,
            hand to hand transactions with the farmers themselves. In 2017,
            <span className="bold"> 32.4%</span> of our food costs were sourced
            in this manner. In 2018, <span className="bold">47%</span> of our
            food costs went to the following farms and producers.
          </p>
          <SourcingList>
            <div className="column">
              <span>Blue Sky Produce</span>
              <span>Doles Orchard</span>
              <span>Elements Coffee</span>
              <span>Frith Farm</span>
              <span>Harris Farm</span>
              <span>Foxes Ridge Farm</span>
              <span>McDougal Orchards</span>
            </div>
            <div className="column">
              <span>Our Farm</span>
              <span>Sawyer's Maple Farm</span>
              <span>Snell Farm</span>
              <span>Speckled Ax Coffee</span>
              <span>Stevenson's Strawberries</span>
              <span>The Farm</span>
            </div>
          </SourcingList>
          <p>
            We are committed to doing this assessment every year and reporting
            the results honestly and openly.
          </p>
        </TextBlock>
        <ChartText>
          <p>
            Recorder charts! You'll see these in the back of our shop. They keep
            track of the temperature of the ice cream mix during pasteurization.
          </p>
        </ChartText>
      </Layout>
    </SceneWrapper>
  </IceCreamWrapper>
);

export default SceneTwo;
