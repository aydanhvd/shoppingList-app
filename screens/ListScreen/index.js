import React, {useState , useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { TodoSectionContainer } from '../../commons';
import { ProductList } from './ProductList';
import { TodoListForm } from './TodoListForm';
import { 
	selectSingleListByID, 
	toggleIsDone, 
	deleteProduct, 
	addProduct, 
	resetList, 
	updateProduct
} from '../../redux/list';
import { ListHeader } from './ListHeader';

const sigleProductEditInitialState={
	status: false,
	product:{}
}

const mapStateToProps=(state,{route})=>({
	list:selectSingleListByID(
		state, 
		route.params?.listType, 
		route.params?.listID
	)
})

export const ListScreen =connect(mapStateToProps, { 
	toggleIsDone , 
	deleteProduct , 
	addProduct ,
	resetList ,
	updateProduct
})(
	({ 
		route, 
		list , 
		toggleIsDone , 
		deleteProduct , 
		addProduct,
		resetList,
		updateProduct
	}) => {

	const [sigleProductEditState, setSingleProductEditState]=useState({
		sigleProductEditInitialState
	})
	const startSingleProductEdit=(product)=>{
			setSingleProductEditState({
				status:true,
				product
			})
	}
	const { isEditMode, listID , listType} = route.params;

	const createDispachHandler=(methodtoDispch)=>(payload = {})=>
	methodtoDispch({
		listType,
		listID,
		...payload,
	})

	const toggleHandler = createDispachHandler(toggleIsDone)
	const deletHandler = createDispachHandler(deleteProduct)
	const addHandler = createDispachHandler(addProduct)
	const resetListHandler = createDispachHandler(resetList)
	const updateProductHandler = createDispachHandler(updateProduct)

	const finishSingleProductEdit=()=>setSingleProductEditState(sigleProductEditInitialState)


	return (
		<TodoSectionContainer>
			{isEditMode && (
				<TodoListForm 
					sigleProductEditState = {sigleProductEditState}
					addHandler = {addHandler}
					updateProductHandler = {updateProductHandler}
					finishSingleProductEdit = {finishSingleProductEdit}
					/>
			)}
			{!isEditMode && (
				<ListHeader 
					resetListHandler = { resetListHandler } 
					listType = {listType} 
					products = {list.products}
				/>
			)}
			<ProductList 
				isEditMode={isEditMode} 
				products={list.products}  
				onTogglePress={toggleHandler} 
				onDelete={deletHandler}
				onEditPress={startSingleProductEdit}
				underEditProductID={sigleProductEditState.product?.id}
			/>
		</TodoSectionContainer>
	);
});
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16
	},
	resetBtn: {
		height: 19,
		paddingVertical: 3,
		paddingHorizontal: 17
	},
	progress: {
		fontSize: 14
	}
});
