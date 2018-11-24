import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #fff;
  width: 240px;
  height: 320px;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  transform-origin: 50% 100%;
`

class Card extends Component {
  render() {
    const { isFirst, isSecond } = this.props;

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
      />
    )
  }
}

export default Card