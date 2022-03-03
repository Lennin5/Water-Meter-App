import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import {size} from 'lodash'
import { useTheme } from '@react-navigation/native';

export default function ListSensors(props) {
    const { colors } = useTheme();
    const { sensors } = props;

  return (
    <View>
      <Text>ListSensors...</Text>
      {
        size(sensors) > 0 ? (
        <FlatList 
            data={sensors}
            renderItem={(sensor) => <Sensor sensor={sensor} />}
            keyExtractor={(item, index) => index.toString()}
        />
        ) : (
            <View style={styles.loaderSensors}>
                <ActivityIndicator size="large" color={colors.primary}></ActivityIndicator>
                <Text>Cargando Datos</Text>
            </View>
        )

      }
    </View>
  )
}

function Sensor(props) {
    const { sensor } = props;
    return (
        <View>
            <Text>Sensor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loaderSensors: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "red",
    }
})