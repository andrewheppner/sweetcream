import styled from "styled-components";

export const SceneWrapper = styled.div`
  position: relative;
  display: flex;
  padding-top: 50px;
  height: 100vh;
  width: 100vw;
  background: ${props => props.backgroundColor};
  z-index: 0;

  h1 {
    padding: 30px;
    font-size: 12rem;
    color: #f9edd3;
    font-family: "AvertaBold";
  }

  h4 {
    font-size: 3rem;
    color: #f9edd3;
    font-family: "AvertaBold";
    padding-left: 30px;
  }
`;

export const InfoBlockContainer = styled.div`
  margin-top: 10%;
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  alignt-items: center;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  height: 30vh;
  font-family: 'Averta';
  font-size: 3em;
  
  .intense {
    font-family: 'AvertaBold'
    font-size: 4em;
  }
`;

export const PositionalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  z-index: ${props => props.zIndex};
`;

export const TextBox = styled.div`
  width: 40%;
  height: 100%;
  border: 2px solid black;
  text-align: justify;
  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 0.9);
  padding: 30px;
  background: white;
  font-family: "Averta";
  display: flex;
  z-index: 1;

  &.fullWidth {
    width: 60%;
    height: 65%;
    margin: auto;
  }

  .bold {
    font-family: 'AvertaBold'
    font-size: 5rem;
  }

  .left {
    padding: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-family: "AvertaBold";

    span {
      display: block;
    }
  }

  .right {
    padding: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      display: block;
    }
  }

  .center {
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      display: block;
    }

    a {
      color: black;
      z-index: 10;
    }
  }
`;
