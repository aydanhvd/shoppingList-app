import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';

export const SingleToDo = ({
	title,
	count, 
	unit, 
	complited, 
	longPressHandler
}) => {
	return (
		<View>
			<TouchableOpacity
				onLongPress={()=>longPressHandler(title)}
				style={[ styles.container, { opacity: complited ? 0.4 : 1 } ]}
			>
				<CustomText style={styles.text}>{title}</CustomText>
				<CustomText style={styles.text}>
					x{count} {unit}
				</CustomText>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 2,
		borderColor: COLORPALETTE.maintYellow,
		borderRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginBottom: 14
	},
	text: {
		color: COLORPALETTE.Text,
		fontSize: 14,
		textTransform: 'uppercase'
	}
});
