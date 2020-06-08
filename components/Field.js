import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';
import { FontFamiles } from '../styles/fonts';

export const Field = ({ title, style, contentContainerStyle, ...rest }) => {
	return (
		<View style={contentContainerStyle}>
			<CustomText weight="semi" style={styles.title}>
				{title}
			</CustomText>
			<TextInput {...rest} style={[ styles.field, style ]} />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		opacity: 0.65,
		textAlign: 'center',
		fontSize: 12,
		color: COLORPALETTE.textColor
	},
	field: {
		height: 42,
		textAlign: 'center',
		paddingHorizontal: 15,
		fontSize: 14,
		backgroundColor: COLORPALETTE.light,
		borderRadius: 25,
		marginTop: 7,
		fontFamily: FontFamiles.bold
	}
});
