import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  height: 380px;
  list-style: none;
  margin: 0 auto;
  padding: 0 0.5em;
  perspective: 320px;
  perspective-origin: 50% 100%;
  pointer-events: none;
  width: 100%;
`

const Stack = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Stack