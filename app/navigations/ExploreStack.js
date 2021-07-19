import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from '@react-navigation/native';

import UserExist from '../components/UserExist';
import Explore from "../screens/Explore";

const Stack = createStackNavigator();

export default function ExploreStack() {
    const { colors } = useTheme();   
    const existUser = UserExist();
    
    return(
        <Stack.Navigator>            
            <Stack.Screen                          
                name="explore"
                component={Explore}
                options={{ 
                    title: "Explore",                    
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
