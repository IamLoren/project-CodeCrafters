import React from 'react';
import { Switch } from 'antd';
import { changeToggleState } from '../../redux/transactions/transactionsSlice.js';
import { useDispatch } from 'react-redux';

const Toggle = () => {
  const dispatch = useDispatch();

  const onChange = checked => {
    dispatch(changeToggleState(checked));
  };

  return <Switch defaultChecked onChange={onChange} name="type" />;
};

export default Toggle;
