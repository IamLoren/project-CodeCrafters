import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const SquareContainer = styled.div`
  width: 280px;
  height: 290px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
`;

export const HeaderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

export const HeaderItem = styled.li`
  margin-bottom: 8px;
`;

export const TransactionDetails = styled.div`
  p {
    margin: 0;
  }
`;

export const StyledDeleteButt = styled.button`
  position: static;
  width: 70px;
  height: 30px;
  margin-top: 10px;
  color: var(--white);
  background: var(--modal-button-gradient);
  border-radius: 30%;
  border: none;
  outline: transparent;

  &:hover {
    background-color: #c82333;
  }
`;
export const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TransactionItemContainer = styled.li`
  width: 280px;
  height: 290px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
`;
