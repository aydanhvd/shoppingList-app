import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SinngleProduct } from './SingleProduct';

export const ProductList = ({ isEditMode, products, onTogglePress, onDelete, onEditPress, underEditProductID }) => {
	return (
		<FlatList
			contentContainerStyle={[ styles.list, { paddingTop: isEditMode ? 33 : 15 } ]}
			data={products}
			renderItem={({ item }) => (
				<SinngleProduct
					{...item}
					isUnderEdit={underEditProductID === item.id}
					isEditMode={isEditMode}
					onLongPress={() => onTogglePress({ productID: item.id })}
					onDelete={() => onDelete({ productID: item.id })}
					onEditPress={() => onEditPress(item)}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 16
	}
});
