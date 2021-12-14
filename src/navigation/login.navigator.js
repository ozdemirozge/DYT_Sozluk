import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import router from '../constants/router'
import {HomeStack} from '../navigation/home.navigator'
import MainNavigation from '../navigation/app.navigator'


const Stack = createStackNavigator();

export  function LoginStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ title: ('Geri'), headerShown: false }}
                name={router.login}
                component={LoginScreen}
            />
            <Stack.Screen name={router.tab} component={HomeStack} options={{headerShown: false}} />

        </Stack.Navigator>
    );
}

