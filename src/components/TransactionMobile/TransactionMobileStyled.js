import styled from 'styled-components';

export const SquareContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const TransactionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const TransactionItem = styled.li`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
`;

export const TransactionProperty = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;

  span {
    font-weight: bold;
  }
`;

export const TransactionButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #c0392b;
  }
`;
export const MobileText = styled.strong`
  font-family: 'Poppins Bold';
  font-weight: 700;
  color: #fff;
`;

export const MobileImage = styled.img`
  width: 80px;
  height: 100px;
`;
