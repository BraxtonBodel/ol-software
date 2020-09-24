import React from 'react';
import { SearchInput } from './styles';

const SearchUserInput = ({ value, onChangeText, placeholder,...props }) => {
  return (
  <SearchInput 
  {...props}
  placeholder={placeholder}
  value={value}
  onChangeText={onChangeText}
  />
  );
};

export default SearchUserInput;