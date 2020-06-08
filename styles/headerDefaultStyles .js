import { COLORPALETTE } from "./colors";

export const headerDefaultStyles =Object.freeze ({
	headerStyle: {
		backgroundColor: COLORPALETTE.main,
		elevation: 0,
		shadowOpacity: 0,
		height: 80 // it is smaller on ios so i changed it
	},
	headerTintColor: COLORPALETTE.light,
	headerTitleAlign: 'center',
	headerTitleStyle: {
		fontFamily: 'MontserratMedium',
		fontSize: 16
	}
});
