import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 181px;
  text-align: center;
  font-family: 'Poppins Regular';
  align-items: center;
  border-bottom: 1px solid var(--modal-input-underline);

  input {
    color: var(--text-forms);
    font-size: 18px;
    font-weight: 400;

    text-align: center;
    background: none;
    background-color: transparent;
    border: none;
    outline: transparent;
    padding-bottom: 8px;
    &:hover {
      color: var(--white);
    }
  }
  svg {
    position: absolute;
    right: 1px;
    bottom: 8px;
    color: var(--icon-violet);
    width: 24px;
    height: 24px;
  }
`;

// export const StyledDatePicker = styled.div`
//   padding: 0;
//   margin: 0;
//   div {
//     width: 181px;
//     text-align: center;
//     background-color: transparent;
//     border-top: none;
//     border-right: none;
//     border-left: none;
//     border-radius: 0%;
//     padding-top: 0;
//     padding-bottom: 0;
//     border-color: var(--modal-input-underline);

//     .ant-picker-input > input {
//       color: var(--white);
//       font-size: 18px;
//       font-family: 'Poppins Regular';
//       padding-bottom: 5px;
//     }
//     .ant-picker-input > input::placeholder {
//       color: var(--text-forms);
//     }

//     span {
//       color: var(--icon-violet);
//     }
//     svg {
//       margin-bottom: 8px;
//       width: 24px;
//       height: 24px;
//     }
//     input:focus-within {
//       color: var(--modal-accent-white);
//     }
//     input:hover {
//       color: var(--modal-accent-white);
//     }
//   }
// `;
