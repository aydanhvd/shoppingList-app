import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Btn } from '../../components/Btn';
import { CustomText } from '../../components';
import { LISTS_TYPES } from '../../untils';

export const ListHeader = ({ listType, products, resetListHandler }) => {
	const onResetPress=()=>{
		Alert.alert(
			"Reset List ?",
			"Are you sure?",
			[
				{
					text:"No",
					style:"cancel"
				},
				{
					text:"Yes, reset",
					onPress: resetListHandler,
				}
			]
		)

	}
	return (
		<View style={styles.row}>
			<View>
				{listType === LISTS_TYPES.REGULAR && (
					<Btn title="reset" style={styles.resetBtn} titleStyle={{ fontSize: 10 }} onPress={onResetPress} />
				)}
			</View>
			<CustomText weight="medium" style={styles.progress}>
				{products.filter((product) => product.isDone).length} / {products.length}
			</CustomText>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16
	},
	resetBtn: {
		height: 19,
		paddingVertical: 3,
		paddingHorizontal: 17
	},
	progress: {
		fontSize: 14
	}
});
