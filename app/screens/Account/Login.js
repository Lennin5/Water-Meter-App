import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { fullscreen } from 'min-document';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
// import { Image } from 'react-native-elements'

import LoginForm from '../../components/Account/LoginForm';
import WaterLoader from '../../components/WaterLoader';

export default function Login() {
    return (        
        <KeyboardAwareScrollView enableOnAndroid={false} style={{backgroundColor: "#fff"}}>
            <Text>{`

            `}</Text>
            <View style={styles.viewLogin}>                
                <Image
                    source={require("../../../assets/img/login-banner.png")}
                    style={{width: fullscreen}}
                    resizeMode="contain"
                />
            </View>
            <LoginForm />
            <WaterLoader isVisible={false} />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    viewLoginForm: {

    }
});