import React, { useState } from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
const { v4 } = require('uuid');
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [ items, setItems ] = useState([
    {id: v4(), text: 'Milk'},
    {id: v4(), text: 'Eggs'},
    {id: v4(), text: 'Bread'},
    {id: v4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = item => {
    if(!item){
      Alert.alert('Error', 'Please enter an item', [{ text: "Ok" }]);
    }else{
      setItems(prevItems => {
        return [{ id: v4(), text: item }, ...prevItems];
      });
    }
  };

  return (
    <View style={ styles.container }>
      <Header />
      <AddItem addItem={ addItem }/>
      <FlatList data={items} 
      renderItem={({ item }) => (<ListItem item={ item } deleteItem={ deleteItem } />)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default App;
