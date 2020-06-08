import { Dimensions } from 'react-native';
export const calculateWith = (persentage, paddingCount) => {
	return (Dimensions.get('window').width - 16 * paddingCount) / 100 * persentage;
};
