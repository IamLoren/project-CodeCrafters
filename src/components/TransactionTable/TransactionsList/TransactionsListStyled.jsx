import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  background: transparent;
  border-collapse: collapse;
`;

export const TransactionThead = styled.thead`
  background: rgba(82, 59, 126, 0.6);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 12px;
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  th {
    border: 0;
    border: none;
    padding: 16px;
    color: #fff;   
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const TransactionTbody = styled.tbody`
  text-align: center;
  tr {
    background: transparent;
    height: 48px;
  }
  td {
    color: #b3b3b3;
    font-family: Poppins;
    font-size: 16px;
    /* font-size: 16px; */
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
//dissappear