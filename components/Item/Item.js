import React from 'react';
import { Text, Image } from 'react-native';
import { ItemContainer,ItemImage, ItemInfoContainer, TextName, TextPosition  } from './styles';
import { AntDesign } from '@expo/vector-icons';

const Item = ({name, value, papa, ...props }) => {
  return (
  <ItemContainer >
    <ItemImage  source={require('../../assets/will.png')} />
    <ItemInfoContainer>
      <TextName>{name}</TextName>
      <TextPosition>{value}</TextPosition>
    </ItemInfoContainer>
    <AntDesign name="arrowright" size={24} color="#FF4E4E" />
  </ItemContainer>
  );
};

export default Item;