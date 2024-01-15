import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  position: static;
  width: 69px;
  height: 29px;
  font-family: 'Poppins Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  right: 40px;
  bottom: 40px;
  margin-left: -30px;
  color: var(--white);
  background: var(--modal-button-gradient);
  border-radius: 20px;
  border: none;
  outline: transparent;

  &:hover {
    background-color: #c82333;
  }
`;

// export const PencilButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: var(--text-forms);
//   margin-right: 5px;
// `;
