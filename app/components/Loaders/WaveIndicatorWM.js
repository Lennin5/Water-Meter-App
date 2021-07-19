import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

import { WaveIndicator } from 'react-native-indicators';

export default function WaveIndicatorWM(props){
	const { isVisible } = props;
	return(
			<Overlay
			isVisible={isVisible}
			windowBackgroundColor="transparent"
			overlayBackgroundColor="red"
			fullScreen={true}
			overlayStyle={styles.overlay}
			>
			<View style={styles.view}>							
				<WaveIndicator color="#00d394" waveMode="outline" count={2} size={70} waveFactor={0.70}></WaveIndicator>
			</View>
			</Overlay>
		)
}

const styles = StyleSheet.create({

	overlay: {
		backgroundColor: "transparent",		
		elevation: 0,
	},

	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1,
		// borderColor: "red",		
	},

	activity: {
		// borderWidth: 1,
		// borderColor: "red",

	}

})
