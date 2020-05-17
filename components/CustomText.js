import React from 'react';
import { Text } from 'react-native';

const fontFamiles = {
	regular: 'MontserratRegular',
    medium: 'MontserratMedium',
    bold: 'MontserratBold',
};

export const CustomText = ({ children, weight, style, ...rest }) => {
	return (
		<Text {...rest} style={[ { fontFamily: fontFamiles[weight] || fontFamiles.regular }, { ...style } ]}>
			{children}
		</Text>
	);
};
