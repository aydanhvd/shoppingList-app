import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegularListScreen, EditScreen, ListItem } from '../screens';
ListItem;

const { Navigator, Screen } = createStackNavigator();

export class RegularListStack extends React.Component {
	render() {
		return (
			<Navigator headerMode="none">
				<Screen name="RegularHome" component={RegularListScreen} />
				<Screen name="ListItem" component={ListItem} />
				<Screen name="EditScreen" component={EditScreen} />
			</Navigator>
		);
	}
}
