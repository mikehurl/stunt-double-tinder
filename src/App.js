import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle'
import Stack from './Stack';
import Card from './Card';
import stuntDoubles from './utils/stuntDoubles'
import Check from './assets/Check';
import Cross from './assets/Cross'
import fullyFlared from './assets/fullyFlared.png';

const MainWrapper = styled.div`
  align-items: center;
  background: #f5f7fa;
  color: #212934;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin 0.75rem auto;
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
  cursor: pointer;
  display: flex;
  height: 4rem;
  justify-content: center;
  transition: transform cubic-bezier(0.47, 2.02, 0.31, -0.36) 0.35s;
  width: 4rem;

  :disabled {
    border: ${props => props.isTick ? `0.063rem solid #a8eec1` : `0.063rem solid #f5aaaa`};
  }

  :hover:not(:disabled) {
    transform: scale(1.1);
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { stuntDoubles: stuntDoubles };
    this.animateCardChosen = this.animateCardChosen.bind(this)
    this.animateCardDiscarded = this.animateCardDiscarded.bind(this)
    this.removeCard = this.removeCard.bind(this)
  }

  animateCardChosen() {
    const target = document.querySelector(`.${this.state.stuntDoubles[0].id.name}`)
    target.style.animation = "discardWhenYes 1.5s ease-out";
    setTimeout(() => this.removeCard(), 1500)
  }

  animateCardDiscarded() {
    const target = document.querySelector(`.${this.state.stuntDoubles[0].id.name}`)
    target.style.animation = "discardWhenNo 1.5s ease-out";
    setTimeout(() => this.removeCard(), 600)
  }

  removeCard() {
    const remaminingStuntDoubles = this.state.stuntDoubles.filter(stuntDouble =>
      stuntDouble.id.name !== this.state.stuntDoubles[0].id.name
    )
    this.setState({ stuntDoubles: remaminingStuntDoubles })
  }

  render() {
    const { stuntDoubles } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <MainWrapper>
          <Title><img src={fullyFlared} alt="Movie title" /></Title>
          <h1>Stunt Doubles</h1>
          <InnerWrapper>
            <Stack>
              {stuntDoubles.length > 0 && stuntDoubles.map((stuntDouble, index) => (
                <Card
                  className={stuntDouble.id.name}
                  isFirst={index === 0}
                  isSecond={index === 1}
                  key={stuntDouble.id.value}
                  removeCard={this.removeCard}
                  stuntDouble={stuntDouble}
                />
              ))}
            </Stack>
            <ButtonWrapper>
              <Button disabled={stuntDoubles.length <= 0} onClick={this.animateCardDiscarded}>
                <Cross stroke={stuntDoubles.length > 0 ? '#dc3030' : '#f5aaaa'} />
              </Button>
              <Button disabled={stuntDoubles.length <= 0} isTick onClick={this.animateCardChosen}>
                <Check stroke={stuntDoubles.length > 0 ? '#38c172' : '#a8eec1'} />
              </Button>
            </ButtonWrapper>
          </InnerWrapper>
        </MainWrapper>
      </Fragment>
    );
  }
}

export default App;
