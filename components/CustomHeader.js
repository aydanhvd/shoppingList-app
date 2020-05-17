import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';

export const CustomHeader = ({ imageRight, imageLeft, text, isEdit = false , imageRightHandler}) => {
	const {toggleDrawer, goBack , navigate} = useNavigation();
	return (
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={()=>goBack()}>
				<Image source={imageLeft} style={styles.icon} />
			</TouchableOpacity>

			<CustomText weight="medium" style={styles.headerText}>
				{text}
			</CustomText>

			<TouchableOpacity
				onPress={imageRightHandler}
			>
				<Image source={imageRight} style={styles.icon} />
			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 85,
		width: '100%',
		alignItems: 'center',
		backgroundColor: COLORPALETTE.main
	},
	icon: {
		width: 22,
		height: 22,
		padding: 10,
		marginHorizontal: 20
	},
	headerText: {
		color: 'white',
		fontSize: 20,
		alignSelf:'center',
	},
});
