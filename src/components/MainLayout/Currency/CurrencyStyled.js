import styled from 'styled-components';
import BgCurrencyDiagram from '../../../img/currency-diagr.svg';

export const StyledCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrencyTable = styled.table`
  width: 100%;
  background: transparent;
  border-collapse: collapse;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

export const CurrencyThead = styled.thead`
  background: var(--head-currency);
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1279px) {
    background: #604d9e;
  }

  @media (min-width: 320px) and (max-width: 768px) {
  }
  th {
    border: 0;
    border: none;
    padding: 16px;
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-weight: 600;
  }
`;

export const CurrencyTbody = styled.tbody`
  text-align: center;
  tr {
    background: transparent;
    height: 48px;
  }
  td {
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-weight: 400;
  }
`;

export const StyledGraphBox = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-image: url('${BgCurrencyDiagram}');
  background-size: 100% 100%;
  background-position: right bottom -20px;
  background-repeat: no-repeat;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    height: 134px;
    position: absolute;
    top: 114px;
    left: 184px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
  }
`;

export const LowerRate = styled.p`
  position: absolute;
  left: 51px;
  top: 40px;
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 320px) and (max-width: 1279px) {
    display: none;
  }
`;

export const HigherRate = styled.p`
  position: absolute;
  right: 102px;
  top: 5px;
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 400;
  @media (min-width: 320px) and (max-width: 1279px) {
    display: none;
  }
`;
