import * as Font from 'expo-font';

import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratSemi from '../assets/fonts/Montserrat-SemiBold.ttf';

export function loadFonsts() {
	return Font.loadAsync({
		MontserratRegular,
		MontserratBold,
		MontserratMedium,
		MontserratSemi
	});
}

export const FontFamiles = Object.freeze({
	regular: 'MontserratRegular',
	medium: 'MontserratMedium',
	bold: 'MontserratBold',
	semi: 'MontserratSemi'
});
