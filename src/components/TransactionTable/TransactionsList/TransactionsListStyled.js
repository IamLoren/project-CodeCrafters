import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-top: 40px;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  background: transparent;
  border-collapse: collapse;
  margin-right: 20px; 
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-top: 20px;
    order: 2; /* Set the order to 2 for tablet layout */
  }
`;

export const TransactionThead = styled.thead`
  background: rgba(82, 59, 126, 0.6);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 18px;
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  th {
    border: 0;
    border: none;
    padding: 18px; /* Adjusted padding for header cells */
    color: #fff;
    font-size: 14px; /* Adjusted font size for header cells */
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
  }
`;

export const TransactionTbody = styled.tbody`
  text-align: center;
  tr {
    background: transparent;
    height: 8px; /* Adjusted height for table rows */
    border-bottom: 0.5px solid #e0e0e0;
  }
  td {
    color: #b3b3b3;
    border: 0;
    border: none;
    font-family: "Poppins Regular";
    padding: 12px; /* Adjusted padding for data cells */
    font-size: 14px; /* Adjusted font size for data cells */
    font-style: normal;
    font-weight: 400;
    line-height: 1.2; /* Reduced line-height */
    opacity: 1;
  }
`;
