import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const OFFWHITE = "#FFFFF0";

const Header = styled.div`
  width: 100%;
  height: 5%;
  position: fixed;
  top: 0:
  left: 0;
  background: ${OFFWHITE};
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Averta";
`;

const SCROLL_DURATION = 750;

const NavBar = () => (
  <Header>
    <Link
      activeClass="active"
      to="SceneOne"
      spy={true}
      smooth={true}
      duration={SCROLL_DURATION}
    >
      Hours and Location
    </Link>
    <Link
      activeClass="active"
      to="SceneTwo"
      spy={true}
      smooth={true}
      duration={SCROLL_DURATION}
    >
      Sourcing
    </Link>
    <Link
      activeClass="active"
      to="SceneThree"
      spy={true}
      smooth={true}
      duration={SCROLL_DURATION}
    >
      Catering
    </Link>
    <Link
      activeClass="active"
      to="SceneFour"
      spy={true}
      smooth={true}
      duration={SCROLL_DURATION}
    >
      Press
    </Link>
  </Header>
);

export default NavBar;
