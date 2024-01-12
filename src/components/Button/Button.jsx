import { AddTransactionButton } from 'components/TransactionsModal/TransactionsModal.styled';
import React from 'react';

const Button = ({ title }) => {
  return <AddTransactionButton type="submit">{title}</AddTransactionButton>;
};

export default Button;
