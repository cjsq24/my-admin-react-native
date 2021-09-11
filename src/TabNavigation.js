import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFE from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'

import Country from './views/country/Country';
import State from './views/state/State';
import City from './views/city/City';
import Option from './views/option/Option';

const Tab = createBottomTabNavigator();

export default function Navigation() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
               if (route.name === 'Country') {
                  return <IconFA name='home' size={20} color={color} style={{ marginTop: 3 }} />;
               } else if (route.name === 'State') {
                  return <IconFE name='settings' size={20} color={color} style={{ marginTop: 3 }} />;
               } else if (route.name === 'City') {
                  return <IconFE name='bar-chart' size={20} color={color} style={{ marginTop: 3 }} />;
               } else if (route.name === 'Option') {
                  return <IconFE name='bar-chart' size={20} color={color} style={{ marginTop: 3 }} />;
               }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
         })}
         
      >
         <Tab.Screen name="Country" component={Country} options={{ headerShown: false, title: 'Countries' }} />
         <Tab.Screen name="State" component={State} options={{ headerShown: false, title: 'States' }} />
         <Tab.Screen name="City" component={City} options={{ headerShown: false, title: 'Cities' }} />
         <Tab.Screen name="Option" component={Option} options={{ headerShown: false, title: 'Option' }} />
      </Tab.Navigator>
   );
}