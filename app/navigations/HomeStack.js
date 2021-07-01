import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStack() {
    const { colors } = useTheme();   
    return(
        <Stack.Navigator>            
            <Stack.Screen                          
                name="home"
                component={Home}
                options={{ 
                    title: "Home",                    
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
