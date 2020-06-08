import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {headerDefaultStyles} from '../styles/headerDefaultStyles '
import { SettingScreen } from '../screens/SettingScreens';


const { Navigator, Screen } = createStackNavigator();

export const SettingsStack=()=>(
   <Navigator screenOptions={headerDefaultStyles}>
      <Screen name="Settings" component={SettingScreen} options={{title:"User Settings"}}/>
   </Navigator>
)