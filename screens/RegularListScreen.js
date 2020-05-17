import React from 'react';
import { StyleSheet,View, FlatList} from 'react-native';
import { CustomHeader, ToDoList } from '../components';
import menu from '../assets/images/menu.png';
import { connect } from 'react-redux';
import { COLORPALETTE } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { toggleIsDone } from '../redux/data';

const mapsStateToProps = (state) => ({
	lists: state.data.lists
});

export const RegularListScreen = connect(mapsStateToProps, { toggleIsDone })
(({ lists, toggleIsDone }) => {
	const { toggleDrawer } = useNavigation();

	return (
		<View style={styles.container}>
			<CustomHeader
				imageRight={menu}
				text="Regular Lists"
				imageRightHandler={() => {
					toggleDrawer();
				}}
			/>
			<View style={styles.toDoesSection}>
				{lists.map((list) => {
					if (list.name === 'Regular List') {
						return (
							<FlatList
								key={list.id}
								data={list.toDoes}
								renderItem={(todo) => {
									let count = 0;
									for (let i = 0; i < todo.item.items.length; i++) {
										if (todo.item.items[i].isDone) {
											// console.log(todo.item.items[i])
											count = count + 1;
										}
									}
									return (
										<ToDoList
											toggleIsDone={toggleIsDone}
											selected="Regular List"
											heading={todo.item.title}
											totalTodo={todo.item.items.length}
											completedTodo={count}
											listOfToDoes={todo.item.items}
										/>
									);
								}}
							/>
						);
					}
				})}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	toDoesSection: {
		padding: 16,
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 30
	}
});
