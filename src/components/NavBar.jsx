import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import { FaInstagram, FaBars } from "react-icons/fa";
import SealSvg from "../images/BiddefordSeal.svg";

const MobileWrapper = styled.div`
  display: none;

  .mobile-logo {
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 14px;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    display: block;
  }

  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 20px;
    top: 20px;
    color: ${props => props.color};
  }

  .bm-cross-button {
    right: 24px !important;
  }

  .bm-cross {
    background: #b7daf3;
    height: 35px !important;
  }

  .bm-menu {
    background: #ffffff;
    padding: 2.5em 1.5em 0;
    font-size: 2em;
  }

  .bm-item {
    display: inline-block;
    color: #b7daf3;
    text-decoration: none;
    padding-bottom: 30%;
    outline: none;
    font-family: "Averta";
  }
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
  color: ${props => props.color};

  @media only screen 
    and (min-device-width: 300px) 
    and (max-device-width: 812px)  { 
    display: none;
  }

  .instagram {
    font-size: 2vw;
    color: ${props => props.color};
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
    text-decoration: none;
  }

  a:visited {
    color: ${props => props.color};
  }
`;

const NavBar = ({ color, logo }) => (
  <>
    <Header color={color}>
      <img
        src={logo}
        style={{ height: "auto", width: "20%" }}
        onClick={() => navigate("/")}
      />
      <div className="links">
        <Link to="/icecream">Ice Cream</Link>
        <Link to="/events">Events</Link>
        <Link to="/findus">Find Us</Link>
        <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
          <FaInstagram className="instagram" />
        </a>
      </div>
    </Header>
    <MobileWrapper color={color}>
      <div className="mobile-logo">
        <img
          src={logo}
          style={{ height: "auto", width: "200px" }}
          onClick={() => navigate("/")}
        />
      </div>
      <Menu customBurgerIcon={<FaBars className="bars" />}>
        <Link to="/">Home</Link>
        <Link to="/icecream">Ice Cream</Link>
        <Link to="/events">Events</Link>
        <Link to="/findus">Find Us</Link>
        <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
          <FaInstagram className="instagram" />
        </a>
      </Menu>
    </MobileWrapper>
  </>
);

export default NavBar;
