import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { CreateStack } from './CreateStack';
import { HomeStack } from './HomeStack';
import { Drawer } from '../commons';
import { SettingsStack } from './SettingsStack';

const { Screen, Navigator } = createDrawerNavigator();

export class RootDrawer extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Navigator drawerContent={({...props}) => <Drawer {...props} />} drawerStyle={{ width: 290 }}>
					<Screen name="HomeStack" component={HomeStack} />
					<Screen name="CreateStack" component={CreateStack} />
					<Screen name="SettingsStack" component={SettingsStack} />
				</Navigator>
			</NavigationContainer>
		);
	}
}
