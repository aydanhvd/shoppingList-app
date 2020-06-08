import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Field, CountField, RadioBtns } from '../../components';
import { calculateWith } from '../../untils/calculateWith';
import { Btn } from '../../components/Btn';
import { COLORPALETTE } from '../../styles/colors';

const units = [ 'pkg', 'kg', 'litre', 'bott' ];
const fieldsInitialState = {
	name: '',
	count: 1,
	unit: units[0]
};

export const TodoListForm = ({ 
	addHandler, 
	sigleProductEditState , 
	finishSingleProductEdit, 
	updateProductHandler
}) => {
	const [ fields, setFields ] = useState(
		sigleProductEditState.product?.id 
		? sigleProductEditState.product
		: fieldsInitialState
	);


	useEffect(()=>{
		if(sigleProductEditState.status){
			setFields(sigleProductEditState.product)
		}
	},[sigleProductEditState])

	const fieldHandler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const validateForm=()=>{
		if (fields.name.trim() === '') {
			alert('Name is requred');
			return false;
		} else if (fields.count < 1) {
			alert('Count must be higher than 0');
			return false;
		}
		return true;
	}
	
	const onCancelPress=()=>{
			finishSingleProductEdit()
			setFields(fieldsInitialState);	
	}
	const onUpdateSubmit=()=>{
		if(validateForm()){
			updateProductHandler({ product: fields })
			onCancelPress();
		}
	}
	const onAddSubmit = () => {
		if(validateForm()){
			addHandler({ product: fields });
			setFields(fieldsInitialState);
		}
	};


	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Field
					value={fields.name}
					onChangeText={(value) => fieldHandler('name', value)}
					title="position name"
					contentContainerStyle={{width:calculateWith(75, 3)}}
				/>
				<CountField
					value={fields.count}
					title="count"
					width={calculateWith(25, 3)}
					onChangeText={(value) => fieldHandler('count', value)}
				/>
			</View>
			<RadioBtns
				value={fields.unit}
				onValueChange={(value) => fieldHandler('unit', value)}
				contentContainerStyle={styles.types}
				options={units}
			/>
			{sigleProductEditState.status ? (
				<View style={styles.row}>
					<Btn 
						title="Cancel" 
						width={calculateWith(50, 3)} 
						style={styles.cancel} 
						onPress={onCancelPress}
					/>
					<Btn 
						title="Update" 
						width={calculateWith(50, 3)} 
						onPress={onUpdateSubmit}
					/>
				</View>
			) : (
				<Btn title="add to list" onPress={onAddSubmit} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingBottom: 21,
		borderBottomWidth: 2,
		borderBottomColor: COLORPALETTE.light
		// marginBottom: 30
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	types: {
		marginVertical: 14
	},
	cancel: {
		opacity: 0.6
	}
});
