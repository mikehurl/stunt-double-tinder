import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle'
import Stack from './Stack';
import Card from './Card';
import stuntDoubles from './stuntDoubles'

const MainWrapper = styled.div`
  align-items: center;
  background: #f5f7fa;
  color: #212934;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin 0.5rem auto;
  }
`
const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6.25rem);
  padding: 0.5rem 2rem;
  touch-action: none;
  width: 20em;
`

const Title = styled.div`
  background: #191d1c;
  display: flex;
  height: 6.25rem;
  justify-content: center;
  margin: 5% 0 0 0;
  width: 100vw;

  img {
    height: auto;
    max-width: 20rem;
  }
`

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  perspective: 20rem;
  perspective-origin: 50% 100%;
  width: 14.75em;
`

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: ${props => props.isTick ? `0.063rem solid #38c172` : `0.063rem solid #dc3030`};
  border-radius: 50%;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 4rem;
  
  img {
    max-width: 100%;
    height: auto;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { stuntDoubles: stuntDoubles }
  }

  render() {
    const { stuntDoubles } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <MainWrapper>
          <Title><img src="" alt="" /></Title>
          <h1>Stunt Doubles</h1>
          <InnerWrapper>
            <Stack>
              {stuntDoubles.length > 0 && stuntDoubles.map((stuntDouble, index) => (
                <Card
                  isFirst={index === 0}
                  isSecond={index === 1}
                  key={stuntDouble.id.value}
                  stuntDouble={stuntDouble}
                />
              ))}
            </Stack>
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
