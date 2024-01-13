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
import MediaQuery from 'react-responsive';
// import Statistics from 'components/Statistics/Statistics.jsx';
// import Home from 'components/Home/Home.jsx';

const MainLayout = () => {
  const location = useLocation();
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
                  <MediaQuery minWidth={425}> Home </MediaQuery>
                </StyledNavLink>
                <StyledNavLink to="/statistics">
                  <div>
                    <MdTimeline size="15" />
                  </div>
                  <MediaQuery minWidth={425}> Statistics </MediaQuery>
                </StyledNavLink>
                <MediaQuery maxWidth={425}>
                  <StyledNavLink to="/currency">
                    <div>
                      <FaDollarSign size="15" />
                    </div>{' '}
                    <MediaQuery minWidth={425}> Currency </MediaQuery>
                  </StyledNavLink>
                </MediaQuery>
              </nav>
              <MediaQuery minWidth={426}>
                <Balance />
              </MediaQuery>
              <MediaQuery maxWidth={425}>
                {location.pathname === '/' && <Balance />}
              </MediaQuery>

              <MediaQuery minWidth={426}>
                <Currency />
              </MediaQuery>
            </SideLeft>

            {/* {location.pathname === '/' && <Home />}
            {location.pathname === '/statistics' && <Statistics />} */}
            <Outlet />

          </div>
        </StyledContainer>
      </main>
    </>
  );
};

export default MainLayout;
