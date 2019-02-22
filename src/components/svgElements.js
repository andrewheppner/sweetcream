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

export const Banner = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Calque_1"
    data-name="Calque 1"
    width="100%"
    height="100%"
  >
    <style>{`.cls-1 { fill:${props.fill} }`}</style>
    <path
      d="M67 196.39c-5.37 0-9.87-1-13.42-2.88a15.69 15.69 0 0 1-8.43-13 12.79 12.79 0 0 1 5.1-11.51c6-4.53 15.76-4.58 27.51-.15A170.28 170.28 0 0 0 97 174.72a21.94 21.94 0 0 0 4.32-15.55c-.78-9.24-8.61-13-17.68-17.35S64 132.39 63 120.21c-1.17-13.8 11.19-26.16 27.56-27.55 16.8-1.42 25.9 12.38 26.28 13a4 4 0 0 1-6.72 4.35c-.31-.47-7-10.35-18.89-9.33S70.18 110.13 71 119.53c.6 7.11 6.51 10.44 16.16 15.07 9.86 4.74 21 10.1 22.2 23.9a30.1 30.1 0 0 1-3.94 18.1c41.26 8.42 91 6.38 118.39-6.4a4 4 0 0 1 3.39 7.25c-29.54 13.79-83.7 15.74-127.33 6.11a39.22 39.22 0 0 1-3.75 3.18 51 51 0 0 1-24.79 9.46c-1.5.12-2.93.19-4.33.19zm-4.9-22.87c-4.16 0-6.29 1.23-7.07 1.82a4.75 4.75 0 0 0-1.91 4.46 7.7 7.7 0 0 0 4.27 6.67c3 1.63 7.57 2.23 13.2 1.76a43.58 43.58 0 0 0 19.51-7.06 165.33 165.33 0 0 1-15.21-4.89 36.84 36.84 0 0 0-12.75-2.76z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
    <path
      d="M135.26 171.91h-.86c-6.76-.42-11.79-5.62-13.48-13.92-3.77-18.6 4.75-34.93 5.11-35.61a4 4 0 0 1 7.07 3.74c-.08.15-7.52 14.56-4.34 30.28.55 2.7 2.08 7.28 6.13 7.53s9.61-3.84 12.3-11.89a4 4 0 0 1 7.59 2.54c-3.47 10.33-11.41 17.33-19.52 17.33z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
    <path
      d="M162.82 169a12.92 12.92 0 0 1-2.32-.21 14.5 14.5 0 0 1-9.78-6.79c-7.92-12.65-1.21-38.52-.42-41.42a4 4 0 0 1 7.72 2.09c-1.89 7-5.67 26.87-.52 35.09A6.47 6.47 0 0 0 162 161c1.81.34 4-.47 5.94-2.23 2.9-2.59 9.32-11.07 7.87-34.31l-.37.39a4 4 0 0 1-5.65-.27 8.13 8.13 0 0 1-1.15-9.7 7.58 7.58 0 0 1 8.16-3.77c2.28.52 6.2 2.61 6.85 10.72.92 11.72.81 32.87-10.37 42.9a15.87 15.87 0 0 1-10.46 4.27zM185.87 166a4 4 0 0 1-1.47-7.72 87 87 0 0 0 13.34-6.65c-2.57-3.5-4.6-8.37-5.26-15.15-1.81-18.52 8.4-29.73 18.92-30.87 7.87-.85 14 4.14 15 12.15 1.78 14.93-6 26.19-15.41 34.13 9.45 3.36 22.68-1.27 29.42-5.91l1-.71c-3.39-5-5.28-11.55-5.35-19.11-.1-10.53 4.36-19.47 11.92-23.9 5.09-3 10.74-3.27 15.1-.77 2.6 1.49 7 5.33 7 14.22 0 10.84-5.26 20.6-16.4 30.19a15.7 15.7 0 0 0 3 1.27c7.47 2.29 15.82-1 20.77-8.15 7.7-11.13 11.34-53.6 12.09-69a4 4 0 1 1 8 .4c-.29 5.91-3.12 58.17-13.5 73.18-6.94 10.05-18.88 14.57-29.69 11.25a24 24 0 0 1-7.35-3.75l-2.06 1.45c-8.06 5.53-25.7 12-38.75 6a23.2 23.2 0 0 1-2.42-1.31 93.11 93.11 0 0 1-16.43 8.47 3.94 3.94 0 0 1-1.47.29zm27.2-52.48a6.1 6.1 0 0 0-.8.05c-5.36.58-13.3 7.1-11.83 22.13.46 4.75 1.76 8.55 3.87 11.35 8.39-6.65 15.6-16.07 14.14-28.35-.53-4.48-3.51-5.21-5.38-5.21zm43.5-5.71a9.16 9.16 0 0 0-4.52 1.35c-5.07 3-8 9.29-8 16.92.06 6.57 1.64 11.14 3.72 14.32 9.7-8.16 14.27-16.14 14.27-24.69 0-3.6-1.05-6.19-2.95-7.28a5.18 5.18 0 0 0-2.52-.65z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
    <path
      d="M302.52 149.93a16.84 16.84 0 0 1-12.52-5.17c-5.29-5.52-7.38-15-5.89-26.76a4 4 0 1 1 7.94 1c-1.17 9.15.19 16.52 3.72 20.2 2 2.07 4.57 2.94 7.92 2.66a16.28 16.28 0 0 0 5.47-1.37 4 4 0 1 1 3.36 7.26 24.55 24.55 0 0 1-8.16 2.08c-.62.07-1.24.1-1.84.1zM278.44 103.86a4 4 0 0 1-.67-8l29.56-5.08a4 4 0 0 1 1.36 7.89l-29.57 5.08a4 4 0 0 1-.68.11zM420 134.21a20.33 20.33 0 0 1-13.42-5c-6.7-5.71-10.59-15.65-10.17-25.95.4-9.56 4.17-15.53 7.27-18.86a20 20 0 0 1 14.31-6.74c7.54 0 12.83 5.24 13.17 13.06.5 11.31-6.41 25.84-20.2 31.68.26.25.52.49.79.72a12.64 12.64 0 0 0 11.25 2.8c10.26-2.08 16.21-19.53 17.16-23.81a4 4 0 0 1 7.84 1.29c0 .26-6.25 26.83-23.46 30.33a22.93 22.93 0 0 1-4.54.48zm-2-48.58c-5.34 0-13.08 5.57-13.59 17.93a28.29 28.29 0 0 0 2.09 12c11.36-4 17.08-15.57 16.69-24.49-.25-4.5-2.97-5.44-5.19-5.44z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
    <path
      d="M336.85 144.92a21.35 21.35 0 0 1-11.91-3.62c-7-4.68-10.83-13.1-10.91-23.72-.07-9.87 3.47-18.9 9.45-24.16a16.35 16.35 0 0 1 13-4.31 11.38 11.38 0 0 1 8.06 4.72c3.6 5.14 2.18 12.22 2 13a4 4 0 0 1-7.82-1.69c.24-1.15.61-4.82-.75-6.75a3.4 3.4 0 0 0-2.59-1.39 8.5 8.5 0 0 0-6.62 2.39c-4.2 3.69-6.78 10.63-6.73 18.09.06 7.9 2.67 14 7.37 17.14a13.52 13.52 0 0 0 12.6 1.31c14.32-5.73 14.49-25.7 14.38-39.44l-.16-.1a12.44 12.44 0 0 1-5.67-12.71 7.24 7.24 0 0 1 5.92-6 6.19 6.19 0 0 1 5 1.35c2.63 2.27 2.84 6.2 2.86 11.58h.17c4.18 0 10.51-2.3 19-8.65a4.26 4.26 0 0 1 4.93-.24c2.88 1.87 2.32 4.32.23 13.43-1.78 7.8-6.51 28.5-2.44 32.69 3.6 3.71 8 .94 8.15.82a4 4 0 0 1 4.36 6.71c-3.47 2.26-11.75 4.74-18.26-2s-3.55-22.78.39-40v-.05c-6.79 3.94-12.16 5.34-16.37 5.34h-.15c0 15.11-1.05 37.32-19.42 44.67a21.9 21.9 0 0 1-8.07 1.59zM454.47 127.49a12.44 12.44 0 0 1-9.86-5.22c-4.76-6.15-6-16.64-3.21-27.36 4-15.51 13.8-22.78 28.38-21.15 0-.28 0-.56.05-.83a4 4 0 1 1 8 .46c-1.64 28.1-5.59 54.1-23.36 54.1zm11.36-46c-8.74 0-14 4.9-16.69 15.39-2.6 10-.65 17.29 1.8 20.46a4.56 4.56 0 0 0 3.53 2.11c9.74 0 13.22-19.56 14.75-37.74a27.11 27.11 0 0 0-3.39-.18z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
    <path
      d="M478.92 124.76a8.87 8.87 0 0 1-6-2.16c-5-4.38-4.81-13.95-4.56-27.19 0-2 .08-4 .1-6.08a4 4 0 0 1 4-4 4 4 0 0 1 4 4c0 2.1-.06 4.16-.1 6.14-.16 8.51-.36 19.1 1.84 21 .21.19.64.23 1.3.13 5.32-.8 12-20.36 13.56-48.18a4 4 0 0 1 8 .3l-.22 11c4.49-10.77 10.19-16.59 17-17.33a11.16 11.16 0 0 1 9.6 3.49 20.78 20.78 0 0 1 4.54 9.2c3.81-9.14 9.38-16.4 17.49-16.92a11.11 11.11 0 0 1 8.83 3.29c5.49 5.51 7.3 17.39 5.86 38.52-.15 2.07-.21 7 2.22 8.06 3.36 1.45 12-2.31 20-10.94a4 4 0 0 1 5.86 5.46c-12.44 13.35-23.41 15.25-29 12.82-3.59-1.56-7.73-5.59-7-15.94 1.6-23.44-1.53-30.32-3.54-32.34a3.11 3.11 0 0 0-2.64-1c-8.8.57-14.18 19.78-16.61 35.62a160.34 160.34 0 0 1-1.45 13 4 4 0 0 1-8-.71c.1-1.59.47-6.77 1.46-13.37.77-11.88.23-24.89-3.8-29.13a3.18 3.18 0 0 0-3-1c-5.28.57-10.5 9.4-14.32 24.24a181.39 181.39 0 0 0-4.34 25.08 4 4 0 0 1-8-.44l.11-5.57c-3.09 6.56-6.88 10.12-11.43 10.81a11.41 11.41 0 0 1-1.76.14zM430.23 160h8.41c7.71 0 12.63 5 12.63 12.2s-4.65 12.13-12.53 12.13h-8.51zm8.16 19.23a6.73 6.73 0 0 0 6.92-7c0-4.06-2.79-7.09-6.54-7.09h-2.91v14.12zM479.56 180H471l-1.41 4.35h-6l8.95-24.35H478l9 24.33h-6zm-1.56-4.87l-2.68-8.21h-.06l-2.66 8.21zM501.72 160h5.79v24.33h-5.79zM536.86 184.33l-5-7.84h-2v7.84h-5.64V160h9.48c6 0 8.7 3.56 8.7 8.39 0 3.7-1.69 6.12-4.52 7.29v.09l5.71 8.56zm-7-12.86h2.64c2.46 0 4-1.22 4-3.21 0-1.83-1.32-3.2-3.86-3.2h-2.74zM576.84 160l-8 13.74v10.59h-5.8v-10.59L555.1 160h6.56l4.26 8.06h.1l4.2-8.06z"
      className="cls-1"
      transform="translate(-45.14 -58.22)"
    />
  </svg>
);
