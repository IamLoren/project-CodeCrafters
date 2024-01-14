import styled from 'styled-components';

export const TransactionCardContainer = styled.li`
  /* Apply styles to the li element here */
`;

export const TransactionContent = styled.div`
  p {
    /* Apply styles to the p element here */
    display: flex;
    justify-content: space-between;
    margin: 5px 0;

    span {
      font-weight: bold;
    }
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  gap: 4px; /* Adjust the gap as needed */
`;

export const StyledDeleteButt = styled.button`
position: static;
width:70px;
height: 30px;
right: 40px;
bottom: 40px;
margin-left: 10px;
color: var(--white);
background: var(--modal-button-gradient);
border-radius: 30%;
border:none;
outline: transparent;

  &:hover {
    background-color: #c82333; /* Adjust hover color if desired */
  }
`;