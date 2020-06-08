import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from '../../components';
import { COLORPALETTE } from '../../styles/colors';

export const ToDoListCover = ({ heading, completedTodo, totalTodo, onPress, onLongPress, isComplete }) => {
	const progressWidth = Math.ceil(100 / totalTodo * completedTodo);
	const progressBarWidth = `${!!totalTodo ? progressWidth : 0}%`;

	return (
		<TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
			<View style={[ styles.container, { opacity: isComplete ? 0.5 : 1 } ]}>
				<View style={styles.header}>
					<CustomText weight="semi" style={styles.heading}>
						{heading}
					</CustomText>
					<CustomText weight="semi" style={styles.count}>
						{completedTodo}/{totalTodo}
					</CustomText>
				</View>
				<View style={styles.progressBar}>
					<View style={[ styles.progressIndicator, { width: progressBarWidth } ]} />
					<View style={styles.progressLeft} />
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: COLORPALETTE.secondaryColor,
		paddingHorizontal: 20,
		height: 90,
		paddingVertical: 15,
		marginBottom: 13,
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 13
	},
	heading: {
		fontSize: 17,
		textTransform: 'uppercase'
	},
	count: {
		fontSize: 13
	},
	progressBar: {
		width: '100%',
		flexDirection: 'row',
		height: 19,
		overflow: 'hidden'
	},
	progressLeft: {
		backgroundColor: '#EEEEEE',
		height: 19,
		width: '100%',
		borderRadius: 20
	},
	progressIndicator: {
		position: 'absolute',
		backgroundColor: COLORPALETTE.secondaryColor,
		height: 19,
		zIndex: 100,
		borderRadius: 20
	}
});
