import React from 'react';
import { InputBox, StyledForm } from './RegisterForm.styled';
import {
  StyledBtn,
  StyledInput,
  StyledNavLink,
  StyledSection,
} from 'components/LoginForm/LoginForm.styled';
import { IoMdLock } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';

const RegisterForm = () => {
  return (
    <StyledSection>
      <StyledForm>
        <h1>Money Guard</h1>
        <InputBox>
          <div>
            <FaUser className="icon" />
            <StyledInput
              type="text"
              name="name"
              id="name_reg"
              placeholder="Name"
              required
            />
          </div>
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
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              type="text"
              name="c_password"
              id="c_password_reg"
              placeholder="Confirm password"
              required
            />
          </div>
        </InputBox>
        <StyledBtn type="submit">Register</StyledBtn>
        <>
          <StyledNavLink to="/login">Log in</StyledNavLink>
        </>
      </StyledForm>
    </StyledSection>
  );
};

export default RegisterForm;
