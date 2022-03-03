import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

import ListSensors from '../components/ListSensors';

export default function Sensors() {

    const [user, setUser] = useState([])
    const [sensors, setSensors] = useState([])
    const [totalSensors, setTotalSensors] = useState([])  
    const [startSensor, setStartSensor] = useState(null)
    const limitSensors = 1
    console.log(sensors);
    
    // Get auth state with user data and consumption data of sensors
    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) =>{
            setUser(userInfo);

            const resultSensors = []

            db.collection(userInfo.uid)
            .doc("Consumption_Data")            
                .collection("Sensors_Data")        
                    .get()
                        .then((snap) => {
                        setTotalSensors(snap.size)
                    })     
                    
            db.collection(userInfo.uid)
            .doc("Consumption_Data")            
                .collection("Sensors_Data")        
                    .get()
                        .then((response) => {
                            setStartSensor(response.docs[response.docs.length - 1])

                            response.forEach((doc) => {
                                const sensor = doc.data()
                                sensor.id = doc.id
                                // console.log(doc.data());
                                resultSensors.push(sensor)                        
                            });
                            setSensors(resultSensors)
                    })                      
        })           
    }, [])    
    

    return (
        <View>
            <Text>Sensors</Text>
            <Text>{user.uid}</Text>            
            <ListSensors sensors={sensors} />
        </View>
    )
}
