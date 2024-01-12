import React from 'react';
import Header from 'components/Header/Header';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Currency from 'components/MainLayout/Currency/Currency';
import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';
import Container from 'components/Container/Container';

const CurrencyPage = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
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
        </Container>
      </main>
    </>
  );
};

export default CurrencyPage;
