import React from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { COLORPALETTE } from '../../styles/colors';
import { ToDoListCover } from './ToDoListCover';
import { TodoSectionContainer } from '../../commons';
import { connect } from 'react-redux';
import { selectListByType, deleteList } from '../../redux/list';
import { LISTS_TYPES } from '../../untils';

const mapStateToProps = (state, { route }) => ({
	listCovers:selectListByType(
		state, 
		route.params?.listType || LISTS_TYPES.ONE_TIME
	)
});

export const HomePage = connect(mapStateToProps, {deleteList})(
	({listCovers, navigation, route, deleteList }) => {
	
		const onListDeleteHandler = ( listID, listTitle ) => {
			Alert.alert(
				"Delete List",
				`Are you sure you want to delete "${listTitle}"`,
				[
					{
						text:"Cancel",
						style:"cancel",
					},
					{
						text:"Yes, delete",
						onPress:()=>{
							deleteList({
							listType: route.params?.listType || LISTS_TYPES.ONE_TIME,
							listID,
							})}
					}
				]
			)

			
		}

	return (
		<TodoSectionContainer>
			<FlatList
				contentContainerStyle = { styles.list }
				data = { listCovers }
				renderItem={({ item }) => 
				{
					return(
					<ToDoListCover
						heading = { item.name }
						completedTodo = { item.products.filter(product => product.isDone).length }
						totalTodo = { item.products.length }
						onLongPress = { ()=> onListDeleteHandler ( item.id, item.name )}
						onPress = { () => navigation.navigate('List', { 
							isEditMode: false ,
							listID: item.id,
							listType: route.params?.listType || LISTS_TYPES.ONE_TIME,
							title: item.name
						})}
					/>)
				}}
			/>
		</TodoSectionContainer>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	toDoesSection: {
		flex: 1,
		paddingTop: 16,
		backgroundColor: 'white',
		borderTopStartRadius: 23,
		borderTopEndRadius: 23
	},
	list: {
		paddingHorizontal: 16
	}
});
