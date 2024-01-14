import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import loginBg from '../../img/Login-bg-desc.webp';
import loginBgRetina from '../../img/Login-bg-desc@retina.webp';
import tabletBg from '../../img/Tablet/login-bg-tab.webp';
import tabletBgRetina from '../../img/Tablet/login-bg-tab@retina.webp';
import mobileBg from '../../img/Mobile/home-bg-mob.webp';
import mobileBgRetina from '../../img/Mobile/home-bg-mob@retina.webp';
import formBgRetina from '../../img/LoginForm-bg-desc@retina.webp';

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
    background-image: url(${loginBg});
  }

  @media only screen and (min-width: 1280px) and (min-resolution: 192dpi) {
    background-image: url((${loginBgRetina}));
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 533px;
  height: 570px;
  padding: 80px 62px;
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 200%;
    background-image: url(${formBgRetina});
    box-shadow: 0px 4px 60px 0px var(--modal-shadow);
    /* backdrop-filter: blur(50px); */
  }

  @media only screen and (max-width: 767px) {
    padding: 97px 20px;
  }
`;

export const StyledLogo = styled.img`
  @media only screen and (max-width: 767px) {
    width: 128px;
    height: 54px;
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
  margin-top: 52px;
  margin-bottom: 36px;

  .icon {
    fill: var(--modal-input-underline);
    font-size: 24px;

    position: absolute;
    transform: translateY(30%);
    margin-left: 10px;
  }
`;

export const StyledInput = styled.input`
  @media only screen and (max-width: 767px) {
    width: 280px;
  }

  width: 410px;
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--modal-input-underline);
  color: var(--text-forms);
  padding: 8px 8px 8px 54px;

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
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

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

  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const ErrMessage = styled.p`
  color: var(--text-forms);
  padding-top: 2px;
  font-size: 14px;
  height: 16px;
`;
