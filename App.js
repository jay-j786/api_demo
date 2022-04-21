import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Display from './src/components/Display';
import {store} from './src/toolkit/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>App</Text>
        <Display />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
