import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import GreenLogo from "../images/logo-green.svg";
import WhiteLogo from "../images/logo-white.svg";
import OrangeLogo from "../images/logo-orange.svg";
import YellowLogo from "../images/logo-yellow.svg";
import { FaInstagram } from "react-icons/fa";

const getColor = index => {
  switch (index) {
    case 1:
      return "#B8DDB9";

    case 2:
      return "#FBFBE3";

    case 3:
      return "#E5A88C";

    default:
      return "#FFFFFF";
  }
};

const LogoWrapper = styled.div`
  width: 20%;
  height: auto;
`;

const Header = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0:
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Averta";
  font-size: 1.2vw;
  padding-top: 3%;
  color: ${props => getColor(props.currentScene)};

  .instagram {
    font-size: 2vw;
    color: ${props => getColor(props.currentScene)};
  }

  .links {
    width: 40%;
    display: flex;
    justify-content: space-between;

    .active {
     
    }
  }
  
  a {
    cursor: pointer;

  }
`;

const logos = {
  1: GreenLogo,
  2: YellowLogo,
  3: OrangeLogo,
  4: WhiteLogo
};

const SCROLL_DURATION = 750;

const NavBar = props => (
  <Header currentScene={props.currentScene}>
    <LogoWrapper>
      <img src={logos[props.currentScene]} />
    </LogoWrapper>
    <div className="links">
      <Link
        activeClass="active"
        to="SceneTwo"
        spy={true}
        smooth={true}
        duration={SCROLL_DURATION}
      >
        Ice Cream
      </Link>
      <Link
        activeClass="active"
        to="SceneThree"
        spy={true}
        smooth={true}
        duration={SCROLL_DURATION}
      >
        Events
      </Link>
      <Link
        activeClass="active"
        to="SceneFour"
        spy={true}
        smooth={true}
        duration={SCROLL_DURATION}
      >
        Find Us
      </Link>
      <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
        <FaInstagram className="instagram" />
      </a>
    </div>
  </Header>
);

export default NavBar;
