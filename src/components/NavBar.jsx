import React from "react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import { FaInstagram } from "react-icons/fa";

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
  color: ${props => props.color};

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
  <Header color={color}>
    <LogoWrapper onClick={() => navigate("/")}>
      <img src={logo} />
    </LogoWrapper>

    <div className="links">
      <Link to="/icecream">Ice Cream</Link>
      <Link to="/events">Events</Link>
      <Link to="/findus">Find Us</Link>
      <a href="https://www.instagram.com/sweetcreamdairy/" target="blank">
        <FaInstagram className="instagram" />
      </a>
    </div>
  </Header>
);

export default NavBar;
