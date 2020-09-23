import React from 'react';
import { InputContainer } from './styles';

const Input = ({ value, onChangeText, placeholder, ...props }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...props}
    />
  );
};

export default Input;