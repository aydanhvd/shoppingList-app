import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity , image} from 'react-native';
import { CustomText } from '../components/CustomText';
import { connect } from 'react-redux';
// import starts from '../assets/images/stars.png';



const mapsStateToProps = (store) => ({
	userInfo: store.data.userSettings
});

export const CustomDrawer = connect(mapsStateToProps)(({ userInfo, navigation }) => {
	
	return (
		<View style={styles.cotainer}>
		<TouchableOpacity onPress={()=>navigation.navigate('UserSettings')}>
			<View style={styles.header}>
				<Image source={{ uri: userInfo.userUri }} style={styles.image} />
				<CustomText style={styles.username}>{userInfo.userName}</CustomText>
			</View>
		</TouchableOpacity>	
			<View style={styles.drawerBtns}>
				<TouchableOpacity 
					onPress={()=>navigation.navigate('AddList')}  
					style={styles.btn}
				>
					<CustomText style={styles.btnText}>ADD NEW LIST</CustomText>
				</TouchableOpacity>

				<View style={styles.btnWrapper}>
					<TouchableOpacity  
						onPress={()=>navigation.navigate('OneTime')} 
						style={[styles.btn, {marginTop:13}]}
					>
						<CustomText style={styles.btnText}>One time list</CustomText>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[styles.btn, {marginTop:13}]} 
						onPress={()=>navigation.navigate('Regular')}
					>
						<CustomText style={styles.btnText}>Regular lists</CustomText>
					</TouchableOpacity>
					<TouchableOpacity 
						style={[styles.btn, {marginTop:13}]}
						onPress={()=>navigation.navigate('UserSettings')}
					>
						<CustomText style={styles.btnText}>user settings</CustomText>
					</TouchableOpacity>
				</View>
				{/* <Image style={styles.stars} source={starts}/> */}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	cotainer: {},
	header: {
		flexDirection: 'row',
		backgroundColor: 'white',
		width: '100%',
		alignItems: 'center',
		paddingVertical: 13,
		paddingHorizontal: 16
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 60,
		backgroundColor: '#07B594',
		marginRight: 22
	},
	username: {
		fontSize: 24
	},
	drawerBtns: {
		borderRadius: 20,
		backgroundColor: '#07B594',
		paddingHorizontal: 16,
		width: '100%',
		height: '95%'
	},
	btn: {
		backgroundColor: '#FFFFFF',
		paddingVertical: 10,
		borderRadius: 40,
		marginTop: 16
	},
	btnText: {
		textAlign: 'center',
		textTransform: 'uppercase',
		color: '#07B594'
	},
	btnWrapper:{
		marginTop:25,
	},
	stars:{
		width: 100,
		height:100
	}
});
