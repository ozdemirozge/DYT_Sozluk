import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfilScreen from '../screens/profil';
import Router from '../constants/router'
import { LoginStack } from './login.navigator';
import LoginScreen from '../screens/Login';


const Stack = createStackNavigator();

export function SettingStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ title: ('Geri'), headerShown: false }}
                name={Router.profile}
                component={ProfilScreen}
            />

            <Stack.Screen name={Router.login} component={LoginScreen} options={{ headerShown: false }} />


        </Stack.Navigator>
    );
}

