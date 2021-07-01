import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';

export default function Calendar() {
    const { colors } = useTheme();   
    return (
        <View>
            <Text style={{color:colors.text}}>Calendar...</Text>
        </View>
    )
}
