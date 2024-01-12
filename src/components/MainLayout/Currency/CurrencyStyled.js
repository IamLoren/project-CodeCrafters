import styled from 'styled-components';
import BgCurrencyDiagram from '../../../img/currency-diagr.svg';

export const CurrencyTable = styled.table`
  width: 100%;
  background: transparent;
  border-collapse: collapse;
`;

export const CurrencyThead = styled.thead`
  background: var(--head-currency);
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  th {
    border: 0;
    border: none;
    padding: 16px;
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

export const LowerRate = styled.p`
  position: absolute;
  left: 51px;
  top: 40px;
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 400;
`;

export const HigherRate = styled.p`
  position: absolute;
  right: 102px;
  top: 5px;
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 400;
`;
