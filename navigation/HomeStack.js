import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomePage } from '../screens/HomeScreen';
import { ListScreen } from '../screens/ListScreen';
import {headerDefaultStyles} from '../styles/headerDefaultStyles '
import { getListHeadings } from '../untils/listType';
import { HeaderIcon } from '../components/HeaderIcon';


const { Navigator, Screen } = createStackNavigator();

export class HomeStack extends React.Component {
	render() {
		return (
			<Navigator screenOptions = { headerDefaultStyles }>
				<Screen name = "Home" component={ HomePage } options = {({ route }) => {
					return{ title: getListHeadings ( route.params?.listType )}
				}}/>
				<Screen name="List" component={ ListScreen } options={({ navigation, route })=>({
					title: route.params?.title,
					headerRight:()=>(
						<HeaderIcon 
							side="right"
							iconName={ route.params?.isEditMode ? "save" : "pen" }
							onPress={ () => navigation.setParams ({
								isEditMode: !route.params?.isEditMode,
							})}
						/>
					),
					headerLeft: () => {
						return <HeaderIcon
							side="left"
							iconName="arrow"
							onPress={() => {
							navigation.navigate("Home", { listType: route.params?.listType });
							}}
						/>
					},
					})}
				/>
			</Navigator>
		);
	}
}
