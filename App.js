import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Form from './src/components/Form';

class App extends Component {
  render() {
    return (
      <View style = {{height:'100%', width: '100%', backgroundColor: 'orange'}}>
        <Text>
          Props and State
        </Text>
        <Form/>
      </View>
    );
  }
};
export default App;
