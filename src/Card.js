import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  background: #fff;
  border: 0.063rem solid #000;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  height: 20rem;
  opacity: 0;
  overflow: hidden;
  padding: 1rem;
  position: absolute;
  transform-origin: 50% 100%;
  transition: transform cubic-bezier(0.47, 2.02, 0.31, -0.36) 0.35s;
  width: 15rem;

  @keyframes discardWhenYes {
    from {
      transform: rotate(0deg);
      opacity: 1;
    }
    
    to {
      transform: rotate(40deg) translateY(-80px);
      opacity: 0;
      }
    }

  @keyframes discardWhenNo {
    from {
      transform: rotate(0deg);
      opacity: 1;
    }

    to {
      transform: rotate(-40deg) translateY(-80px);
      opacity: 0;
    }
  }
`

const Name = styled.div`
  font-size: 1.25em;
  text-align: center;
  width: 100%;
`

const Picture = styled.img`
  height: auto;
  margin-bottom: 1rem;
  object-fit: contain;
  width: 100%;
`

class Card extends Component {
  constructor(props) {
    super(props)
    this._active = false;
    this._activeItem = null;

    this.beginDrag = this.beginDrag.bind(this)
    this.drag = this.drag.bind(this)
    this.endDrag = this.endDrag.bind(this)
    this.setTranslate = this.setTranslate.bind(this)
  }

  beginDrag(event) {
    this._active = true;
    this._activeItem = event.target.tagName === 'LI' ? event.target : event.target.parentNode;

    if (this._activeItem !== null) {
      if (!this._activeItem.xOffset) {
        this._activeItem.xOffset = 0;
      }

      this._activeItem.initialX = event.touches[0].clientX - this._activeItem.xOffset;
    }
  }

  drag(event) {
    event.preventDefault();

    if (this._active) {
      this._activeItem.currentX = event.touches[0].clientX - this._activeItem.initialX;
      this._activeItem.xOffset = this._activeItem.currentX;
      this.setTranslate(this._activeItem.currentX, this._activeItem);
    }
  }

  endDrag(element) {
    if (element !== this._activeItem) {
      return
    }
    if (this._activeItem !== null) {
      this._activeItem.initialX = this._activeItem.currentX;
    }
    this._active = false;
    this._activeItem = null;

    this.props.removeCard()
  }

  setTranslate(xPos, element) {
    if (xPos > 0) {
      element.style.animation = "discardWhenYes 1.5s ease-out"
      setTimeout(() => this.endDrag(element), 1500)
    }

    if (xPos < 0) {
      element.style.animation = "discardWhenNo 1.5s ease-out"
      setTimeout(() => this.endDrag(element), 1500)
    }
  }

  render() {
    const { className, isFirst, isSecond, stuntDouble } = this.props;

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
        className={className}
        onTouchStart={this.beginDrag}
        onTouchMove={this.drag}
        style={isFirst ? firstCardStyle : isSecond ? secondCardStyle : allOtherCardsStyle}
      >
        <Picture src={stuntDouble.picture.large} alt="Picture of stunt double" />
        <Name>{`${stuntDouble.name.first} ${stuntDouble.name.last}`}</Name>
      </Wrapper>
    )
  }
}

export default Card