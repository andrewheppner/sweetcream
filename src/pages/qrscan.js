import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";

const GREEN = "#34624D";
const WHITE = "#FFFFFF";
const CHARCOAL = "#414042";


const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  right: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 45%;
  }
`;

const Shop = styled.div`
  width: 30%;
  height: auto;
  position: absolute;
  top: 25%;
  left: 18%;

  .shop-photo {
    width: 30vw;
  }


  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 45%;
    left: 19%;
    top: 16%;

    .shop-photo {
      width: 250px;
    }
  }

`;

const Seeds = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 77%;
  left: 35%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    top: 80%;
    left: 20%;
  }
`;

const Heading = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-family: AvertaBold;
  font-size: 3.5rem;
  color: ${(props) => props.color};

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 4vw;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 100%;
  font-size: 0.9rem;
  font-family: Averta;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.color};
  top: ${(props) => props.top};

  .header {
    font-family: AvertaBold;
    font-size: 3.5rem;
    margin-bottom: 5%;

    @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
      font-size: 6vw;
      top: 5%;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bold {
    font-family: AvertaSemiBold;
  }

  .spaced {
    line-height: 24px;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.7vw;

    .spaced {
      line-height: 15px;
    }
  }
`;

const FindUsWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 8%;
      padding: 20px;
      left: 5%;
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-around;
      line-height: 15px;
      align-items: center;
      font-size: 0.7rem;
    }

    ${TextBlock}.message {
      top: 32%;
      left: 40%;
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-around;
      line-height: 20px;
      align-items: flex-start;
      font-size: 0.7rem;
    }
    .scoop-heading {
      left:8%;
      top: 7%;
      width: 95%:
    }

    ${TextBlock}.second {
      top: 18%;
      width: 70%;
      left: 15%;
      font-size: 0.6rem;
    }

    ${TextBlock}.third {
      top: 75%;
      width: 70%;
      left: 15%;
      font-size: 0.6rem;
    }
  }
`;

const SceneSix = (props) => (
    <SceneWrapper backgroundColor={GREEN} height="1400px" mobileHeight="225vh">
        <FindUsWrapper>
            <Heading top="15%" left="17%" color={WHITE} className="scoop-heading">
                THANK YOU FOR CHOOSING SWEETCREAM!
            </Heading>
            <TextBlock top="20%" left="35%" color={WHITE} className="first">
                <p>
                    We sincerely appreciate your support!
                </p>
                <p>
                    We hope you enjoy every bite. If you have any questions or concerns please reach out to us at
                </p>
                <p>
                    info@sweetcreamdairy.com
                </p>

            </TextBlock>
            <TextBlock top="35%" left="35%" color={WHITE} className="second">
                <p>
                    Ice Cream care instructions coming soon!
                </p>
            </TextBlock>

        </FindUsWrapper>
    </SceneWrapper>
);

export default SceneSix;
