import React, { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import { Input, Icon, Button } from "react-native-elements";
import {BasicButton} from '@phomea/react-native-buttons';
import * as firebase from 'firebase';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from "@react-navigation/native";

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { es } from '../../translations/es/global';
import { en } from '../../translations/en/global';

import { validateEmail } from "../../utils/validation";
import WaterLoader from '../WaterLoader';

export default function LoginForm() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);    

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const [language, setLanguage] = useState("es"); // useState que define en string el lenguaje
    i18n.fallbacks = true; // Si no especificamos el origen de la traducción pone la traduccion del dispositivo predeterminada
    i18n.translations = { en, es }; // lenguajes 
    i18n.locale = language; // Poner manualmente el lenguaje
    // i18n.locale = Localization.locale; // Detectar el lenguaje del dispositivo    

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
                    setIsVisible(false);					
                    navigation.navigate("home");	
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
            // value="l@gmail.com"
            placeholder={i18n.t('login.email-placeholder')}
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
            // value="1234567"
            placeholder={i18n.t('login.password-placeholder')}
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
        <Text style={styles.forgotPasswordText}>{i18n.t('login.forgot-password-text')}</Text>
            <Text>{`    
                `}</Text>   
            <BasicButton 
            title={i18n.t('login.button-text')}
            animation="standard"
            buttonStyle={styles.btnLogin}
            textStyle={{padding:7}}
            onPress={Login}
            />
        <Text>{`
        
            `}</Text>                   
        <Text style={styles.dontHaveAnAccountText}>{i18n.t('login.dont-have-an-account?-text')}
            <Text> </Text>
            <Text style={styles.registerNowText} onPress={() => navigation.navigate("register")}>
            {i18n.t('login.register-now-text')}</Text>
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