import styled from 'styled-components';


export const StyledDeleteButton = styled.button`
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