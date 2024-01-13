import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import loginBg from '../../img/Login-bg-desc.webp';
import loginBgRetina from '../../img/Login-bg-desc@retina.webp';
import formBg from '../../img/LoginForm-bg-desc@retina.webp';
import mobileBg from '../../img/mobile-page-bg.png';
import tabletBg from '../../img/tablet-login.png';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (min-width: 1280px) {
    background-image: url(${loginBg});
  }

  @media only screen and (min-width: 1280px) and (min-resolution: 192dpi) {
    background-image: url((${loginBgRetina}));
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${tabletBg});
  }

  @media only screen and (max-width: 767px) {
    background-image: url(${mobileBg});
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 533px;
  min-height: 570px;
  padding: 80px 62px;
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
    padding: 97px 20px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin: 52px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  max-height: 164px;

  .icon {
    fill: var(--modal-input-underline);
    font-size: 24px;

    position: absolute;
    transform: translateY(70%);
    margin-left: 10px;
  }
`;

export const StyledInput = styled.input`
  @media only screen and (max-width: 767px) {
    width: 280px;
  }

  width: 410px;
  height: 60px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--modal-input-underline);
  color: var(--text-forms);
  padding-left: 54px;

  &::placeholder {
    color: var(--text-forms);
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const StyledBtn = styled.button`
  width: 300px;
  min-height: 50px;
  border: none;
  outline: transparent;

  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.11em;

  border-radius: 20px;
  background: var(--modal-button-gradient);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);

  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 300px;
  min-height: 50px;
  padding: 13px 0;
  outline: transparent;
  cursor: pointer;
  margin-top: 20px;

  color: var(--text-button);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.11em;

  border-radius: 20px;
  border: 1px solid var(--household);
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);

  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const ErrMessage = styled.p`
  color: var(--text-forms);
  padding-top: 2px;
`;
