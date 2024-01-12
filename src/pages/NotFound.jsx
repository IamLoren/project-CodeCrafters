import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';
import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { ImFileEmpty } from 'react-icons/im';

const NotFound = () => {
  return (
    <div>
      <ImFileEmpty size="15" color="white" />
      <StyledNavLink to="/">
        <div>
          <IoMdHome size="15" />
        </div>
        Home
      </StyledNavLink>
    </div>
  );
};

export default NotFound;
