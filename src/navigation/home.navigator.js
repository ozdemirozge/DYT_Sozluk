import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import router from '../constants/router'
import { LoginStack } from './login.navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from '../components/tab/BottomTab'
import ProfilScreen from '../screens/profil';
import NotificationAndSurveyScreen from '../screens/notificationAndSurvey';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
            <Tab.Screen name={router.home} component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name={router.profile} component={ProfilScreen} options={{ headerShown: false }} />
            <Tab.Screen name={router.notificationAndSurvey} component={NotificationAndSurveyScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

