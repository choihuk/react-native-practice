import React from 'react';
import { Button, Text, View } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, marginBottom: 10}}>Button Component</Text>
    
      <MyButton title='Button' onPress={() => alert('default')}>Children Props</MyButton>
      <Counter />
      <EventButton />
      <EventInput />
    </View>
  );
};

export default App;