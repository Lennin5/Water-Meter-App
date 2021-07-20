import React, { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import { Input, Icon, Button } from "react-native-elements";
import {BasicButton} from '@phomea/react-native-buttons';
import * as firebase from 'firebase';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/validation";
import WaterLoader from '../WaterLoader';

export default function LoginForm() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);    

    const [email, setEmail] = useState("l@gmail.com");
	const [password, setPassword] = useState("1234567");
    const [hidePassword, setHidePassword] = useState(true);

    const ToastMessage = (message) =>{
        Toast.show(message, {
            position: Toast.position.bottom,
            containerStyle:{
                width: "100%", 
                height: "auto", 
                backgroundColor: "#b30740", 
                borderRadius: 0, 
                marginBottom: -40
            },
            animationDuration: 700,
            mask: false,
            animation: true,
            shadow: false,
        });               
    }
  

	const Login = async () => {
		// signo ! significa Si email esta NUll o vacio ; == igual, !== diferente de
		setIsVisible(true);
		if(!email || !password){
			ToastMessage("All fields are required");
            setIsVisible(false);
		} else {
		  if(!validateEmail(email)){		  
            ToastMessage("Invalid Email");
            setIsVisible(false);
			} else {				
				await firebase.auth().signInWithEmailAndPassword(email, password)
					.then(response=>{
                    // ToastMessage("All fields are required");
                    setIsVisible(false);					
					console.log("Existe Usuario Activo - consLog de login");	
                    navigation.navigate("account");	
					})
					.catch(error => {
						setIsVisible(false);
						var errorCode = error.code;
						var errorMessage = error.message;
						ToastMessage(errorMessage);
						//Aquí aplicaría los errores de contraseña incorrecta, el usuario no existe, etc.
					});					
			}
		}	
	};    

    return (
    <View style={styles.formContainer}>
    <WaterLoader isVisible={isVisible} />
        <Input
            placeholder='Email'
            onChange={e => setEmail(e.nativeEvent.text)}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={styles.inputContainerStyleLogin}
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
            inputContainerStyle={styles.inputContainerStyleLogin}
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
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            <Text>{`    
                `}</Text>   
            <BasicButton 
            title="LOGIN" 
            animation="standard"
            buttonStyle={styles.btnLogin}
            textStyle={{padding:7}}
            onPress={Login}
            />
        <Text>{`
        
            `}</Text>                   
        <Text style={styles.dontHaveAnAccountText}>Don't have an account?
            <Text> </Text>
            <Text style={styles.registerNowText} onPress={() => navigation.navigate("register")}>
                Register Now</Text>
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

    inputContainerStyleLogin: {
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

    dontHaveAnAccountText:{
        marginTop: -10, 
        fontSize: 16, 
        color: "#737373",        
    },    
    registerNowText: {
        fontSize: 16, 
        color: "#27a194",        
        textDecorationLine: "underline",
    },

	btnLogin: {	
        backgroundColor: "#07b3a3", 
        width: "50%", 
        height: "auto", 
        borderRadius: 30			        
	},

})