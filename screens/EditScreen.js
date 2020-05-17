import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import { CustomHeader, SingleEditToDo, CustomText } from '../components';
import { COLORPALETTE } from '../styles/colors';
import save from '../assets/images/save.png';
import { addToDO, deleteToDO, editToDo } from '../redux/data';

const mapsStateToProps = (state) => ({
	lists: state.data.lists
});

export const EditScreen = connect(mapsStateToProps, { addToDO, deleteToDO , editToDo })(({ route, addToDO, deleteToDO, editToDo }) => {
	const { params: { listOfToDoes, heading, selected } } = route;
	const [ item, setitems ] = useState('');
	const [ countOfitem, setCountOfitem ] = useState(0);
	const [ itemunit, setitemUnit ] = useState('pkg');

	const { navigate } = useNavigation();

	const addBtnHandler = () => {
		if (item.trim() !== '') {
			if (countOfitem >= 0) {
				addToDO({
					selected,
					todoTitle: heading,
					itemName: item,
					itemCount: countOfitem,
					itemUnit: itemunit
				});
				navigate(selected === 'one time List' ? 'OneTimeHome' : 'RegularHome');
			} else alert(`Wait a minute You can't buy ${countOfitem} of anythinng! Can you even count?:D`);
		} else alert("You can't add a item to your list widthout a name, dummy :D");
	};

	const penPressHandler = (name, number, unit) => {
		setitems(name);
		setCountOfitem(number);
		setitemUnit(unit);
	};

	const deleteHandler = (todoName) => {
		deleteToDO({
			selected,
			todoTitle: heading,
			todoName: todoName
		});
		navigate(selected === 'one time List' ? 'OneTimeHome' : 'RegularHome');
	};

	const saveBtnHandler=()=>{
		editToDo({
			selected,
			todoTitle: heading,
			itemName:item,
			itemCount:countOfitem,
			itemUnit:itemunit,
		})
		navigate(selected === 'one time List' ? 'OneTimeHome' : 'RegularHome');
	}

	const countHandler = (type) => {
		switch (type) {
			case 'increse':
				return setCountOfitem((countOfitem) => countOfitem + 1);
			case 'decrease':
				return setCountOfitem((countOfitem) => countOfitem - 1);
		}
	};

	return (
		<View style={styles.container}>
			<CustomHeader 
				imageRight={save} text={heading} 
				imageRightHandler={saveBtnHandler} />
			<View style={styles.toDoesSection}>
				<View style={styles.section}>
					<View style={styles.nameContainner}>
						<CustomText style={styles.sectionOneText}>
							position name
						</CustomText>
						<TouchableOpacity>
							<TextInput
								value={item}
								onChangeText={(value) => setitems(value)}
								style={[ styles.field, { paddingHorizontal: 70 } ]}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.nameContainner}>
						<CustomText style={styles.sectionOneText}>count</CustomText>
						<View 
							style={[ styles.field, 
							{ width: 80,
							justifyContent: 'space-around' 
							} ]}>
							<TouchableOpacity onPress={() => countHandler('increse')}>
								<CustomText style={{ padding: 10 }}>+</CustomText>
							</TouchableOpacity>
							<CustomText>{countOfitem}</CustomText>
							<TouchableOpacity onPress={() => countHandler('decrease')}>
								<CustomText style={{ padding: 10 }}>-</CustomText>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={styles.section}>
					<View style={[ styles.unitBtn, { opacity: itemunit === 'pkg' ? 1 : 0.4 } ]}>
						<TouchableOpacity onPress={() => setitemUnit('pkg')}>
							<CustomText weight={itemunit === 'pkg' ? 'bold' : 'regular'}>pkg</CustomText>
						</TouchableOpacity>
					</View>

					<View style={[ styles.unitBtn, { opacity: itemunit === 'kg' ? 1 : 0.4 } ]}>
						<TouchableOpacity onPress={() => setitemUnit('kg')}>
							<CustomText weight={itemunit === 'kg' ? 'bold' : 'regular'}>kg</CustomText>
						</TouchableOpacity>
					</View>

					<View style={[ styles.unitBtn, { opacity: itemunit === 'litre' ? 1 : 0.4 } ]}>
						<TouchableOpacity onPress={() => setitemUnit('litre')}>
							<CustomText weight={itemunit === 'litre' ? 'bold' : 'regular'}>litre</CustomText>
						</TouchableOpacity>
					</View>

					<View style={[ styles.unitBtn, { opacity: itemunit === 'bott' ? 1 : 0.3 } ]}>
						<TouchableOpacity onPress={() => setitemUnit('bott')}>
							<CustomText weight={itemunit === 'bott' ? 'bold' : 'regular'}>bott</CustomText>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity onPress={addBtnHandler} style={styles.addBtn}>
					<CustomText weight="medi" style={styles.btnText}>
						ADD TO LIST
					</CustomText>
				</TouchableOpacity>
				<View style={styles.line} />
				<FlatList
					data={listOfToDoes}
					renderItem={(todo) => {
						return (
							<SingleEditToDo
								deleteHandler={deleteHandler}
								title={todo.item.name}
								count={todo.item.count}
								unit={todo.item.unit}
								penPressHandler={penPressHandler}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	sectionOneText: {
		fontSize: 12,
		color: COLORPALETTE.textColor
	},
	toDoesSection: {
		padding: 16,
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 30
	},
	nameContainner: {
		alignItems: 'center'
	},
	field: {
		backgroundColor: COLORPALETTE.btnGrey,
		flexDirection: 'row',
		width: 250,
		marginBottom: 14,
		marginTop: 4,
		borderRadius: 30,
		height: 34,
		fontSize: 14,
		alignItems: 'center',
		justifyContent: 'center'
	},
	unitBtn: {
		borderRadius: 45,
		backgroundColor: COLORPALETTE.btnGrey,
		width: '23%',
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 14
	},
	addBtn: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORPALETTE.main,
		borderRadius: 40,
		paddingVertical: 10,
		marginBottom: 21
	},
	btnText: {
		color: 'white',
		fontSize: 14
	},
	line: {
		width: '100%',
		height: 2,
		backgroundColor: '#E5E5E5',
		marginBottom: 33
	}
});
