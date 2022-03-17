import React, { useState } from 'react';
import { View, Text, StyleSheet,  } from 'react-native'
import { Input, Icon, Button } from "react-native-elements";
import {BasicButton} from '@phomea/react-native-buttons';
import * as firebase from 'firebase';
import Toast from 'react-native-tiny-toast';
import { useNavigation } from "@react-navigation/native";

import { validateEmail } from "../../utils/validation";
import WaterLoader from '../WaterLoader';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { es } from '../../translations/es/global';
import { en } from '../../translations/en/global';

export default function RegisterForm() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);    

    const [establishmentName, setEstablishmentName] = useState("b2");
    const [email, setEmail] = useState("b@gmail.com");
	const [password, setPassword] = useState("1234567");
    const [repeatPassword, setRepeatPassword] = useState("1234567");

    const [hidePassword, setHidePassword] = useState(true);
    const [hideRepeatPassword, setHideRepeatPassword] = useState(true);

    const [language, setLanguage] = useState("es"); // useState que define en string el lenguaje
    i18n.fallbacks = true; // Si no especificamos el origen de la traducción pone la traduccion del dispositivo predeterminada
    i18n.translations = { en, es }; // lenguajes 
    i18n.locale = language; // Poner manualmente el lenguaje
    // i18n.locale = Localization.locale; // Detectar el lenguaje del dispositivo       
    
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

	const Register = async () => {		        
		// signo ! significa Si email esta NUll o vacio ; == igual, !== diferente de
		if(!establishmentName || !email || !password || !repeatPassword){
			ToastMessage("All fields are required");
		} else {
		  if(!validateEmail(email)){		  
            ToastMessage("Invalid Email");
            } else {                
                if(password !== repeatPassword){					                    
                    ToastMessage("Passwords don't match");
                } else {
                    setIsVisible(true);
                    await firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((response)=>{
                        firebase.firestore().collection(response.user.uid).doc("Main_Data").set({
                            Establishment_Name: establishmentName,
                        })
                        firebase.firestore().collection(response.user.uid).doc("Configuration_Data").set({
                            Dark_Mode: false,
                            Loaded_Data: true
                        }).then(response =>{
                            console.log("Se Guardaron Los Datos En La BD");	
                            // Data is setted in firestore
                            // console.log(response);     
                            // firebase.auth().signOut();
                        }).catch(error =>{
                            console.log("No Se Guardaron Los Datos En La BD");	
                            setIsVisible(false);
                        })    	
                        setIsVisible(false);
                        ToastMessage("Account created successfully");
                        navigation.navigate("account");
                    }).catch((error) => {				
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        ToastMessage(errorMessage);
                        setIsVisible(false);
                    });
                    setIsVisible(false);
                }
            }
		}	
	};    
    return (
        <View style={styles.formContainer}>
            <WaterLoader isVisible={isVisible} />
            <Input
            placeholder={i18n.t('register.establishment-name-placeholder')}
            onChange={e => setEstablishmentName(e.nativeEvent.text)}
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
            placeholder={i18n.t('register.email-placeholder')}
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
            placeholder={i18n.t('register.password-placeholder')}
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
            placeholder={i18n.t('register.repeat-password-placeholder')}
            onChange={e => setRepeatPassword(e.nativeEvent.text)}
            password={true}
            secureTextEntry={hideRepeatPassword}
            placeholderTextColor={"#27a194"}
            inputContainerStyle={[styles.inputContainerStyleRegister, {marginBottom: 30}]}
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
        title={i18n.t('register.button-text')}
        animation="standard"
        buttonStyle={styles.btnRegister}
        textStyle={{padding:7}}
        onPress={Register}
        />
        <Text>{`        
            `}</Text>                   
        <Text style={styles.haveAnAccountText}>{i18n.t('register.you-have-an-account?-text')}
            <Text> </Text>
            <Text style={styles.loginNowText} onPress={() => navigation.navigate("login")}>
            {i18n.t('register.login-now-text')}</Text>
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