import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account";
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AccountStack() {
    const { colors } = useTheme();   
    return(
        <Stack.Navigator>            
            <Stack.Screen                          
                name="account"
                component={Account}
                options={{ 
                    title: "Account",                    
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
