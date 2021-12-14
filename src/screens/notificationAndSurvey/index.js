import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import router from '../../constants/router'
import helpers from '../../helpers'
import navigationService from '../../services/navigationService'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { darkTheme, lightTheme } from '../../constants/themes'
import { AppConsumer } from '../../constants/ThemeProvider'

const NotificationAndSurveyScreen = ({ navigation }) => {
   

    useEffect(() => {
       
    })

    return (
        <AppConsumer>
            {appConsumer => (
                <View style={{ flex: 1, backgroundColor: appConsumer.theme.colors.primary }}>
                   <Text>Bildirim ve ankaet sayfası</Text>
                </View>
            )}
        </AppConsumer>
    )

}
export default NotificationAndSurveyScreen;


