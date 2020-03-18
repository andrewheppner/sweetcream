import React, { useState } from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import { FaInstagram, FaBars } from "react-icons/fa";
import LogoSvg from "../images/logo.svg";

const CHARCOAL = "#414042";

const MobileWrapper = styled.div`
  display: none;

  .mobile-logo {
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 14px;
    position: absolute;
    z-index: 2;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    display: block;
    position: absolute;
    top: 0%;
  }

  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 30px;
    left: 20px;
    top: 20px;
    color: ${CHARCOAL};
  }

  .bm-cross-button {
    right: 24px !important;
  }

  .bm-cross {
    background: ${CHARCOAL};
    height: 35px !important;
  }

  .bm-menu {
    background: #ffffff;
    padding: 2.5em 1.5em 0;
    font-size: 1.75rem;
  }

  .bm-item {
    display: inline-block;
    color: ${CHARCOAL};
    text-decoration: none;
    padding-bottom: 30%;
    outline: none;
    font-family: "Averta";
  }
`;

const Header = styled.div`
  width: 100%;
  min-width: 850px;
  height: auto;
  position: absolute;
  top: 0:
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Averta";
  font-size: 1.2rem;
  padding-top: 3%;
  color: ${CHARCOAL};

  @media only screen 
    and (min-device-width: 300px) 
    and (max-device-width: 812px)  { 
    display: none;
    
  }

  .instagram {
    font-size: 2vw;
    color: ${CHARCOAL};
  }

  .links {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    font-family: "AvertaBold";
    color: ${CHARCOAL};
    transition: color 0.2s ease-in;
  }

  a:visited {
    color: ${CHARCOAL};
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  render() {
    return (
      <>
        <Header>
          <img
            src={LogoSvg}
            style={{ height: "auto", width: "20%", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <div className="links">
            <Link to="/icecream">ICE CREAM</Link>
            <Link to="/delivery">DELIVERY</Link>
            <Link to="/events">EVENTS</Link>
            <Link to="/findus">FIND US</Link>
            <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
              <FaInstagram className="instagram" />
            </a>
          </div>
        </Header>
        <MobileWrapper>
          <div className="mobile-logo">
            <img
              src={LogoSvg}
              style={{ height: "auto", width: "200px" }}
              onClick={() => navigate("/")}
            />
          </div>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={state => this.handleStateChange(state)}
            customBurgerIcon={<FaBars className="bars" />}
          >
            <Link onClick={() => this.closeMenu()} to="/">
              HOME
            </Link>
            <Link onClick={() => this.closeMenu()} to="/icecream">
              ICE CREAM
            </Link>
            <Link onClick={() => this.closeMenu()} to="/delivery">
              DELIVERY
            </Link>
            <Link onClick={() => this.closeMenu()} to="/events">
              EVENTS
            </Link>
            <Link onClick={() => this.closeMenu()} to="/findus">
              FIND US
            </Link>
            <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
              INSTAGRAM
            </a>
          </Menu>
        </MobileWrapper>
      </>
    );
  }
}

export default NavBar;
