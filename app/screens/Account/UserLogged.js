import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from "react-native-elements"
import * as firebase from "firebase"
import { useTheme } from '@react-navigation/native'

export default function UserLogged() {
    const { colors } = useTheme();   
    return (
        <View>
            <Text>UserLogged...</Text>
        <Button
        title="Cerrar Sesión"
        titleStyle={{ color: colors.primary  }}	
        onPress={() => firebase.auth().signOut()}	
        buttonStyle={[styles.btnCloseSesion, { 
                            backgroundColor: colors.secondary, 
                            borderTopColor: colors.primary, 
                            borderBottomColor: colors.primary 
                            } ]}
        />         
        </View>
    )
}

const styles = StyleSheet.create({
	btnCloseSesion:{
		marginTop: 5,		
		borderTopWidth: 2,		
		borderBottomWidth: 2,		
		paddingTop: 10,
		paddingBottom: 10,		
	}
});