import React from 'react';
import { Provider } from 'react-redux'
import { NativeBaseProvider, Box } from 'native-base';

import store from './src/redux/store'
import SplashScreen from './src/components/SplashScreen';

export default function App() {
  return (
    <Provider store={store()}>
      <NativeBaseProvider>
        <SplashScreen />
      </NativeBaseProvider>
    </Provider>
  );
};