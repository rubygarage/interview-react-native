import React from 'react';

import {Button, View} from 'react-native';

const Stubs = ({navigation}) => (
  <View>
    <Button title="Lists" onPress={() => navigation.push('Lists')} />
  </View>
);

export default Stubs;
