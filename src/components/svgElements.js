import React from "react";
import styled from "styled-components";
import scBadge from "../images/BiddefordSeal.svg";
import scLogo from "../images/Sweetcream-Logo-PROD.svg";
import { rotationBuilder } from "../helpers/animations";

const Seal = styled.img`
  width: 30%;
  animation: ${rotationBuilder()} 40s linear infinite;
`;

const Logo = styled.img`
  width: 50%;
`;

export const BiddefordSeal = () => <Seal src={scBadge} />;

export const SweetcreamLogo = () => <Logo src={scLogo} />;
