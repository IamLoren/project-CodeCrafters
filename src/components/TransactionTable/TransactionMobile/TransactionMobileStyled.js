import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const SquareContainer = styled.div`
  width: 200px; /* Adjust the width as needed */
  height: 200px; /* Equal width and height to make it square */
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative; /* Added position relative to allow absolute positioning */
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 10px; /* Adjust the left position as needed */
`;

export const EditButton = styled.button`
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
`;

export const HeaderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HeaderItem = styled.li`
  font-weight: bold;
  margin-bottom: 8px;
`;