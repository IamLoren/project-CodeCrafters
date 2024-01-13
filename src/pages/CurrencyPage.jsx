import React from 'react';
import Header from 'components/Header/Header';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import Currency from '../components/MainLayout/Currency/Currency.jsx';
import { StyledNavLink } from 'components/MainLayout/MainLayoutStyled';
import Container from 'components/Container/Container';
import { useMediaQuery } from 'react-responsive';
import { FaDollarSign } from 'react-icons/fa';
import MainLayout from 'components/MainLayout/MainLayout';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {isDesktop && <MainLayout />}
      {isMobile && (
        <>
          <Header />
          <main>
            <Container>
              <nav>
                <StyledNavLink to="/">
                  <div>
                    <IoMdHome size="15" />
                  </div>
                </StyledNavLink>
                <StyledNavLink to="/statistics">
                  <div>
                    <MdTimeline size="15" />
                  </div>
                </StyledNavLink>

                <StyledNavLink to="/currency">
                  <div>
                    <FaDollarSign size="15" />
                  </div>
                </StyledNavLink>
              </nav>

              <Currency />
            </Container>
          </main>
        </>
      )}
    </>
  );
};

export default CurrencyPage;
