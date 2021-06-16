import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text>Henlo, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
});

export default HelloWorld;
