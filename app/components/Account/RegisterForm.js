import React, { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import { Input, Icon, Button } from "react-native-elements";
import {BasicButton} from '@phomea/react-native-buttons';
import * as firebase from 'firebase';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/validation";
import WaterLoader from '../WaterLoader';

export default function RegisterForm() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);    

    const [establishment, setEstablishment] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [hidePassword, setHidePassword] = useState(true);
    const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
    
    const ToastMessage = (message) =>{
        if(message == "Account created successfully"){
            Toast.show(message,{
                position: Toast.position.bottom,
                containerStyle:{width: "100%", height: 50, backgroundColor: "#07b3a3", borderRadius: 0, marginBottom: -40},
                animationDuration: 700,
                mask: false,
                animation: true,
                shadow: false,
              });
        }else{
            Toast.show(message,{
                position: Toast.position.bottom,
                containerStyle:{width: "100%", height: "auto", backgroundColor: "#b30740", borderRadius: 0, marginBottom: -40},
                animationDuration: 700,
                mask: false,
                animation: true,
                shadow: false,
              });
        }                    
    }    
    return (
        <View style={styles.formContainer}>
            <WaterLoader isVisible={isVisible} />
            <Input
            placeholder='Establishment'
            onChange={e => setEstablishment(e.nativeEvent.text)}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={styles.inputContainerStyleRegister}
            inputStyle={{color: "#27a194"}}
            leftIcon={
                <Icon
                type="material-community"
                name='domain'
                size={30}
                color='#27a194'                
                />
            }
        /> 
        <Input
            placeholder='Email'
            onChange={e => setEmail(e.nativeEvent.text)}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={styles.inputContainerStyleRegister}
            inputStyle={{color: "#27a194"}}
            leftIcon={
                <Icon
                type="material-community"
                name='email'
                size={30}
                color='#27a194'                
                />
            }
        />         
        <Input
            placeholder='Password'            
            onChange={e => setPassword(e.nativeEvent.text)}
            password={true}
            secureTextEntry={hidePassword}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={styles.inputContainerStyleRegister}
            inputStyle={{color: "#27a194"}}
            leftIcon={
                <Icon
                type="material-community"
                name='lock'
                size={30}
                color='#27a194'                
                />
            }
            rightIcon={
                <Icon                
                type="material-community"
                name={hidePassword ? "eye-off-outline" : "eye-outline"}
                size={30}
                color='#27a194'                    
                containerStyle={{marginRight: 10}}
                onPress={() => setHidePassword(!hidePassword)} 
                />                
            }            
        />    
        <Input
            placeholder='Repeat Password'            
            onChange={e => setRepeatPassword(e.nativeEvent.text)}
            password={true}
            secureTextEntry={hideRepeatPassword}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={[styles.inputContainerStyleRegister, {marginBottom: 25}]}
            inputStyle={{color: "#27a194"}}
            leftIcon={
                <Icon
                type="material-community"
                name='lock-reset'
                size={30}
                color='#27a194'                
                />
            }
            rightIcon={
                <Icon                
                type="material-community"
                name={hideRepeatPassword ? "eye-off-outline" : "eye-outline"}
                size={30}
                color='#27a194'                    
                containerStyle={{marginRight: 10}}
                onPress={() => setHideRepeatPassword(!hideRepeatPassword)} 
                />                
            }            
        />          
        <BasicButton 
        title="REGISTER" 
        animation="standard"
        buttonStyle={styles.btnRegister}
        textStyle={{padding:7}}
        // onPress={Login}
        />
        <Text>{`        
            `}</Text>                   
        <Text style={styles.haveAnAccountText}>You have an account?
            <Text> </Text>
            <Text style={styles.loginNowText} onPress={() => navigation.navigate("login")}>
                Login</Text>
        </Text>                       
        </View>
    )
}

const styles = StyleSheet.create({	
	formContainer: {                		
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
				
    	marginRight: 20,
		marginLeft: 20,
	},

    inputContainerStyleRegister: {
        padding: 5, 
        marginBottom: 20,
        backgroundColor: "#f5fefd", 
        borderRadius: 35, 
        borderWidth: 1, 
        borderColor: "#07b3a3"
    },

	inputForm: {
		width: "100%",
        marginTop: 15,        
	},

    forgotPasswordText:{
        marginTop: -10, 
        fontSize: 16, 
        color: "#737373"
    },

    haveAnAccountText:{
        marginTop: -10, 
        fontSize: 16, 
        color: "#737373",        
    },    
    loginNowText: {
        fontSize: 16, 
        color: "#27a194",        
        textDecorationLine: "underline",
    },

    btnRegister: {	
        backgroundColor: "#07b3a3", 
        width: "50%", 
        height: "auto", 
        borderRadius: 30			        
	}
})