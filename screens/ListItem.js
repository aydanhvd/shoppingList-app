import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CustomHeader, SingleToDo } from '../components';
import pen from '../assets/images/pen.png';
import { COLORPALETTE } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

export const ListItem = ({ route }) => {
	const { 
		params: { 
		listOfToDoes,
		heading, 
		longPressHandler , 
		selected 
	} } = route;
	const {navigate} = useNavigation();
	return (
		<View style={styles.container}>
			<CustomHeader
				text={heading}
				isEdit={true}
				imageRight={pen}
				imageRightHandler={() => 
				navigate(
					'EditScreen', 
						{ listOfToDoes, heading , selected }
						)
				}
			/>
			<View style={styles.listContainer}>
				<FlatList
					data={listOfToDoes}
					renderItem={(todo) => {
						return (
							<SingleToDo
								longPressHandler={longPressHandler}
								complited={todo.item.isDone}
								todoTitle={heading}
								title={todo.item.name}
								count={todo.item.count}
								unit={todo.item.unit}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	listContainer: {
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 30,
		padding: 16
	}
});
