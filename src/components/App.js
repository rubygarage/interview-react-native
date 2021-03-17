import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import Form from './Form';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
        <StatusBar barStyle="light-content" />
        <Form />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
