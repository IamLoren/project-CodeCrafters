import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-top: 30px;
  margin-right: 10px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  height: 308px;
  background: transparent;
  border-collapse: collapse;
  margin-right: 20px; 
  @media (max-width: 1024px) {
    margin-right: 0;
    margin-top: 20px;
  }
`;

export const TransactionThead = styled.thead`
  background: rgba(82, 59, 126, 0.6);
  font-size: 12px;
  color: var(--expenses-color);
  font-family: 'Poppins Regular';
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 18px;
  display: table-header-group;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  height: 56px;
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
    height: 50px; /* Adjusted height for table rows */
    border-bottom: 0.5px solid #e0e0e0;
  }
  td {
    border: 0;
    border: none;
    padding: 12px;
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 1;
  }
`;

export const WrapperList = styled.div`
width: 704px;
padding: 10px;
height: 320px;
background: transparent;

@media screen and (min-width: 480px) {
  padding: 20px;
  width: 715px;
  height: 320px;
  backdrop-filter: blur(56px);
}

overflow-y: scroll;
overflow-x: hidden; 
scroll-behavior: smooth;

&::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 10px;
}
&.scrollable {
  overflow-y: scroll;
}
`;