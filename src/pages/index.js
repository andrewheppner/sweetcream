import React, { Component } from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import _ from "lodash";
// import posed from "react-pose";

const SCENE_SCROLL_LENGTH = 1000;

const PageOne = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #f9edd3;
  opacity: ${props => (props.active ? 1 : 0)};
`;
const PageTwo = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #f1c87b;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const PageThree = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  background: #efa57e;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const BigContainer = styled.div`
  height: ${20 * SCENE_SCROLL_LENGTH}px;
`;

const PageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  font-size: 3em;
  color: white;
`;

const Pages = [PageOne, PageTwo, PageThree];

class IndexPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSceneTransition = this.handleSceneTransition.bind(this);
    this.state = {
      activeSceneIndex: 0
    };
  }

  handleSceneTransition() {
    const { activeSceneIndex } = this.state;
    if (
      window.scrollY >
      SCENE_SCROLL_LENGTH + activeSceneIndex * SCENE_SCROLL_LENGTH
    ) {
      this.setState({
        activeSceneIndex: _.clamp(
          Math.floor(window.scrollY / SCENE_SCROLL_LENGTH),
          0,
          2
        )
      });
    } else if (
      window.scrollY < activeSceneIndex * SCENE_SCROLL_LENGTH &&
      activeSceneIndex > 0
    ) {
      this.setState({
        activeSceneIndex: this.state.activeSceneIndex - 1
      });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleSceneTransition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSceneTransition);
  }

  render() {
    const { activeSceneIndex } = this.state;
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BigContainer>
          <PageContainer>
            {/* {Pages.map((Component, index) => (
              <Component key={index} active={activeSceneIndex === index} />
            ))} */}
            <PageOne active={activeSceneIndex === 0}>
              <span>xxxxxxxx</span>
            </PageOne>
            <PageTwo active={activeSceneIndex === 1}>
              <span>yyyyyyyy</span>
            </PageTwo>
            <PageThree active={activeSceneIndex === 2}>
              <span>zzzzzzzz</span>
            </PageThree>
          </PageContainer>
        </BigContainer>
      </>
    );
  }
}

export default IndexPage;
