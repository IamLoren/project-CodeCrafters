import styled from 'styled-components';
import registerbgRetina from '../../img/Register-bg-desc@retina.webp';
import registerbg from '../../img/Register-bg-desc.webp';
import formBg from '../../img/RegisterForm-bg@retina.webp';
// import mobileBg from '../../img/mobile-page-bg.png';
// import tabletBg from '../../img/tablet-register.png';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (min-width: 1280px) {
    background-image: url(${registerbg});
  }

  @media only screen and (min-width: 1280px) and (min-resolution: 192dpi) {
    background-image: url((${registerbgRetina}));
  }

  /* @media only screen and (min-width: 768px) {
    background-image: url();
  }

  @media only screen and (max-width: 767px) {
    background-image: url();
  } */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 533px;
  min-height: 624px;
  padding: 40px 62px;
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    background: var(--modal-background);
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 4px 60px 0px var(--modal-shadow);
    background-image: url(${formBg});
    /* backdrop-filter: blur(50px); */
  }

  @media only screen and (max-width: 767px) {
    padding: 23px 20px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  .icon {
    fill: var(--modal-input-underline);
    font-size: 24px;

    position: absolute;
    transform: translateY(70%);
    margin-left: 10px;
  }

  .strengthBar {
    outline: red;
    margin-top: 20px;
  }
`;
