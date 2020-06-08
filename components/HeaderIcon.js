import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ICONS } from '../styles/icons';

export const HeaderIcon = ({ iconName, onPress, side }) => {
	return (
		<TouchableOpacity
			style={[
				styles.btn,
				{
					marginRight: side === 'right' ? 16 : 0,
					marginLeft: side === 'left' ? 16 : 0
				}
			]}
			onPress={onPress}
		>
			<Image style={styles.icon} source={ICONS[iconName] || ''} />
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	btn: {
		width: 22,
		height: 22
	},
	icon: {
		width: '100%',
		height: '100%'
	}
});
