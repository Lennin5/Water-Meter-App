import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Sensors from "../screens/Sensors";
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function SensorsStack() {
    const { colors } = useTheme();   
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
                }}                
            />
        </Stack.Navigator>
    );
}
