import React from 'react';
import {
  ErrMessage,
  InputBox,
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledNavLink,
  StyledSection,
} from './LoginForm.styled';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import logo from '../../img/Main-logo.webp';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('Email is required'),
  password: yup.string().min(6).max(12).required('Password is required'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(basicSchema),
  });
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => toast.success(`Welcome ${res.user.username}!`))
      .catch(err => toast.error(err));
    reset();
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <img src={logo} alt="logo" loading="lazy" />
        <InputBox>
          <div>
            <MdEmail className="icon" />
            <StyledInput
              {...register('email')}
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <ErrMessage>{errors.email?.message}</ErrMessage>
          </div>
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              {...register('password')}
              type="text"
              name="password"
              id="password_reg"
              placeholder="Password"
            />
            <ErrMessage>{errors.password?.message}</ErrMessage>
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
