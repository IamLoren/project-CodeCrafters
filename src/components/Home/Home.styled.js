import styled from 'styled-components';

export const StyledHomeModalOpenBtn = styled.button`
  position: fixed;
  width: 44px;
  height: 44px;
  right: 40px;
  bottom: 40px;
  color: var(--white);
  background: var(--modal-button-gradient);
  border-radius: 50%;
  border: none;
  outline: transparent;
`;
 export const HideOnMobile = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HideOnDesktop = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;