import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container/Container.jsx';
import Header from 'components/Header/Header.jsx';
import Logo from 'components/Logo/Logo.jsx';
import Currency from './Currency/Currency.jsx';
import styled from 'styled-components';
import Balance from 'components/Balance/Balance.jsx';
import { SideLeft } from './MainLayoutStyled.jsx';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo>
            <span role="img" aria-label="computer icon">
              💻
            </span>{' '}
            GoMerch Store
          </Logo>
        </Container>
      </Header>
      <main>
        <StyledContainer>
          <SideLeft>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/currency">Currency</NavLink>
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
