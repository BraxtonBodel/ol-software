import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

const ButtonLong = ({
  width,
  title,
  invert,
  onPress,
  disabled,
  loading,
  ...props
}) => {
  return (
    
    <ButtonContainer
    
      width={width}
      onPress={onPress}
      invert={invert}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={invert ? '#FFFF' : '#07a8ca'} />
      ) : (
        <ButtonText invert={invert}>{title}</ButtonText>
      )}
    </ButtonContainer>
  );
};

export default ButtonLong;