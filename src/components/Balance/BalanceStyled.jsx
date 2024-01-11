import styled from 'styled-components';

export const BalanceWrapper = styled.div`
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  width: 480px;
  padding: 8px 0 11px 56px;
  margin-bottom: 42px;
  
  @media only screen and (max-width: 768px) {
    max-width: 100%; 
  }
`;

export const BalanceTitle = styled.h2`
  color: rgba(255, 255, 255, 0.4);
  /* font-family: Poppins; */
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const BalanceCurrent = styled.p`
  color: #fbfbfb;
  /* font-family: Poppins; */
  font-size: 30px;
  font-weight: 700;
`;

export const MoneySymbol = styled.span`
  font-weight: 400;
`;
