import React from 'react';
import {StyledContainer} from './Container.styled.js'

const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container