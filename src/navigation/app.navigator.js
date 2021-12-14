
import React, { useEffect } from 'react';
import { HomeStack } from './home.navigator';
import { SettingStack } from './setting.navigator';
import { NotificationAndSurveyStack } from './notificationAndSurvey.navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import router from '../constants/router';
import { AppConsumer } from '../constants/ThemeProvider'
import BottomTab from '../components/tab/BottomTab'
import HomeScreen from '../screens/home';
import ProfilScreen from '../screens/profil';
import LoginScreen from '../screens/Login';
import { LoginStack } from './login.navigator';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainNavigation = () => {
    return <TabNavigation />
}

const WIDTH = 65;


function TabNavigation() {
    return (
        <AppConsumer>
            {appConsumer => (

                <Stack.Navigator >
                    <Stack.Screen name={router.home} component={HomeStack} options={{ headerShown: false }} />
                    <Stack.Screen name={router.login} component={LoginStack} options={{ headerShown: false }} />

                </Stack.Navigator>

            )}

        </AppConsumer>
    );
}
const AppNavigator = () => (
    <MainNavigation />
);

export default AppNavigator;