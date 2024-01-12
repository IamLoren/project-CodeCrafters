import React from 'react';
import Header from 'components/Header/Header';
import MediaQuery from 'react-responsive';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import styled from 'styled-components';
import Currency from 'components/MainLayout/Currency/Currency';
import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';

const CurrencyPage = () => {
  return (
    <>
      <Header />

      <MediaQuery maxWidth={425}>
        <main>
          <StyledContainerMob>
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

            <Currency />
          </StyledContainerMob>
        </main>
      </MediaQuery>
    </>
  );
};

export default CurrencyPage;

const StyledContainerMob = styled.div`
  display: flex;
  gap: 50px;
`;
