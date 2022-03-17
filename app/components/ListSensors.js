import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity, ViewComponent } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import {size} from 'lodash'

import { useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

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
            renderItem={(sensor) => <SensorContainer sensor={sensor} />}
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

function SensorContainer(props) {
    const { colors } = useTheme();
    const { sensor } = props;
    const { image, Name, Liters } = sensor.item;
    const imageSensor = image;
    console.log(Image);

    return (
        // <Card>
        <View style={[styles.mainViewListSensors, {backgroundColor: colors.card}]}>
            
            <View style={styles.viewSensorImage}>            
                <Image 
                    resizeMode="cover"
                    PlaceholderContent={<ActivityIndicator color={"red"} />}
                    source={
                        imageSensor ?
                        { uri: imageSensor }
                        :
                        require("../../assets/img/default-sensor.png")
                    }
                    style={styles.viewSensorImage_image}
                />                                                             
            </View>
            <View style={styles.viewSensorInformation}>
                <Text style={[styles.viewSensorInformation_name, {color: colors.text}]}>{Name}</Text>
                <Text style={{color: colors.textSecondary}}>Litros: {Liters}</Text>
            </View>
            <View style={styles.viewSensorEdit}>                
                <Icon
                    type="material-community"
                    name="pencil-box"
                    size={40}
                    color="#47cab4"
                    containerStyle={styles.viewSensorEdit_icon}
                    onPress={() => console.log('hello')}
                />      
                               
            </View>
        </View>
        // </Card>
    )
}

const styles = StyleSheet.create({
    loaderSensors: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "red",        
    },

    mainViewListSensors: {
        flexDirection: "row",
        margin: 10,        
        padding: 15,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 3,      


        // borderWidth: 1,
        // borderColor: "red",        
    },

    viewSensorImage: {
        width: "30%",
        alignItems: "center",

        // borderWidth: 1,
        // borderColor: "yellow",                        
    },

    viewSensorImage_image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#47cab4",        
    },

    viewSensorInformation: {
        width: "50%",
        
        // borderWidth: 1,
        // borderColor: "blue",        
    },

    viewSensorInformation_name: {
        paddingTop: 25,
        fontWeight: "bold"
    },

    viewSensorEdit: {        
        width: "20%",
        alignItems: "flex-end",

        // borderWidth: 2, 
        // borderColor: "green"
    },

    viewSensorEdit_icon: {
        marginRight: 5,
    }
})