import styled from 'styled-components';
import registerbg from '../../img/Register-bg-desc.webp';
import registerbgRetina from '../../img/Register-bg-desc@retina.webp';
import tabletBg from '../../img/Tablet/registr-bg-tab.webp';
import tabletBgRetina from '../../img/Tablet/registr-bg-tab@retina.webp';
import mobileBg from '../../img/Mobile/home-bg-mob.webp';
import mobileBgRetina from '../../img/Mobile/home-bg-mob@retina.webp';
import formBg from '../../img/RegisterForm-bg@retina.webp';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${mobileBg});

  @media only screen and(max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url((${mobileBgRetina}));
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${tabletBg});
  }

  @media only screen and (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url((${tabletBgRetina}));
  }

  @media only screen and (min-width: 1280px) {
    background-image: url(${registerbg});
  }

  @media only screen and (min-width: 1280px) and (min-resolution: 192dpi) {
    background-image: url((${registerbgRetina}));
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 533px;
  height: 624px;
  padding: 40px 62px;
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200%;
    box-shadow: 0px 4px 60px 0px var(--modal-shadow);
    background-image: url(${formBg});
    /* backdrop-filter: blur(50px); */
  }

  @media only screen and (max-width: 767px) {
    padding: 23px 20px;
  }
`;

export const InputBox = styled.div`
  @media only screen and (max-width: 767px) {
    width: 280px;
  }

  width: 410px;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 40px;
  margin-bottom: 14px;

  .icon {
    fill: var(--modal-input-underline);
    font-size: 24px;

    position: absolute;
    transform: translateY(30%);
    margin-left: 10px;
  }

  .strengthBar {
    margin-top: 8px;
    div {
      height: 4px !important;
      filter: drop-shadow(0px 1px 8px var(--modal-toggle-shadow));

      :first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      :last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      :nth-child(even) {
        width: 0 !important;
      }
    }
    p {
      display: none;
    }
  }
`;
