import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #fff;
  border: 0.063rem solid #000;
  border-radius: 0.375rem;
  height: 20rem;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  transform-origin: 50% 100%;
  width: 15rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  width: 100%
`

const Name = styled.div`
  font-size: 1.25em;
  text-align: center;
  width: 100%
`

const Picture = styled.img`
  height: auto;
  margin-bottom: 1rem;
  object-fit: contain;
  width: 100%;
`

class Card extends Component {
  render() {
    const { isFirst, isSecond, stuntDouble } = this.props;

    const firstCardStyle = {
      opacity: 1,
      pointerEvents: "auto",
      zIndex: 4,
      transform: 'translate3d(0rem, 0rem, 0rem)'
    }
    const secondCardStyle = {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 2,
      transform: 'translate3d(0rem, 0rem, -1.563rem)'
    }
    const allOtherCardsStyle = {
      boxShadow: '0.6rem 0.3rem 0.9rem #cfd6de',
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 1,
      transform: 'translate3d(0rem, 0rem, -3.125rem)'
    }

    return (
      <Wrapper
        style={isFirst ? firstCardStyle : isSecond ? secondCardStyle : allOtherCardsStyle}
      >
        <Info>
          <Picture src={stuntDouble.picture.large} alt="Picture of stunt double" />
          <Name>{`${stuntDouble.name.first} ${stuntDouble.name.last}`}</Name>
        </Info>
      </Wrapper>
    )
  }
}

export default Card