import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';

import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

const App = () => {
  return (
  <>
    <View style={styles.container}>
      <Header />
    </View>
  </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default App;
