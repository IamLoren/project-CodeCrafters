import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(<path-to-image>),
    lightgray -359px -0.362px / 208.13% 111.212% no-repeat;
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

  h1 {
    color: rgba(251, 251, 251, 1);
    font-size: 26.963px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin: 52px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const StyledInput = styled.input`
  width: 410px;
  height: 60px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const StyledBtn = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  outline: transparent;
  cursor: pointer;

  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;

  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
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

  color: rgba(98, 63, 139, 1);
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;

  border-radius: 20px;
  border: 1px solid #4a56e2;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;
