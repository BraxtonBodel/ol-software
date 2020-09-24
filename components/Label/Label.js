import React from 'react';
import { LabelContainer } from './styles';

const Label = ({ value,...props }) => {
  return (
  <LabelContainer {...props}>{value}</LabelContainer>
  );
};

export default Label;