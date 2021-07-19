import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from '@react-navigation/native';

import UserExist from '../components/UserExist';
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function HomeStack() {
    const { colors } = useTheme();   
    const existUser = UserExist();
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
                    // headerShown: existUser
                }}                
            />
        </Stack.Navigator>
    );
}
