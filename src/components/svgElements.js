import React from "react";
import styled from "styled-components";
import scBadge from "../images/BiddefordSeal.svg";
import scLogo from "../images/Sweetcream-Logo-PROD.svg";
import { rotationBuilder } from "../helpers/animations";

const Seal = styled.img`
  width: 30%;
  animation: ${rotationBuilder()} 200s linear infinite;
`;

const Logo = styled.img`
  width: 15%;
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

export const Watermelon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    width="100%"
    height="100%"
  >
    <defs>
      <style>{`.cls-2{fill:#324747}`}</style>
    </defs>
    <path
      fill="#de4140"
      d="M484.3 158c-99 8.89-221.45-30-225.94-72-13.27-48.53-54-63.6-54-63.6-66 4.5-119.68-28-175-21.51-50.78 6-21.55 160.33-15.91 173.21 5.96 13.49 14.55 25.08 15.14 46.1 1.46 52.59 66.47 18.22 41.57 53.95-4 5.68 1.9 13.27 6.69 17.87 28.25 25 98.08 78.82 140.28 86.35 83.44 14.91 163.53 9.14 244.77-2 36.77-5 71.69-25.76 104.67-53.67 22.52-19.01-48.08-167.77-82.27-164.7z"
    />
    <path
      d="M484.3 158c-7.51-12-6.73-13.67 7.49-14.73 6.25-.47 12.77-1.55 18.2 3.15 4 6.56 4.34 12.91-2 18.09-6.14 5-11.7 1.7-17-2.06-2.21-1.55-4.47-2.98-6.69-4.45zM349.11 250.57c3.75 12.63-.32 26.64-8.42 28.78-6.43 1.7-10.86-1.23-13.2-6.87-2.68-6.44 6.74-24.83 13.45-26.82 4.32-1.28 6.97.75 8.17 4.91zM294.62 207.52c5.63-4.46 11.44-14.74 16.45.52-.06 5 .58 10.13-.33 15-1.37 7.3-5.2 13.53-13.93 10.75-7.75-2.46-10.15-8.8-7.18-16.51 1.3-3.41 3.31-6.52 4.99-9.76zM172.46 67.42c-7.81 3.12-15.8 5-19.55-5-2.39-6.41 1.4-11.65 7.36-14.49 5.57-2.67 27 3 26.59 7-.86 7.76-8.2 9.89-14.4 12.49zM392.72 239.92c2 5.73 4.23 11.51-2.46 15.88-5.19 3.39-10.58 3.14-15.51-.13-6.37-4.23-4.87-9.9-2.06-15.64 2.63-5.37 1.35-15.25 8.06-15.33s9.58 8.7 11.97 15.22zM234.24 156.07c13.63-7.1 10.2 3.75 10.85 10.3-1.46 4.24-2.3 8.85-4.51 12.66-4.16 7.15-10.75 8.19-17.36 3.85-6.89-4.53-5.49-11.13-1.26-16.45 3.27-4.11 8.12-6.95 12.28-10.36zM219.32 19.67c8.73 16.74-8.15 9.85-13 14.06-3.56-.4-7.35-.16-10.65-1.3C188 29.76 188 23.14 189 16.59c1.16-7.67 7.56-5.3 11.86-5 6.88.41 12.45 4.95 18.46 8.08zM210.53 90.76l-.52 3.94c-5.82 5.12-11.46 10.3-19.13 12.93-7.87 2.69-13.28-.69-15.4-7.15-2.43-7.46 2.73-11.91 9.83-13.67 8.92-2.22 17.18.27 25.22 3.95zM239.26 232.8c-3.14-7.91 9.69-25 18.66-24.91.45 0 1-.23 1.33-.06 6.14 3.17 3.57 9.16 3.33 13.52-.42 7.63-1.56 16.26-11.24 18.15-5.15 1.01-10.11-.76-12.08-6.7zM190.28 137.9c4.19-.46 9.78-5.6 13.59 1.07 2.78 4.88-6.66 21.42-13.11 23.78-6.63 2.43-11.55-.09-14.31-6.42-3.36-7.68 1.25-13.92 13.83-18.43zM448.51 205.78c.25-3.36-6-8.18 1.59-10.74 6.78-2.26 23 6.81 24.74 13.75 1.5 6-.86 10.89-6.55 13.3-7.91 3.34-15.11-2.67-19.78-16.31zM506.78 190c-.37-4.81-6.12-12.57.68-14 9-1.83 17.67 4.3 23.26 11.84 4.17 5.64 1.77 11.84-4 15.21-6.89 4-12.17 0-16.22-5.55-1.61-2.16-2.45-4.87-3.72-7.5zM422.31 255.54c.56-7.27-4-19.43 4.05-21.58 9.46-2.52 14.25 8.55 17.33 17.43 2.48 7.16-.45 12-6.91 13.87-7.46 2.19-11.93-2.21-14.47-9.72z"
      className="cls-2"
    />
  </svg>
);

export const Brownie = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    width="100%"
    height="100%"
  >
    <defs>
      <style>{`.cls-3{fill:#edd6ca}`}</style>
    </defs>
    <path
      fill="#433931"
      d="M359 240.22L332.07 135a13.73 13.73 0 0 0-8-9.66l-95.84-60.6S82.71 87.6 27.63 106c-27.81 9.29-23.5 24.76-23.5 24.76L0 229.19a22.15 22.15 0 0 0 7.54 12.64l75.58 70.73 1.36-.39a13.73 13.73 0 0 0 13.73 4.88l76.49-25.29 79-12.68 94.79-22.45A13.77 13.77 0 0 0 359 240.22z"
    />
    <path
      fill="#3a3327"
      d="M4.2 127.58s56.06 68 85.85 67.52c14.33-.22 105.75-18.9 105.75-18.9s106.47-30.23 129.42-37a6.87 6.87 0 0 0 1.87-12.29l-95.32-63.38a13.76 13.76 0 0 0-9.42-2.21C182.75 66.49-7.44 89.42 4.2 127.58z"
    />
    <path
      d="M244.47 120.9c4.31 0 11.66-4.53 12.39 1.64 1 8.14-5.14 15.43-12.27 19.85-5.34 3.31-10.69.7-13.26-4.71-3.06-6.44.91-10.85 6.15-14.05 2.05-1.25 4.52-1.79 6.99-2.73zM311.59 175.23c.17-4.31-4.13-11.81 2.06-12.33 8.17-.68 15.25 5.67 19.42 13 3.11 5.45.33 10.7-5.18 13.09-6.54 2.83-10.81-1.3-13.82-6.64-1.18-2.13-1.64-4.63-2.48-7.12zM291.5 103.71c1.92-3.33-.11-10.83 7.34-8.94a24.35 24.35 0 0 1 17.53 17.41c1.47 5.44-3.89 8.55-11.27 8.38-8.79-.2-12.13-5-13.52-10.35-.58-2.09-.09-4.21-.08-6.5zM93.25 73.29c4.32 0 11.66-4.53 12.39 1.64 1 8.14 4.6 19-12.27 19.85-6.27.3-10.69.7-13.26-4.71-3.06-6.45.92-10.85 6.15-14 2.05-1.3 4.53-1.84 6.99-2.78zM43.41 131.88c2.8-3.28 4.06-11.83 9.25-8.41 6.84 4.52 8.47 13.89 7.24 22.19-.92 6.21-6.36 8.62-12.16 7.09-6.9-1.82-7.7-7.7-6.76-13.77.37-2.37 1.55-4.61 2.43-7.1zM148.06 136.69c-3.32 2.75-6 11-10.55 6.7-6-5.62-6-15.13-3.35-23.09 2-6 7.75-7.41 13.2-4.91 6.48 3 6.26 8.9 4.3 14.72-.76 2.27-2.31 4.28-3.6 6.58zM171 211c-.43 4.3 3.41 12-2.8 12.19-8.19.19-14.88-6.57-18.61-14.09-2.78-5.62.31-10.7 5.94-12.76 6.7-2.44 10.72 1.93 13.41 7.45 1.06 2.14 1.34 4.66 2.06 7.21zM198.11 167.3c4.2-.94 10.34-7 12.44-1.18 2.77 7.72-1.54 16.19-7.51 22.1-4.46 4.41-10.26 3.08-14-1.62-4.42-5.59-1.54-10.78 2.85-15.07 1.73-1.68 4.03-2.76 6.22-4.23zM104.29 192.24c-.25 4.3 3.92 11.88-2.28 12.29-8.18.54-15.15-5.93-19.19-13.29-3-5.5-.15-10.71 5.4-13 6.59-2.72 10.78 1.48 13.7 6.87 1.15 2.11 1.56 4.62 2.37 7.13zM138.74 246.76c4.32 0 11.67-4.53 12.4 1.64 1 8.14-5.14 15.43-12.28 19.85-5.33 3.3-10.69.7-13.26-4.71-3.06-6.45.92-10.85 6.15-14.05 2.05-1.25 4.53-1.8 6.99-2.73zM217.24 233.56c2.06-3.79 1.52-12.42 7.3-10.15 7.63 3 11.18 11.82 11.7 20.19.39 6.27-4.43 9.76-10.42 9.47-7.12-.35-9.13-5.93-9.47-12.06-.14-2.39.55-4.84.89-7.45zM209.76 83.4c2.69-3.38 3.66-12 9-8.72 7 4.28 8.95 13.59 8 21.93-.71 6.23-6.06 8.83-11.91 7.5-7-1.59-8-7.44-7.22-13.53.23-2.38 1.37-4.67 2.13-7.18zM175.77 30.28c4.31 0 11.66-4.53 12.39 1.64 1 8.14-5.14 15.43-12.27 19.85-5.34 3.31-10.69.71-13.26-4.71-3.06-6.44.91-10.85 6.15-14.05 2.05-1.25 4.53-1.79 6.99-2.73zM92 9.31C94.86 6 95-2.87 102 .93c9.18 5 12.73 14.87 12.58 23.49-.12 6.44-6.43 8.72-13.84 6.87-8.8-2.2-10.76-8.38-10.6-14.67.04-2.46 1.14-4.76 1.86-7.31z"
      className="cls-3"
    />
  </svg>
);

export const PinkJaggedBlob = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    width="100%"
    height="100%"
  >
    <path
      fill="#edd6ca"
      d="M13 26.69C.46 49.82-4.16 128.43 4.29 181.81c31.25 10.84 66.93 20.28 100.18 25.34 24.17 3.68 30.77-119 49.73-121.11 47.8-5.27 116.91 102.78 159.69 90.34 37.78-11 67.75-19.15 79.61-14.65 25.3 9.59 114.26 7.85 116 27s-70.23 33.62-100.31 50.72c-63.22 35.93-64.51 55.8-21.71 69.76 12.89 4.2 23.07 15.63 29.44 17.55 31.1 9.36-1.45 34-10.76 35.75-18.51 3.56-49.91 25.9-65.78 28.36-13.11 2-21.79 19.21-6.09 23.13s112.69 4.36 141 8.73 79.53 15.89 64.7 36-148.79 23.42-192.32 25.78c-33.65 1.81-66.38 32.73-12.43 38.62 33.15 3.61 134.42 13 119.42 43.5-12.82 26.08 27.58 32 22.18 49.27-5.54 17.7-38.33 26.94-57.43 26.94-60.65 0-79 60.83 142.87 60.83 56.93-85.88-.17-194.77 16.56-307 23.64-158.59 15.48-191.11 1.49-304-1.45-11.65 4.56-73.38-47.1-85.35C457.36-10.27 18.92 6.92 13 26.69z"
    />
  </svg>
);

export const BannerTwo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    width="100%"
    height="100%"
  >
    <defs>
      <style>
        {`.cls-1{fill:none} .cls-2{fill:#e0b8b7} .cls-3{fill:#231f20}`}
      </style>
      <clipPath id="clip-path">
        <path d="M.22 1.71h1199.19v478.68H.22z" className="cls-1" />
      </clipPath>
      <clipPath id="clip-path-2">
        <path d="M2.81 1.71H1199.4v474.31H2.81z" className="cls-1" />
      </clipPath>
    </defs>
    <path
      d="M1200.22 250l-.81 230.44H.91V182.77s129.51-56.38 175.8-61c111.58-11 444.35 61 444.35 61"
      className="cls-2"
    />
    <path
      d="M221.2 250.08c-6.28.16-11.56-.83-15.77-3a18.35 18.35 0 0 1-10.25-15 15 15 0 0 1 5.57-13.61c6.88-5.48 18.29-5.84 32.15-1a197.64 197.64 0 0 0 22.73 6.34 25.66 25.66 0 0 0 4.58-18.3c-1.21-10.74-10.46-14.9-21.21-19.72-10.89-4.89-23.24-10.43-24.81-24.64-1.78-16.09 12.29-30.91 31.38-33 19.6-2.18 30.65 13.68 31.11 14.36a4.68 4.68 0 0 1-7.72 5.28c-.37-.54-8.45-11.89-22.36-10.35s-24.33 11.73-23.11 22.7c.91 8.29 7.92 12 19.34 17.14 11.66 5.23 24.88 11.17 26.66 27.26a35.24 35.24 0 0 1-4.06 21.28c48.48 8.6 106.6 4.73 138.2-11a4.68 4.68 0 1 1 4.18 8.37c-34.11 17-97.37 20.91-148.65 11a46.82 46.82 0 0 1-4.29 3.82 59.62 59.62 0 0 1-28.71 11.8c-1.7.11-3.36.19-4.96.27zm-6.41-26.59c-4.86.13-7.31 1.63-8.21 2.34a5.56 5.56 0 0 0-2.1 5.27 9 9 0 0 0 5.19 7.67c3.57 1.82 8.92 2.39 15.48 1.66a51 51 0 0 0 22.6-8.82 196.55 196.55 0 0 1-17.93-5.27c-6.55-2.28-11.45-2.94-15.03-2.85z"
      className="cls-3"
    />
    <path
      d="M300.22 219.42h-1c-7.91-.28-13.95-6.21-16.17-15.87-5-21.62 4.5-41 4.9-41.78a4.68 4.68 0 0 1 8.38 4.17c-.09.17-8.36 17.24-4.16 35.52.72 3.14 2.64 8.44 7.39 8.62 4.6.15 11.11-4.78 14-14.27a4.68 4.68 0 1 1 8.94 2.75c-3.73 12.19-12.8 20.62-22.28 20.86z"
      className="cls-3"
    />
    <path
      d="M332.35 215.24a13.77 13.77 0 0 1-2.72-.18 17 17 0 0 1-11.63-7.64c-9.64-14.56-2.57-45-1.73-48.41a4.68 4.68 0 0 1 9.09 2.22c-2 8.21-5.83 31.57.44 41a7.56 7.56 0 0 0 5.35 3.57c2.14.34 4.64-.67 6.88-2.78 3.31-3.12 10.57-13.22 8.18-40.35a3.72 3.72 0 0 1-.43.46 4.68 4.68 0 0 1-6.61-.14 9.5 9.5 0 0 1-1.64-11.3 8.86 8.86 0 0 1 9.43-4.65c2.68.54 7.33 2.86 8.32 12.32 1.44 13.67 1.94 38.41-10.82 50.46a18.55 18.55 0 0 1-12.11 5.42zM359.2 211a4.68 4.68 0 0 1-1.95-9 101.67 101.67 0 0 0 15.39-8.18c-3.1-4-5.63-9.64-6.61-17.55-2.66-21.59 8.94-35 21.21-36.64 9.17-1.24 16.53 4.41 17.88 13.74 2.52 17.4-6.29 30.8-17 40.36 11.15 3.65 26.48-2.16 34.22-7.78l1.19-.87c-4.12-5.76-6.52-13.34-6.83-22.18-.44-12.31 4.51-22.89 13.22-28.3 5.86-3.63 12.45-4.14 17.62-1.34 3.09 1.66 8.31 6 8.58 16.41.32 12.67-5.53 24.24-18.27 35.78a17.8 17.8 0 0 0 3.52 1.39c8.8 2.46 18.46-1.62 24-10.14 8.66-13.24 11.64-63 12.06-81.06a4.68 4.68 0 0 1 9.35.22c-.16 6.92-1.9 68.1-13.58 86-7.82 11.95-21.63 17.59-34.38 14a27.46 27.46 0 0 1-8.65-4.09c-.77.59-1.56 1.17-2.36 1.76-9.26 6.71-29.68 14.86-45.12 8.15a25.09 25.09 0 0 1-2.87-1.46 108.23 108.23 0 0 1-19 10.4 4.45 4.45 0 0 1-1.62.38zm30.22-62.16a8.07 8.07 0 0 0-.94.08c-6.24.84-15.33 8.7-13.16 26.22q1 8.33 4.86 13.16c9.61-8 17.76-19.26 15.68-33.57-.75-5.23-4.25-5.98-6.44-5.93zm50.68-8a10.68 10.68 0 0 0-5.25 1.71c-5.83 3.62-9.12 11.11-8.81 20 .27 7.67 2.25 13 4.78 16.62 11.09-9.83 16.2-19.28 15.95-29.28-.11-4.21-1.41-7.2-3.67-8.42a5.89 5.89 0 0 0-3-.65z"
      className="cls-3"
    />
    <path
      d="M495.07 188.71a19.68 19.68 0 0 1-14.78-5.71c-6.36-6.29-9.08-17.34-7.69-31.1a4.68 4.68 0 0 1 9.31.95c-1.09 10.73.72 19.3 5 23.51 2.38 2.35 5.42 3.29 9.33 2.86a18.7 18.7 0 0 0 6.35-1.76 4.68 4.68 0 1 1 4.15 8.38 28.47 28.47 0 0 1-9.47 2.68q-1.13.16-2.2.19zM465.55 135.57a4.68 4.68 0 0 1-1-9.26l34.41-6.82a4.67 4.67 0 1 1 1.82 9.17l-34.41 6.83a4.32 4.32 0 0 1-.82.08zM631.88 166.81a23.8 23.8 0 0 1-15.88-5.48c-8-6.47-12.85-18-12.66-30 .17-11.18 4.4-18.27 7.92-22.26 4.53-5.12 10.55-8.15 16.53-8.31 8.81-.23 15.16 5.74 15.79 14.87.92 13.21-6.72 30.4-22.66 37.64.31.29.62.56.94.82a14.82 14.82 0 0 0 13.29 2.91c11.94-2.75 18.37-23.32 19.35-28.35a4.68 4.68 0 0 1 9.26 1.3c0 .31-6.5 31.56-26.51 36.16a27.28 27.28 0 0 1-5.37.7zm-3.79-56.73c-6.24.17-15.12 6.91-15.35 21.37a33.14 33.14 0 0 0 2.8 13.93c13.17-5 19.51-18.72 18.78-29.13-.32-5.25-3.59-6.25-6.23-6.17z"
      className="cls-3"
    />
    <path
      d="M535.05 181.82A24.94 24.94 0 0 1 521 178c-8.27-5.26-13-15-13.46-27.4-.37-11.53 3.49-22.2 10.33-28.53 4.41-4.08 9.76-6 15.05-5.42a13.36 13.36 0 0 1 9.57 5.27c4.35 5.9 2.91 14.22 2.73 15.15a4.68 4.68 0 0 1-9.19-1.75c.25-1.34.57-5.65-1.08-7.86a4 4 0 0 0-3.06-1.51c-3.28-.37-6 1.42-7.67 3-4.8 4.44-7.61 12.63-7.33 21.35.31 9.23 3.55 16.27 9.13 19.81a15.79 15.79 0 0 0 14.72 1.11c16.57-7.13 16.16-30.48 15.62-46.54l-.19-.11a14.52 14.52 0 0 1-7-14.68 8.47 8.47 0 0 1 6.74-7.16 7.21 7.21 0 0 1 5.91 1.43c3.15 2.58 3.51 7.16 3.69 13.45h.2c4.88-.12 12.21-3 22-10.68a5 5 0 0 1 5.76-.43c3.42 2.1 2.83 5 .67 15.7-1.85 9.16-6.75 33.5-1.88 38.28 4.32 4.23 9.35.87 9.56.72a4.68 4.68 0 0 1 5.3 7.71c-4 2.74-13.6 5.9-21.41-1.75s-4.83-26.53-.74-46.81a.64.64 0 0 0 0-.07c-7.82 4.82-14.06 6.62-19 6.75h-.17c.5 17.66-.11 43.65-21.37 52.79a25.38 25.38 0 0 1-9.38 2zM672 157.92a14.57 14.57 0 0 1-11.68-5.8c-5.75-7.05-7.51-19.27-4.58-31.89 4.24-18.25 15.46-27 32.55-25.57v-1a4.68 4.68 0 1 1 9.35.3c-1 32.91-4.84 63.43-25.64 63.96zm11.9-54.07c-10.22.27-16.18 6.15-19 18.49-2.74 11.8-.25 20.23 2.72 23.87a5.38 5.38 0 0 0 4.19 2.36c11.39-.3 14.87-23.26 16.11-44.56a32 32 0 0 0-3.99-.16z"
      className="cls-3"
    />
    <path
      d="M700.52 154a10.4 10.4 0 0 1-7.06-2.35c-6-5-6-16.16-6.14-31.65 0-2.29 0-4.67-.07-7.11a4.67 4.67 0 0 1 4.55-4.74h.06a4.67 4.67 0 0 1 4.74 4.6q.06 3.7.07 7.19c.07 9.95.15 22.33 2.78 24.52.25.21.76.24 1.53.11 6.19-1.1 13.45-24.16 14.4-56.73a4.68 4.68 0 0 1 9.35.11l.07 12.85c4.93-12.74 11.41-19.7 19.37-20.77a13 13 0 0 1 11.34 3.78c2.53 2.53 4.33 6.26 5.58 10.63C765.27 83.64 771.56 75 781 74.13a13 13 0 0 1 10.42 3.58c6.58 6.27 9 20.11 8 44.86-.11 2.42 0 8.19 2.84 9.35 4 1.6 13.91-3.06 23-13.38a4.68 4.68 0 1 1 7 6.2c-14.14 16-26.91 18.53-33.54 15.86-4.25-1.72-9.21-6.3-8.7-18.43 1.16-27.45-2.7-35.4-5.11-37.69a3.64 3.64 0 0 0-3.12-1c-10.27.92-16 23.54-18.35 42.13a185.92 185.92 0 0 1-1.3 15.25 4.68 4.68 0 0 1-9.31-.78c.07-1.88.34-7.94 1.3-15.68.56-13.91-.46-29.1-5.31-33.94a3.71 3.71 0 0 0-3.48-1.13c-6.17.83-12 11.31-16 28.77a210.27 210.27 0 0 0-4.34 29.49 4.68 4.68 0 0 1-9.35-.27v-6.52c-3.43 7.76-7.75 12-13 13a14.71 14.71 0 0 1-2.13.2zM644.67 196.65l9.83-.26c9-.23 14.91 5.49 15.13 13.9s-5.08 14.31-14.28 14.54l-10 .26zm10.11 22.23a7.87 7.87 0 0 0 7.89-8.42c-.13-4.75-3.48-8.2-7.86-8.09l-3.4.09.42 16.5zM702.93 218.53l-10 .25-1.52 5.13-7 .18 9.69-28.71 6.42-.17 11.19 28.18-7 .18zm-2-5.62l-3.37-9.52h-.08l-2.86 9.68zM728.24 194.5l6.76-.17.73 28.44-6.73.23zM770 221.89l-6.06-9-2.35.06.24 9.17-6.59.17-.73-28.44 11.09-.29c7-.18 10.27 3.9 10.41 9.55.12 4.32-1.79 7.21-5.06 8.66v.1l6.92 9.84zm-8.56-14.82l3.09-.08c2.88-.08 4.6-1.55 4.54-3.87-.05-2.14-1.64-3.7-4.61-3.62l-3.21.08zM816.05 192.25l-8.93 16.31.32 12.37-6.78.18-.32-12.38-9.7-15.83 7.66-.2 5.23 9.3h.12l4.66-9.54z"
      className="cls-3"
    />
    <text
      fill="#231f20"
      font-family="Averta-Bold,Averta"
      font-size="58.05"
      font-weight="700"
      letter-spacing=".1em"
      transform="translate(370.32 372.94)"
    >
      ICE CR
      <tspan x="224.05" y="0">
        E
      </tspan>
      <tspan x="264.45" y="0">
        AM
      </tspan>
    </text>
    <g clip-path="url(#clip-path)">
      <path
        fill="#fee7a4"
        d="M161.55 432c32.34-3.54 121.91-12.17 145.16-58.7C362.93 260.8 444 274.11 444 274.11c132-17.27 204-66.32 314.83-20.64 356.33 146.79 342.24 276.53 397.25 189.07s120-177.23 119.53-92.33c-1 187.47 20.58 514.62-102.13 565.19-378.91 156.13-1487.33-216.07-1479.06-243C-269.75 555.7 4.51 449.17 161.55 432z"
      />
    </g>
    <path
      fill="#3c2415"
      d="M931.82 198.08s-18.05-30.83-14.28-55.29S931.75 63.5 994 49.16C1058.53 34.27 1096.74 92 1096.74 92s10.21 40.34 8.14 50.55c-5.87 28.9-17.81 49.31-36 70.14-16.68 19.11-65.81 28.31-65.81 28.31z"
    />
    <path
      fill="#c49a6c"
      d="M831.4 425l49.5-126.66 29-131.58c2-4.64 5.5-3.37 6.85-1.58 8.2 10.91 45.43 43.29 71.92 49 21.24 4.6-1.84 37.11 38.81 9 9.65-6.66 25.58.44 31.51 1.41 2.29.38 3 2.8 1.28 4.54L868.94 397.48l-33.61 27c-.72.43-4.24 1.27-3.93.52z"
    />
    <g clip-path="url(#clip-path-2)">
      <path
        d="M1082.06 238.3c119.28 3.39 140.82-80.11 133.14-103.19l3.33 128.15z"
        className="cls-2"
      />
    </g>
  </svg>
);
