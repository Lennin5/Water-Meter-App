import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/Explore";
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function ExploreStack() {
    const { colors } = useTheme();   
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
                    // headerShown: false
                }}                
            />
        </Stack.Navigator>
    );
}
