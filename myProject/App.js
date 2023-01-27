/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {

  return (
    <View style={styles.body}>
      <Text>Hello android</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default App;
