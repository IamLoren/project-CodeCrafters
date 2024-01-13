import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Header from 'components/Header/Header.jsx';
import Currency from './Currency/Currency.jsx';
import Balance from 'components/Balance/Balance.jsx';
import { SideLeft, StyledNavLink } from './MainLayoutStyled.js';
import { StyledContainer } from 'components/Container/Container.styled.js';
import { FaDollarSign } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
// import Statistics from 'components/Statistics/Statistics.jsx';
// import Home from 'components/Home/Home.jsx';

const MainLayout = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Header />
      <main>
        <StyledContainer>
          <div className="flex-container">
            <SideLeft>
              <nav>
                <StyledNavLink to="/">
                  <div>
                    <IoMdHome size="15" />
                  </div>
                  {isDesktop && <span className="link-text">Home</span>}
                </StyledNavLink>
                <StyledNavLink to="/statistics">
                  <div>
                    <MdTimeline size="15" />
                  </div>
                  {isDesktop && <span className="link-text">Statistics</span>}
                </StyledNavLink>
                {isMobile && (
                  <StyledNavLink to="/currency">
                    <div>
                      <FaDollarSign size="15" />
                    </div>
                  </StyledNavLink>
                )}
              </nav>
              {isDesktop && <Balance />}
              {isMobile && location.pathname === '/' && <Balance />}
              {isDesktop && <Currency />}
            </SideLeft>
            <Outlet />

          </div>
        </StyledContainer>
      </main>
    </>
  );
};

export default MainLayout;
