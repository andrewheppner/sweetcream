import { keyframes } from "styled-components";

export const rotationBuilder = () => {
  const rotation = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;
  return rotation;
};

export const cartAnimation = () => {
  return keyframes`
    0% {
      transform: translateX(5px);
    }

    10% {
      transform: translateX(13px);
    }

    20% {
      transform: translateX(24px);
    }

    40% {
      transform: translateX(10px);
    }

    50% {
      transform: translateX(60px);
    }

    70% {
      transform: translateX(68px);
    }

    100% {
      transform: translateX(75px);
    }
  `;
};
