import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  padding: 0;
  margin: 0;
  div {
    width: 181px;
    text-align: center;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0%;
    padding-top: 0;
    padding-bottom: 0;
    border-color: var(--modal-input-underline);

    /* .ant-picker-input > input::placeholder[disabled] {
  color: white;
} */
    .ant-picker-input > input {
      color: var(--white);
      font-size: 18px;
      font-family: 'Poppins Regular';
    }
    .ant-picker-input > input::placeholder {
      color: var(--text-forms);
    }

    span {
      color: var(--icon-violet);
    }
    input:focus-within {
      color: var(--modal-accent-white);
    }
    input:hover {
      color: var(--modal-accent-white);
    }
  }
`;
