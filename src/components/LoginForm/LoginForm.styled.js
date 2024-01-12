import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import loginbg from '../../img/Login-bg-desc.webp';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-image: url(${loginbg}); */
  /* background-image: url('../../img/Login-bg-desc.webp'),
    lightgray -359px -0.362px / 208.13% 111.212% no-repeat; */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 533px;
  max-height: 570px;
  padding: 80px 62px;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(50px); */
`;

export const InputBox = styled.div`
  position: relative;
  margin: 52px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  .icon {
    fill: rgba(255, 255, 255, 0.4);
    font-size: 24px;

    position: absolute;
    transform: translateY(70%);
    margin-left: 10px;
  }
`;

export const StyledInput = styled.input`
  width: 410px;
  height: 60px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledNavLink = styled(NavLink)`
  width: 300px;
  max-height: 50px;
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
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const ErrMessage = styled.p`
  color: var(--text-forms);
  padding-top: 4px;
`;
