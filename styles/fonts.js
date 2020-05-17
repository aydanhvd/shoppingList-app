import * as Font from 'expo-font';

import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';

export function loadFonsts () {
	return Font.loadAsync({
		MontserratRegular,
		MontserratBold,
		MontserratMedium
	});
};
