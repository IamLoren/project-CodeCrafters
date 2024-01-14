import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';
import React from 'react';

import imageNotFound from '../../img/notfoundimg.webp';
import {
  StyledSection,
  StyledImageNoFound,
} from 'components/NoFound/StyledNoFound.js';

const NotFound = () => {
  return (
    <StyledSection>
      <div>
        <h1>Oops, 404 - page not found!</h1>
        <p>Look like you're lost, the page you are looking for not avaible!</p>
        <StyledNavLink to="/">Go to Home</StyledNavLink>
        <StyledImageNoFound src={imageNotFound} alt="No-found-image" />
      </div>
    </StyledSection>
  );
};

export default NotFound;
