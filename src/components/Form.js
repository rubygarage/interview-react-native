import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const FormComponent = () => (
  <View>
    <TextInput style={styles.textInput} />
    <Button title="Submit" />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
});

export default FormComponent;
