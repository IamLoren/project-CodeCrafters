import styled from 'styled-components';
import logOutBg from '../../img/LogOut-modal-bg.webp';
import logOutBgMobile from '../../img/LogOut-modal-bg-mobile.webp';

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  z-index: 100;
  @media (max-width: 767px) {
    backdrop-filter: none;
    align-items: flex-start;
    margin-top: 72px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  background: var(--modal-background);
  background-image: url(${logOutBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: inherit;
  overflow: hidden;
  max-width: 1000px;
  border-radius: 8px;
  width: 533px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 767px) {
    height: calc(100vh - 72px);
    justify-content: center;
    background-image: url(${logOutBgMobile});
    background-size: cover;
  }

  img {
    width: 182px;
    height: 75px;
    margin-top: 52px;
    margin-bottom: 0;
    @media (max-width: 767px) {
      display: none;
    }
  }
  p {
    color: #fff;
    font-family: 'Poppins Regular';
    font-size: 18px;
    line-height: normal;
    margin: 52px auto;
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
`;
export const ModalButton = styled.button`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background: var(--button-gradient);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: var(--button-gradient-hover);
  }
`;

export const ModalButtonClose = styled(ModalButton)`
  background: #fcfcfc;
  color: var(--text-button);
  margin-bottom: 60px;
  margin-top: 20px;
  &:hover {
    transform: scale(1.1);
    background: var(--expenses-color);
    color: white;
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
