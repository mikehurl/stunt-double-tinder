import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  height: 23.75rem;
  list-style: none;
  margin: 0 auto;
  padding: 0 0.5rem;
  perspective: 20rem;
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