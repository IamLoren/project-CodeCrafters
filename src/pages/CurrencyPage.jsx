import React from 'react';
import Header from 'components/Header/Header';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Currency from 'components/MainLayout/Currency/Currency';
import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';
import Container from 'components/Container/Container';
import MediaQuery from 'react-responsive';
import { FaDollarSign } from 'react-icons/fa';
import MainLayout from 'components/MainLayout/MainLayout';

const CurrencyPage = () => {
  return (
    <>
      <MediaQuery minWidth={426}>
        <MainLayout />
      </MediaQuery>
      <MediaQuery maxWidth={425}>
        <Header />
        <main>
          <Container>
            <nav>
              <StyledNavLink to="/">
                <div>
                  <IoMdHome size="15" />
                </div>
                <MediaQuery minWidth={426}>Home</MediaQuery>
              </StyledNavLink>
              <StyledNavLink to="/statistics">
                <div>
                  <MdTimeline size="15" />
                </div>
                <MediaQuery minWidth={426}>Statistics</MediaQuery>
              </StyledNavLink>
              <MediaQuery maxWidth={425}>
                <StyledNavLink to="/currency">
                  <div>
                    <FaDollarSign size="15" />
                  </div>
                </StyledNavLink>
              </MediaQuery>
            </nav>

            <Currency />
          </Container>
        </main>
      </MediaQuery>
    </>
  );
};

export default CurrencyPage;
