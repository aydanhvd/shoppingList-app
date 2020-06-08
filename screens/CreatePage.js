import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Field, RadioBtns, Btn } from '../components';
import { TodoSectionContainer } from '../commons';
import { LISTS_TYPES } from '../untils';
import { connect } from 'react-redux';
import { addList, genID } from '../redux/list';

const createFormInitialFieldsState = {
	listName: '',
	listType: LISTS_TYPES.ONE_TIME
};

export const CreatePage = connect(null, { addList })(({ addList, navigation }) => {
	const [ fields, setFields ] = useState({
		createFormInitialFieldsState
	});

	const fieldsChangeHandler = (name, value) =>
		setFields((fields) => ({
			...fields,
			[name]: value
      }));
      
	const submitHandler = () => {
		if (fields.listName.trim() === '') {
			alert('List name is requred');
			return;
		}
		const listID = genID();
      addList({ ...fields, listID });
		navigation.navigate('List',{
			isEditMode: true,
			listType: fields.listType,
			title: fields.listName,
			listID
      });
      setFields(createFormInitialFieldsState)
   };
	return (
		<TodoSectionContainer style={styles.wrapper}>
			<Field
				value={fields.listName}
				title="List name"
				onChangeText={(value) => fieldsChangeHandler('listName', value)}
			/>
			<RadioBtns
				options={Object.keys(LISTS_TYPES)}
				contentContainerStyle={styles.topSpacing}
				value={fields.listType}
				onValueChange={(value) => fieldsChangeHandler('listType', value)}
			/>
			<Btn title="Create List" style={styles.topSpacing} onPress={submitHandler} />
		</TodoSectionContainer>
	);
});

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 16
	},
	topSpacing: {
		marginTop: 14
	}
});
