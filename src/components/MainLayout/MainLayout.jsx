import React from 'react';
import { Outlet } from 'react-router-dom';
// import Container from '../Container/Container.jsx';

import Header from 'components/Header/Header.jsx';
import Currency from './Currency/Currency.jsx';
import styled from 'styled-components';
import Balance from 'components/Balance/Balance.jsx';
import { SideLeft, StyledNavLink } from './MainLayoutStyled.jsx';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <SideLeft>
            <nav>
              <StyledNavLink to="/"> Home</StyledNavLink>
              <StyledNavLink to="/statistics">Statistics</StyledNavLink>
              <StyledNavLink to="/currency">Currency</StyledNavLink>
            </nav>
            <Balance />
            <Currency />
          </SideLeft>
          <Outlet />
        </StyledContainer>
      </main>
    </>
  );
};

export default MainLayout;

const StyledContainer = styled.div`
  display: flex;
  gap: 50px;
`;
