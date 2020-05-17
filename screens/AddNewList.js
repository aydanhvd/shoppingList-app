import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { CustomText } from '../components/CustomText';
import { CustomHeader } from '../components';
import { COLORPALETTE } from '../styles/colors';
import { addList } from '../redux/data';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const mapsStateToProps = (store) => ({
	lists: store.data.lists
});

export const AddNewList = connect(mapsStateToProps, { addList })(({ lists, addList }) => {
	const [ isSelected, setIsSelected ] = useState('one time List');
	const [ listName, setListName ] = useState('');

	const { navigate }= useNavigation()

	const listSelectHandler = (text) => {
		setIsSelected(text);
	};

	const onCreateLIst = () => {
		if (listName.trim() !== '') {
			addList({			
				selected: isSelected,
				title:listName
			});
			navigate(isSelected==='one time List' ? 'OneTimeHome': 'RegularHome' )
		} else alert('add a list name');
	};


	return (
		<View style={styles.container}>
			<CustomHeader text="New List" imageRight="" imageLeft="" />
			<View style={styles.toDoesSection}>
				<CustomText weight="medium" style={styles.fieldPlaceHolder}>
					list name
				</CustomText>
				<TextInput onChangeText={(value) => setListName(value)} style={styles.fields} />
				<View style={styles.btnWrapper}>
					<View
						style={[
							styles.fields,
							{
								width: '48%',
								opacity: isSelected === 'Regular List' ? 0.4 : 1
							}
						]}
					>
						<TouchableOpacity onPress={() => listSelectHandler('one time List')}>
							<CustomText
								weight={isSelected === 'one time List' ? 'bold' : 'regular'}
								style={styles.listBtnText}
							>
								One Time
							</CustomText>
						</TouchableOpacity>
					</View>

					<View
						style={[
							styles.fields,
							{
								width: '48%',
								opacity: isSelected === 'one time List' ? 0.4 : 1
							}
						]}
					>
						<TouchableOpacity onPress={() => listSelectHandler('Regular List')}>
							<CustomText
								weight={isSelected === 'Regular List' ? 'bold' : 'regular'}
								style={styles.listBtnText}
							>
								Regular
							</CustomText>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					onPress={()=>onCreateLIst()}
					style={[ styles.fields, { backgroundColor: COLORPALETTE.main } ]}
				>
					<CustomText style={styles.btnText}>Create List</CustomText>
				</TouchableOpacity>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	transparent: {
		opacity: 0.2
	},
	toDoesSection: {
		padding: 16,
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 30
	},
	fieldPlaceHolder: {
		color: COLORPALETTE.textColor,
		alignSelf: 'center'
	},
	fields: {
		backgroundColor: COLORPALETTE.btnGrey,
		borderRadius: 45,
		padding: 8,
		textAlign: 'center',
		fontSize: 18,
		marginVertical: 8
	},
	btnWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btnText: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white',
		textTransform: 'uppercase'
	},
	listBtnText: {
		alignSelf: 'center',
		fontSize: 12
	},
	imageWrapper: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 130,
		left: 180
	},
	toDoDecoration: {
		position: 'absolute',
		width: 179,
		height: 130,
		bottom: 0
	}
});
