import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  background: var(--balance-bg);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  width: 480px;
  padding: 8px 0 11px 56px;
  margin-bottom: 42px;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 80px;
    border-radius: 8px;
    margin: 0;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 280px;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 32px;
    border-radius: 8px;
    padding: 12px 0 18px 32px;
  }
`;

export const BalanceTitle = styled.h2`
  color: var(--modal-input-underline);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const BalanceCurrent = styled.p`
  color: var(--white);
  font-family: 'Poppins SemiBold';
  font-size: 30px;
  font-weight: 700;
`;

export const MoneySymbol = styled.span`
  font-weight: 400;
`;
