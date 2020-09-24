import React, { useState, useContext } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import  SearchUserInput  from '../../components/SearchInput';
import  Item  from '../../components/Item';
import {SearchContainer , ScrollContainer} from './styles'

const UsersListContainer = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return(
      <>
      <SearchContainer>
        <SearchUserInput 
          placeholder="Buscar usuario"
          onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
          value={searchTerm}
        />
      </SearchContainer>
      <View>
        <ScrollContainer>
          <FlatList
          data={[
            {name: 'Sandra quiñones', cargo: 'UX Designer',  foto: '../../assets/purita.png'},
            {name: 'Sebastian Quiñones', cargo: 'CEO', foto: '../../assets/will.png'},
            {name: 'Elizabeth Cardenas', cargo: 'CTO', foto: '../../assets/elizabeth.png'},
            {name: 'Mateo Ortiz', cargo: 'Multimedia engineer', foto: '../../assets/nora.png'},
            {name: 'Luisa Gonzales', cargo: 'System engineer', foto: '../../assets/dross.png'},
            {name: 'Alejandra Mendez', cargo: 'Visual Designer', foto: '../../assets/amelie.png'},
          ]}
          renderItem={({item}) => <Item name={item.name}  value={item.cargo} papa={item.foto} />}
          />
        </ScrollContainer>
      </View>
      </>
    );
};

export default UsersListContainer;

