import React from 'react';

import 'react-native-gesture-handler';
import {Button, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Stubs from '../stubs/Stubs';
import Lists from '../stubs/Lists';
import CreateListModal from '../stubs/CreateListModal';

import store from '../store/store';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={() => <View />}
      options={({navigation}) => ({
        headerRight: () => (
          <Button onPress={() => navigation.push('Stubs')} title="Stubs" />
        ),
      })}
    />
    <Stack.Screen name="Stubs" component={Stubs} />
    <Stack.Screen
      name="Lists"
      component={Lists}
      options={({navigation}) => ({
        title: 'My Lists',
        headerRight: () => (
          <Button
            onPress={() => navigation.push('CreateListModal')}
            title="Add"
          />
        ),
      })}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            mode="modal"
            screenOptions={({route, navigation}) => ({
              headerShown: false,
              gestureEnabled: true,
              cardOverlayEnabled: true,
              headerStatusBarHeight:
                navigation
                  .dangerouslyGetState()
                  .routes.findIndex(r => r.key === route.key) > 0
                  ? 0
                  : undefined,
              ...TransitionPresets.ModalPresentationIOS,
            })}>
            <Stack.Screen name="Home" component={RootStack} />
            <Stack.Screen
              name="CreateListModal"
              component={CreateListModal}
              options={{
                title: 'Create list',
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

export default App;
