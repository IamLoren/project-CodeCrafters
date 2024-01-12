import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Header from 'components/Header/Header.jsx';
import styled from 'styled-components';
import Balance from 'components/Balance/Balance.jsx';

import MediaQuery from 'react-responsive';
import Currency from 'components/MainLayout/Currency/Currency.jsx';
import TransactionsList from 'components/TransactionTable/TransactionsList/TransactionsList.jsx';
import {
  SideLeft,
  StyledNavLink,
} from 'components/MainLayout/MainLayoutStyled';

const HomePage = () => {
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
            <Balance />

            <MediaQuery minWidth={426}>
              <Currency />
            </MediaQuery>
          </SideLeft>
          <TransactionsList />
        </StyledContainer>
      </main>
    </>
  );
};

export default HomePage;

const StyledContainer = styled.div`
  display: flex;
  gap: 50px;
`;
