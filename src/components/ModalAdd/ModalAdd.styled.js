import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  div {
    width: 181px;
    color: var(--text-forms);
    text-align: center;
    font-family: 'Poppins Bold';
    font-size: 18px;
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0%;
    border-color: var(--modal-input-underline);
    /* input:placeholder-disabled{
        color: #fff;
    } */
    input:focus-within {
      color: #fff;
    }
    input:hover {
      color: #fff;
    }
  }
`;
