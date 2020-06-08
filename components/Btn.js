import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';

export const Btn = ({ title, onPress, width, style, titleStyle={} }) => {
	return (
		<TouchableOpacity onPress={onPress} style={{ width }}>
			<View style={[ styles.btn, style ]}>
				<CustomText style={{ ...styles.title, ...titleStyle  }} weight="bold">
					{title}
				</CustomText>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	btn: {
		height: 42,
		backgroundColor: COLORPALETTE.main,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25
	},
	title: {
		fontSize: 14,
		color: COLORPALETTE.light,
		textTransform: 'uppercase'
	}
});
