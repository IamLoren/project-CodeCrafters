import React from 'react';
import { InputBox, StyledForm, StyledSection } from './RegisterForm.styled';
import {
  ErrMessage,
  StyledBtn,
  StyledInput,
  StyledNavLink,
} from 'components/LoginForm/LoginForm.styled';
import { IoMdLock } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa6';
import logo from '../../img/Main-logo.webp';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import PasswordStrengthBar from 'react-password-strength-bar';

const basicSchema = yup.object().shape({
  username: yup.string().required('Name is required!'),
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters!')
    .max(12)
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('The field is required!'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(basicSchema),
  });
  const dispatch = useDispatch();

  const submit = ({ username, email, password }) => {
    const user = {
      username,
      email,
      password,
    };
    dispatch(registerThunk(user))
      .unwrap()
      .then(res => toast.success(`Welcome ${res.user.username}!`))
      .catch(err => toast.error('Something went wrong!'));
    reset();
  };

  const handleInput = e => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <img src={logo} alt="logo" loading="lazy" />
        <InputBox>
          <div>
            <FaUser className="icon" />
            <StyledInput
              {...register('username')}
              type="text"
              name="username"
              placeholder="Name"
            />
            <ErrMessage>{errors.username?.message}</ErrMessage>
          </div>
          <div>
            <MdEmail className="icon" />
            <StyledInput
              {...register('email')}
              type="text"
              name="email"
              placeholder="E-mail"
            />
            <ErrMessage>{errors.email?.message}</ErrMessage>
          </div>
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrMessage>{errors.password?.message}</ErrMessage>
          </div>
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              {...register('confirmPassword')}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleInput}
              // value={''}
            />
            <PasswordStrengthBar
              // className="strengthBar"
              password="password"
              changeCallback={handleInput}
              minLength={6}
              minScore={2}
              scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
            />
            <ErrMessage>{errors.confirmPassword?.message}</ErrMessage>
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
