import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 320px;
  opacity: 0;
  overflow: hidden;
  padding: 0.5em 1em;
  position: absolute;
  text-align: center;
  transform-origin: 50% 100%;
  width: 240px;
`

const Name = styled.div`
  width: 100%
`

class Card extends Component {
  render() {
    const { isFirst, isSecond, stuntDouble } = this.props;

    const firstCardStyle = {
      opacity: 1,
      pointerEvents: "auto",
      zIndex: 4,
      transform: 'translate3d(0px, 0px, 0px)'
    }
    const secondCardStyle = {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 2,
      transform: 'translate3d(0px, 0px, -25px)'
    }
    const allOtherCardsStyle = {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 1,
      transform: 'translate3d(0px, 0px, -50px)'
    }

    return (
      <Wrapper
        style={isFirst ? firstCardStyle : isSecond ? secondCardStyle : allOtherCardsStyle}
      >
        <Name>{`${stuntDouble.name.first} ${stuntDouble.name.last}`}</Name>
      </Wrapper>
    )
  }
}

export default Card