import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  background: var(--balance-bg);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  width: 480px;
  padding: 8px 0 11px 56px;
  margin-bottom: 42px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
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
