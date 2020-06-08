import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Field, Btn } from '../components';
import { TodoSectionContainer } from '../commons';
import { connect } from 'react-redux';
import { setUserInfo, selectUserInfo } from '../redux/settings';

const mapStateToProps = (state) => ({
	userInfo: selectUserInfo(state)
});

export const SettingScreen = connect(mapStateToProps, { setUserInfo })(({ navigation, setUserInfo, userInfo }) => {
	const [ fields, setFields ] = useState({
		userName: userInfo.userName,
		userAvatarUrl: userInfo.userAvatarUrl
	});

	const fieldsChangeHandler = (name, value) =>
		setFields((fields) => ({
			...fields,
			[name]: value
		}));

	const submitHandler = () => {
      setUserInfo(fields);
      navigation.navigate("Home")
   };

	return (
		<TodoSectionContainer style={styles.wrapper}>
			<Field
				value={fields.userName}
				title="User Name"
				onChangeText={(value) => fieldsChangeHandler('userName', value)}
			/>
			<Field
				value={fields.userAvatarUrl}
				title="Avatar Url"
				contentContainerStyle={styles.topSpacing}
				onChangeText={(value) => fieldsChangeHandler('userAvatarUrl', value)}
			/>

			<Btn title="SAVE CHANGES" style={styles.topSpacing} onPress={submitHandler} />
		</TodoSectionContainer>
	);
});

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 16
	},
	topSpacing: {
		marginTop: 14
	}
});
