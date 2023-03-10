import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  let asd = 'asdasd';
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, marginBottom: 10}}>Button Component</Text>
      <Button title='Button' onPress={() => {alert(asd)}}/>
    </View>
  );
};

export default App;