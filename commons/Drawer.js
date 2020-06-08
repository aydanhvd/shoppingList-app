import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { useSelector } from 'react-redux';

import { CustomText } from '../components';
import { Btn } from '../components';
import { ICONS } from '../styles/icons';
import { COLORPALETTE } from '../styles/colors';
import { LISTS_TYPES } from '../untils';
import { selectUserInfo } from '../redux/settings';

export const Drawer = (props) => {
	const { navigation } = props;
	const { userName, userAvatarUrl } = useSelector(selectUserInfo);
	const navigationButtons = [
		{
			title: 'Add New List',
			toScreem: 'CreateStack',
			style: styles.createBtnSpacing
		},
		{
			title: 'One Time List',
			toScreem: 'Home',
			params: { listType: LISTS_TYPES.ONE_TIME }
		},
		{
			title: 'Regular List',
			toScreem: 'Home',
			params: { listType: LISTS_TYPES.REGULAR }
		},
		{
			title: 'User Settings',
			toScreem: 'SettingsStack'
		}
	];
	return (
		<View style={styles.wrapper}>
			<View style={styles.userInfo}>
				<Image style={styles.userAvatar} source={userAvatarUrl ? { uri: userAvatarUrl } : ICONS.userAvatar} />
				<CustomText style={styles.userName}>{userName}</CustomText>
			</View>
			<View style={styles.navWrapper}>
				{navigationButtons.map(({ title, toScreem, params, style = {} }) => (
					<Btn
						key={title}
						style={[ styles.navBtn, style ]}
						titleStyle={styles.navBtnTitle}
						title={title}
						onPress={() => {
							navigation.navigate(toScreem, params);
						}}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	userInfo: {
		paddingTop: 35,
		paddingHorizontal: 16,
		paddingBottom: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	userAvatar: {
		width: 50,
		height: 50,
		borderWidth: 3,
		borderColor: COLORPALETTE.main,
		borderRadius: 25
	},
	userName: {
		fontSize: 22,
		opacity: 0.65,
		marginLeft: 22
	},
	navWrapper: {
		flex: 1,
		backgroundColor: COLORPALETTE.main,
		padding: 16,
		borderTopEndRadius: 20,
		borderTopStartRadius: 20
	},
	navBtn: {
		height: 34,
		backgroundColor: 'white',
		marginBottom: 10
	},
	navBtnTitle: {
		color: COLORPALETTE.main,
		textTransform: 'uppercase'
	},
	createBtnSpacing: {
		marginBottom: 32
	}
});
