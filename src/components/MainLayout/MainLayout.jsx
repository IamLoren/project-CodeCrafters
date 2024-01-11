import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Header from 'components/Header/Header.jsx';
import Currency from './Currency/Currency.jsx';
import Balance from 'components/Balance/Balance.jsx';
import { SideLeft, StyledNavLink } from './MainLayoutStyled.jsx';
import { StyledContainer } from 'components/Container/Container.styled.js';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <div className='flex-container'>
            <SideLeft>
            <nav>
              <StyledNavLink to="/">
                <div>
                  <IoMdHome size="15" />
                </div>
                Home
              </StyledNavLink>
              <StyledNavLink to="/statistics">
                <div>
                  <MdTimeline size="15" />
                </div>
                Statistics
              </StyledNavLink>
              <StyledNavLink to="/currency">Currency</StyledNavLink>
            </nav>
            <Balance />
            <Currency />
          </SideLeft>
          <Outlet />
          </div>
          
        </StyledContainer>
      </main>
    </>
  );
};

export default MainLayout;

