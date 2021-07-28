import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image, StatusBar } from "react-native";
import { Overlay } from "react-native-elements";

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function IntroApp() {
	
	const [statusBarColor, setStatusBarColor] = useState(null);
	const [dataLoadedState, setDataLoadedState] = useState(null);

	// Efecto para decirle a la app que los datos han cargado y aplicar 
	// el color de la barra en dark mode dependiendo de 3 opciones:
	// 1. Si el usuario NO está loggeado == background: white, dark-content
	// 2. Si el usuario SI etsá loggeado y tiene dark mode activado == background: black, light-content
	// 3. Si el usuario SI está loggeado y tiene dark mode desactivado == background: white, dark-content
	useEffect(() => {
		(async () => {
			await firebase.auth().onAuthStateChanged(async function (user) {
				if (user) {
					await db.collection(user.uid).doc('Configuration_Data')
						.onSnapshot(function (doc) {
							if (doc.exists) {
								var data = doc.data();							
								setTimeout(() => {
									setDataLoadedState(data.Loaded_Data);
									setStatusBarColor(data.Dark_Mode);
								}, 1);
							} else {
								setDataLoadedState(true);
							}
						});
				}else{					
					setDataLoadedState(true);
				}
			}
			);
		})();		
	}, []);

	return (
		<>
			<StatusBar
				backgroundColor={statusBarColor ? "black" : "white"}
				barStyle={statusBarColor ? "light-content" : "dark-content"} 
				translucent={true}
				/>
			<Overlay
			/* // Traemos de la BD el valor del campo "Datos_Cargados", se lo ponemos al dataLoadedState		
				// Si los datos NO han cargado, isVisible del IntroApp = true (Va a estar cargando) y,
				// Si los datos SI han cargado, isVisible del IntroApp = false (se esconde) */		
				isVisible={dataLoadedState ? false : true}
				// windowBackgroundColor="rgba(0, 0, 0, 0.5)"		
				// overlayBackgroundColor="red"
				fullScreen={true}
				overlayStyle={styles.overlay, { backgroundColor: "#27a194" }}
			>
				<View style={styles.view}>
					<Text style={{ color: "white", fontSize: 15 }}>Water Meter!</Text>
					{/* <Image
						source={require("../../assets/img/loading.gif")}
						style={{ width: "11%", height: 37, marginTop: 10 }}
					/> */}
				</View>
			</Overlay>
		</>
	)
}

const styles = StyleSheet.create({
	overlay: {
		elevation: 0,
	},

	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1,
		// borderColor: "red",		
		zIndex: 1
	},

})