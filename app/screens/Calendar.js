import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function Calendar() {
	const { colors } = useTheme();
	const [userState, setUserState] = useState(null);
	const [switchDarkMode, setSwitchDarkMode] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setUserState(user);
				db.collection(user.uid).doc("Configuration_Data")
				.onSnapshot(function (doc) {
						if (doc.exists) {
							let user = doc.data();
							setSwitchDarkMode(user.Dark_Mode);
						}
					});									    
			} else {
				setUserState(null);
				setSwitchDarkMode(false);
			}
		});
	}, []);

	const SwitchDarkMode = () => {		
		if (switchDarkMode === false) { //Si es false el switch está activo		
			setSwitchDarkMode(true);
			console.log("Dark Mode: Enabled");
			db.collection(userState.uid).doc('Configuration_Data').update({
				Dark_Mode: true
			})
			.then(respose => {
				console.log("Se han actualizado el Dark Mode a: Enabled");
			}).catch(error => {
				console.log("Error al Enabled: " + error);
			});
		}
		if (switchDarkMode === true) { //Si es true el switch NO está activo		
			setSwitchDarkMode(false);
			console.log("Dark Mode: Disabled");
			db.collection(userState.uid).doc('Configuration_Data').update({
				Dark_Mode: false
			})
			.then(respose => {
				console.log("Se han actualizado el Dark Mode a: Disabled");
			}).catch(error => {
				console.log("Error al Disabled: " + error);
			});
		}
	}
	return (
		<>
		{
			userState ? 
			<View style={styles.container}>
				<Text style={{ color: colors.text }}>{switchDarkMode ? "Dark Mode" : "Light Mode"}</Text>
				<Switch
					trackColor={{ false: "#767577", true: colors.primary }}
					thumbColor={switchDarkMode ? "#f4f3f4" : "#f4f3f4"}					
					onValueChange={SwitchDarkMode}
					value={switchDarkMode}					
				/>				
			</View>
			:
			<Text>No Existe Usuario Activo! D:</Text>									
			
		}

		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// marginTop: 50,
	}
});


// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import LoadingAM from "../components/LoadingManual";
// import { useTheme } from '@react-navigation/native';

// // import { Buttom } from "../navigations/Navigation";

// export default function Favorites(){	

// 	const { colors } = useTheme();    
// 	const [loadingIntroApp, setLoadingIntroApp] = useState(false);			
// 	return(
// 		<View>				
// 			{/* <Buttom darkMode={darkMode} setDarkMode={setDarkMode} /> */}
// 			<Text style={{color: colors.text}}>Hola</Text>			
// 		</View>
// 		)
// }























