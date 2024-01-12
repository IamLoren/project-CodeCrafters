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

const basicSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email!').required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
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
      .catch(err => toast.error(err));
    reset();
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
            <ErrMessage>{errors.name?.message}</ErrMessage>
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
              type="text"
              name="password"
              placeholder="Password"
            />
            <ErrMessage>{errors.password?.message}</ErrMessage>
          </div>
          <div>
            <IoMdLock className="icon" />
            <StyledInput
              {...register('confirmPassword')}
              type="text"
              name="confirmPassword"
              placeholder="Confirm password"
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
