import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { fullscreen } from 'min-document'

import RegisterForm from '../../components/Account/RegisterForm'

export default function Register() {
    return (
        <KeyboardAwareScrollView enableOnAndroid={false} style={{backgroundColor: "#fff"}}>
        <Text>{`
        `}</Text>            
            <View>
                <Image
                    source={require("../../../assets/img/login-banner.png")}
                    style={{width: fullscreen}}
                    resizeMode="contain"
                />
            </View>
            <RegisterForm />
        </KeyboardAwareScrollView>
    )
}
