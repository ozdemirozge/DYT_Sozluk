import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import router from '../constants/router'
import {HomeStack} from '../navigation/home.navigator'
import MainNavigation from '../navigation/app.navigator'
import NotificationAndSurveyScreen from '../screens/notificationAndSurvey';


const Stack = createStackNavigator();

export  function NotificationAndSurveyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                options={{ title: ('Geri'), headerShown: false }}
                name={router.notificationAndSurvey}
                component={NotificationAndSurveyScreen}
            />

        </Stack.Navigator>
    );
}
