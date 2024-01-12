import React from 'react';
import Header from 'components/Header/Header';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Balance from 'components/Balance/Balance';
import Statistics from 'components/Statistics/Statistics';
import {
  SideLeft,
  StyledNavLink,
} from 'components/MainLayout/MainLayoutStyled';
import Currency from 'components/MainLayout/Currency/Currency';

const StatisticsPage = () => {
  return (
    <>
      <Header />

      <main>
        <StyledContainer>
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

              <MediaQuery maxWidth={425}>
                <StyledNavLink to="/currency">Currency</StyledNavLink>
              </MediaQuery>
            </nav>

            <MediaQuery minWidth={426}>
              <Balance />
              <Currency />
            </MediaQuery>
          </SideLeft>
          <Statistics />
        </StyledContainer>
      </main>
    </>
  );
};
export default StatisticsPage;

const StyledContainer = styled.div`
  display: flex;
  gap: 50px;
`;
