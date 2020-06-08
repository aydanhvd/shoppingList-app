import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORPALETTE } from '../styles/colors';
import { calculateWith } from '../untils/calculateWith';

export const RadioBtns = ({ options, value, onValueChange, contentContainerStyle, radioItemStyle }) => {
	return (
		<View style={[ styles.container, contentContainerStyle ]}>
			{options.map((option) => {
				const isActive = value === option;
				return (
					<TouchableOpacity
						onPress={() => onValueChange(option)}
						style={{
							width: calculateWith(100 / options.length, 2 + options.length - 1)
						}}
						key={option}
					>
						<View style={[ styles.btn, { opacity: isActive ? 1 : 0.5 }, radioItemStyle ]}>
							<CustomText weight={isActive ? 'bold' : 'regular'} style={styles.Btntext}>
								{option}
							</CustomText>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btn: {
		borderRadius: 25,
		backgroundColor: COLORPALETTE.light,
		height: 42,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
