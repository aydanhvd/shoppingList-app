import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORPALETTE } from '../styles/colors';

export const TodoSectionContainer = ({ children, style }) => (
	<View style={styles.container}>
		<View style={[styles.toDoesSection,style]} >{children}</View>
	</View>
);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main,
	},
	toDoesSection: {
		flex: 1,
		paddingTop: 16,
		backgroundColor: 'white',
		borderTopStartRadius: 23,
		borderTopEndRadius: 23
	}
});
