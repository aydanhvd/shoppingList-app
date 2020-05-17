import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { toggleIsDone } from '../redux/data';


const mapsStateToProps = (state) => ({
	lists: state.data.lists
});

export const ToDoList = connect(mapsStateToProps,{ toggleIsDone })(({ 
	heading, 
	completedTodo, 
	totalTodo, 
	listOfToDoes, 
	selected , 
	toggleIsDone , 
}) => {
	const { navigate } = useNavigation();
	const yellowWidth = Math.ceil(100 / totalTodo * completedTodo);

    const longPressHandler=(todoName)=>{
		toggleIsDone({
			selected,
			todoTitle: heading,
			todoName: todoName,
		})
		navigate(selected === 'one time List' ? 'OneTimeHome' : 'RegularHome')
	};


	return (
		<TouchableOpacity
			onPress={() => navigate('ListItem', {  listOfToDoes, heading, selected , longPressHandler})}
		>
			<View style={[ styles.container, { opacity: completedTodo === totalTodo ? 0.3 : 1 } ]}>
				<View style={styles.header}>
					<CustomText weight="medium" style={styles.heading}>
						{heading}
					</CustomText>
					<CustomText weight="medium" style={styles.count}>
						{completedTodo}/{totalTodo}
					</CustomText>
				</View>
				<View style={styles.progressBar}>
					<View style={[ styles.progressYellow, { width: `${yellowWidth}%` } ]} />
					<View style={styles.progressGrey} />
				</View>
			</View>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: COLORPALETTE.maintYellow,
		paddingHorizontal: 20,
		height: 90,
		paddingVertical: 15,

		marginBottom: 15,
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 13
	},
	heading: {
		fontSize: 17,
		textTransform: 'uppercase'
	},
	progressBar: {
		width: '100%',
		flexDirection: 'row',
		height: 19,
		overflow: 'hidden'
	},
	progressGrey: {
		backgroundColor: '#EEEEEE',
		height: 19,
		width: '100%',
		borderRadius: 20
	},
	progressYellow: {
		position: 'absolute',
		backgroundColor: COLORPALETTE.maintYellow,
		height: 19,
		zIndex: 100,
		borderRadius: 20
	}
});
