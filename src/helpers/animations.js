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
