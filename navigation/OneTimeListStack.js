import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EditScreen, OneTimeListScreen, ListItem } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export class OneTimeListStack extends React.Component {
	render() {
		return (
			<Navigator headerMode="none">
				<Screen name="OneTimeHome" component={OneTimeListScreen} />
				<Screen name="ListItem" component={ListItem} />
				<Screen name="EditScreen" component={EditScreen} />
			</Navigator>
		);
	}
}
