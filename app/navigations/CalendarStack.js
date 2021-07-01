import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Calendar from "../screens/Calendar";
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function CalendarStack() {
    const { colors } = useTheme();   
    return(
        <Stack.Navigator>            
            <Stack.Screen                          
                name="calendar"
                component={Calendar}
                options={{ 
                    title: "Calendar",                    
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
