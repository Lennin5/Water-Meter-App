import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from '@react-navigation/native';

import UserExist from '../components/UserExist';
import Sensors from "../screens/Sensors";

const Stack = createStackNavigator();

export default function SensorsStack() {
    const { colors } = useTheme(); 
    const existUser = UserExist();
    return(
        <Stack.Navigator>            
            <Stack.Screen                          
                name="sensors"
                component={Sensors}
                options={{ 
                    title: "Sensors",                    
                    headerStyle: {                                    
                        borderBottomWidth: 1,
                        borderBottomColor: colors.borderBottomColor                              
                        // elevation: 3, TRES ES EL ELEVATION PREDETERMINADO DE LA SOMBRA BOTTOM DEL HEADER
                      },
                    // headerShown: existUser
                }}                
            />
        </Stack.Navigator>
    );
}
