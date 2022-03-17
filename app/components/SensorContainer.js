import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function SensorContainer(props) {
  const { sensor } = props;
  return (
    <>
    <Card>
    <Card.Title>CARD WITH DIVIDER</Card.Title>
    <Card.Divider/>
        <View>
            <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../../assets/img/login-banner.png")}
            />
            <Text>Hola</Text>
        </View>
    </Card>     
    </>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },    
})