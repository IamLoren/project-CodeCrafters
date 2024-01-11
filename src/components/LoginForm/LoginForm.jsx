import React from 'react';
import {
  InputBox,
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledNavLink,
  StyledSection,
} from './LoginForm.styled';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';

const LoginForm = () => {
  return (
    <StyledSection>
      <StyledForm>
        <h1>Money Guard</h1>
        <InputBox>
          <div>
            <MdEmail className="icon" />
            <StyledInput
              type="text"
              name="email"
              id="email_reg"
              placeholder="E-mail"
              required
            />
          </div>
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              type="text"
              name="password"
              id="password_reg"
              placeholder="Password"
              required
            />
          </div>
        </InputBox>
        <StyledBtn type="submit">Log in</StyledBtn>
        <>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </>
      </StyledForm>
    </StyledSection>
  );
};

export default LoginForm;
