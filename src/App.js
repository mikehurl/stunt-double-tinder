import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle'

const MainWrapper = styled.div`
  align-items: center;
  background: #f5f7fa;
  color: #212934;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin 0.5em auto;
  }
`
const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  padding: 0.5em 2rem;
  touch-action: none;
  width: 320px;
`

const Title = styled.div`
  background: #191d1c;
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 5% 0 0 0;
  width: 100vw;

  img {
    height: auto;
    max-width: 320px;
  }
`

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  perspective: 320px;
  perspective-origin: 50% 100%;
  width: 236px;
`

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: ${props => props.isTick ? `1px solid #38c172` : `1px solid #dc3030`};
  border-radius: 50%;
  display: flex;
  height: 5em;
  justify-content: center;
  width: 5em;img {
    max-width: 100%;
    height: auto;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <MainWrapper>
          <Title><img src="" alt="" /></Title>
          <h1>Stunt Doubles</h1>
          <InnerWrapper>
            <ButtonWrapper>
              <Button></Button>
              <Button isTick></Button>
            </ButtonWrapper>
          </InnerWrapper>
        </MainWrapper>
      </Fragment>
    );
  }
}

export default App;
