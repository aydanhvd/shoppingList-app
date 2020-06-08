import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { COLORPALETTE } from '../../styles/colors';
import { CustomText } from '../../components';
import { ICONS } from '../../styles/icons';

export const SinngleProduct = ({ 
	name, 
	count, 
	unit, 
	isEditMode = false , 
	isDone , 
	isUnderEdit=false , 
	onLongPress,
	onDelete,
	onEditPress
}) => {
	return (
		<View>
			<TouchableOpacity 
				style={styles.container} 
				disabled={isEditMode} 
				onLongPress={onLongPress}
			>
				<View 
               style={[ styles.wrapper,
               { 
                  paddingHorizontal: isEditMode ? 55 : 20,
                  opacity: isDone && !isEditMode ? 0.5 :1 
               } 
               ]}>
					<CustomText style={styles.text}>{name}</CustomText>
					<CustomText style={styles.text}>
						x{count} {unit}
					</CustomText>
               { isEditMode && ( 
                  <>
                     <TouchableOpacity 
                        style={styles.btnEditWrapper}
                        disabled={isUnderEdit}
								onPress={onEditPress}
                     >
                        <View style={[ styles.iconContainer, , styles.btnEdit ,{opacity: isUnderEdit? 0.7 :1}]} >
                              <Image style={styles.icon} source={ICONS.pen} />
                           </View>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.btnDeleteWrapper} onPress={onDelete}>
                        <View  style={[ styles.iconContainer, styles.btnDelete ]}>
                           <Image style={styles.icon} source={ICONS.cancel} />
                        </View> 
                     </TouchableOpacity>
               </>
               )}			
				</View>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginBottom: 14
	},
	wrapper: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 2,
		borderColor: COLORPALETTE.secondaryColor,
		borderRadius: 20
	},
	iconContainer: {
		padding: 10,
		width: 40,
		height: 40,
		borderRadius: 30,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 2
	},
	icon: {
		width: 22,
		height: 22
   },
   btnEditWrapper:{
      position:'absolute',
      top:-2,
      left:0
   },
   btnDeleteWrapper:{
      position:'absolute',
      top:-2,
      right:0
   },
	btnEdit: {
		backgroundColor: COLORPALETTE.secondaryColor,
      left: -2,
      width: 40,
		height: 40,
	},
	btnDelete: {
		backgroundColor: COLORPALETTE.main,
      right: -2,
      width: 40,
		height: 40,
	},
	text: {
		fontSize: 14,
		marginHorizontal: 18,
		color: COLORPALETTE.textColor
	}
});
