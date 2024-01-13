import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 10;
  background-color: var(--modal-backdrop);
`;

export const StyledLoaderImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoaderCoin = styled.div`
  animation: flip 0.5s ease-in-out infinite alternate-reverse both;

  @keyframes flip {
    0% {
      transform: rotateY(0) translateY(0);
      /* transform: rotate3d(0, 0, 0, 0deg); */
    }
    100% {
      transform: rotateY(-180deg) translateY(50px);
      /* transform: rotate3d(2, 5, 2, 360deg); */
    }
  }
  svg {
    fill: var(--main-expenses);
  }
`;

export const StyledLoaderHand = styled.div`
  margin: auto;
  svg {
    animation: colorChange 2s ease-in-out infinite alternate-reverse both;

    @keyframes colorChange {
      0% {
        fill: var(--icon-violet);
      }
      100% {
        fill: var(--leisure);
      }
    }
  }
`;
