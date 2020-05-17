import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';
import pen from '../assets/images/pen.png';
import cancel from '../assets/images/cancel.png'


export const SingleEditToDo = ({ title , count , unit , penPressHandler , deleteHandler}) => {

	return (
		<View>
			<TouchableOpacity style={styles.container}>
				<View style={styles.labelContainer}>
					<TouchableOpacity 
						onPress={()=>penPressHandler(title,count,unit)} 
						style={styles.iconContainer}
					>
						<Image style={styles.icon} source={pen} />
					</TouchableOpacity>
					<CustomText style={styles.text}>{title}</CustomText>
				</View>
				<View style={styles.labelContainer}>
					<CustomText style={styles.text}>x{count} {unit}</CustomText>
					<TouchableOpacity 
						onPress={()=>deleteHandler(title)} 
						style={[ styles.iconContainer, { backgroundColor: COLORPALETTE.main }]}
					>
						<Image style={styles.icon} source={cancel} />
					</TouchableOpacity>
				</View>
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
        borderRadius: 20,
		paddingVertical: 10,
		marginBottom: 14
	},
	labelContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	iconContainer: {
		backgroundColor: COLORPALETTE.maintYellow,
		width: 40,
		height: 42,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
	},
	icon: {
		width: 22,
		height: 22,
		padding: 10,
		marginHorizontal: 20
	},
	text: {
		marginHorizontal: 18,
		color: COLORPALETTE.textColor
	}
});
