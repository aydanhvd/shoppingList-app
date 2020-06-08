import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import {headerDefaultStyles} from '../styles/headerDefaultStyles '
import { CreatePage } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const CreateStack=()=>(
   <Navigator screenOptions={headerDefaultStyles}>
      <Screen name="Create" component={CreatePage} options={{title:"New List"}}/>
   </Navigator>
)