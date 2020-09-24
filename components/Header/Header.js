

import React from 'react';

const HeaderComponent = ({}) => {
  return (
    <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Usuarios', style: { color: '#fff' } }}
    />
  );
};

export default HeaderComponent;