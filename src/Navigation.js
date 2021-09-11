import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from './TabNavigation'
import Login from './views/login/Login';
import Register from './views/register/Register';
import Location from './views/location/Location';

const Stack = createNativeStackNavigator();

export default function Navigation(props) {
   console.log('initialRoute', props.initialRoute)

   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={props.initialRoute}>
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Location" component={Location} options={{}} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}