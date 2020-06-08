import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';

import { CustomText } from './CustomText';
import { Field } from './Field';

export const CountField = ({ title, width, onChangeText, value, ...rest }) => {
	const changeHandler = (val) => {
		if (+val < 1 || isNaN(val)) return;
		onChangeText(val);
	};
	const increase = () => {
		changeHandler(+value + 1);
	};
	const decrease = () => {
		changeHandler(+value - 1);
	};

	return (
		<View style={{ width }}>
			<TouchableOpacity style={[ styles.btn, styles.decrease ]} onPress={decrease}>
				<CustomText weight="bold" style={styles.btnText}>
					-
				</CustomText>
			</TouchableOpacity>

			<Field
				title="title"
				value={value.toString()}
				keyboardType="number-pad"
				onChangeText={changeHandler}
				{...rest}
			/>

			<TouchableOpacity style={[ styles.btn, styles.increase ]} onPress={increase}>
				<CustomText weight="bold" style={styles.btnText}>
					+
				</CustomText>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		position: 'absolute',
		height: 42,
		width: 30,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 2
	},
	increase: {
		right: 0
	},
	decrease: {
		left: 0,
		zIndex: 2
	}
});
