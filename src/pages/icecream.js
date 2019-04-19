import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/icecream_corner.svg";
import ChartSvg from "../images/chart.svg";
import YellowLogo from "../images/logo-yellow.svg";

const PINK = "#E5A88C";
const YELLOW = "#FBFBE3";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  left: 0%;
`;

const Chart = styled.div`
  width: 20%;
  height: auto;
  position: absolute;
  top: 25%;
  right: 10%;
`;

const ChartText = styled.div`
  position: absolute;
  width: 15%;
  text-align: center;
  top: 65%;
  right: 10%;
  font-size: 0.8vw;
  font-family: Averta;
  color: #fbfbe3;
  line-height: 20px;
  transform: rotate(-8deg);
`;

const TextBlock = styled.div`
  position: absolute;
  width: 50%;
  top: 20%;
  left: 10%;
  font-size: 1vw;
  font-family: Averta;
  color: #fbfbe3;
  line-height: 20px;

  .bold {
    font-family: AvertaSemiBold;
  }
`;

const SceneTwo = () => (
  <div>
    <SceneWrapper backgroundColor={PINK}>
      <Layout color={YELLOW} logoSrc={YellowLogo}>
        <Chart>
          <img src={ChartSvg} />
        </Chart>
        <Badge>
          <img src={BadgeSvg} />
        </Badge>
        <TextBlock>
          <p>
            We make ice cream because we love eating it! Our hope is to find the
            most delicious version of each flavor, whether it be an old classic
            or a fresh new idea. We are always tweaking and improving our
            recipes and have found that keeping our recipes simple and sourcing
            our ingredients responsibly most often leads to the best results.
          </p>
          <p>
            We keep our ingredient list short. We believe that fewer components
            translates to better, brighter, and more genuine flavor. We chose to
            pasteurize our own mix so that we could avoid industrial ingredients
            like gums, emulsifiers and artificial flavorings. Instead, we choose
            to work with ingredients you’d likely find at the farmer’s market
            and your local grocery store. You’ll probably find most of our
            ingredients at home in your kitchen pantry!
          </p>
          <p>
            Our goal is to reinvest as much of our sales as possible back into
            the local economy. We source our ingredients and flavorings directly
            from Maine farms and producers whenever possible. That means direct,
            hand to hand transactions with the farmers themselves. In 2017,
            32.4% of our food costs were sourced in this manner. In 2018, 47% of
            our food costs went to the following farms and producers.
          </p>
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
  </div>
);

export default SceneTwo;
