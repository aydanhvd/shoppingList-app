import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { OneTimeListStack } from './OneTimeListStack';
import { RegularListStack } from './RegularListStack';
import { AddNewList, UserSettingsScreen } from '../screens';
import { CustomDrawer } from '../commons';

const { Screen, Navigator } = createDrawerNavigator();

export class RootDrawer extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
					<Screen name="OneTime" component={OneTimeListStack} />
					<Screen name="AddList" component={AddNewList} />
					<Screen name="Regular" component={RegularListStack} />
					<Screen name="UserSettings" component={UserSettingsScreen} />
				</Navigator>
			</NavigationContainer>
		);
	}
}
