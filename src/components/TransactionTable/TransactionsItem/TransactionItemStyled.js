import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background: var(--modal-button-gradient);
  border-radius: 20px;
  border: none;
  outline: transparent;

  &:hover {
    background-color: #c82333; /* Adjust hover color if desired */
  }
`;
