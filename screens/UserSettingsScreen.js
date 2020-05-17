import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import { CustomHeader, CustomText } from '../components';
import { COLORPALETTE } from '../styles/colors';
import { connect } from 'react-redux';
import { addUserSettings } from '../redux/data';

const mapsStateToProps = (store) => ({
	userInfo: store.data.userSettings
});

export const UserSettingsScreen = connect(mapsStateToProps, { addUserSettings })(({ userInfo, addUserSettings }) => {
	const [ userFileds, setUserFields ] = useState({
		userName: '',
		userUri: ''
	});
	const filedsChangeHandler = (name, value) => {
		setUserFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const saveHandler = () => {
		if (userFileds.userName.trim() !== '' && userFileds.userName.trim() !== '') {
			addUserSettings({ userName: userFileds.userName, userUri: userFileds.userUri });
		}
	};

	return (
		<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
			<View style={styles.container}>
				<CustomHeader text="User Settings" imageRight="" imageLeft="" />

				<View style={styles.toDoesSection}>
					<View style={styles.userInfo}>
						<Image style={styles.userImage} source={{ uri: userInfo.userUri }} />
						<CustomText style={styles.userName} weight="medium">
							{userInfo.userName}
						</CustomText>
					</View>
					<CustomText weight="medium" style={styles.fieldPlaceHolder}>
						username
					</CustomText>
					<TextInput
						onChangeText={(value) => filedsChangeHandler('userName', value)}
						placeholder={userInfo.userName}
						style={styles.fields}
					/>
					<CustomText weight="medium" style={styles.fieldPlaceHolder}>
						avatar url
					</CustomText>
					<TextInput
						onChangeText={(value) => filedsChangeHandler('userUri', value)}
						placeholder={userInfo.userUri}
						style={styles.fields}
					/>

					<TouchableOpacity
						onPress={() => saveHandler()}
						style={[ styles.fields, { backgroundColor: COLORPALETTE.main } ]}
					>
						<CustomText weight="medium" style={styles.btnText}>
							save changes
						</CustomText>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORPALETTE.main
	},
	toDoesSection: {
		padding: 16,
		backgroundColor: 'white',
		height: '100%',
		borderRadius: 30
	},
	fieldPlaceHolder: {
		color: COLORPALETTE.textColor,
		alignSelf: 'center'
	},
	fields: {
		backgroundColor: COLORPALETTE.btnGrey,
		width: '100%',
		borderRadius: 45,
		padding: 8,
		textAlign: 'center',
		fontSize: 18,
		marginVertical: 8
	},
	btnText: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white',
		textTransform: 'uppercase'
	},
	userInfo: {
		borderRadius: 30,
		padding: 20,
		backgroundColor: '#eeeeee',
		alignItems: 'center',
		marginBottom: 20,
		justifyContent: 'center',
		height: 150
	},
	userImage: {
		width: 70,
		height: 70,
		backgroundColor: COLORPALETTE.main,
		borderRadius: 80,
		borderWidth: 4,
		borderColor: 'white'
	},
	userName: {
		fontSize: 24,
		color: COLORPALETTE.main,
		marginTop: 10
	}
});
