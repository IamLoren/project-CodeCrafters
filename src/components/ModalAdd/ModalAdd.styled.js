import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  div {
    width: 181px;
    color: var(--text-forms);
    text-align: center;
    font-family: 'Poppins Bold';
    font-size: 18px;
    background-color: transparent;
    /* border: none; */
    border-top:none;
    border-right:none;
    border-left: none;
    border-radius: 0%;
    input:placeholder-disabled{
        color: #fff;
    }
    input:focus-within {
        color: #fff;
    }
    input:hover {
        color: #fff;
    }
  }
`;
// export const StyledConfigProvider = styled.ConfigProvider`
 
//         border-bottom: 1px solid var(--modal-input-underline);

    

// `;
