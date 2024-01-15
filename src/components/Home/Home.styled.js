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
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(
      to right,
      #7000ff 0%,
      #9e40ba 31%,
      #ffc727 100%
    );
    /* display: block; */
    transition: 1s;
    background-size: 200% auto;
    background-position: right center;
  }
`;
