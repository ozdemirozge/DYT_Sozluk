import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import router from '../../constants/router'
import helpers from '../../helpers'
import navigationService from '../../services/navigationService'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { darkTheme, lightTheme } from '../../constants/themes'
import { AppConsumer } from '../../constants/ThemeProvider'

const ProfilScreen = ({ navigation }) => {
    const [username, setUserName] = useState('')
    const [organization, setOrganization] = useState('')
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [isEnabledNotification, setIsEnabledNotification] = useState(false);
    const [isEnabledTheme, setIsEnabledTheme] = useState(false);
    const notificationSwitch = () => setIsEnabledNotification(previousState => !previousState);

    useEffect(() => {
        helpers.getStroge('userData').then(a => {
            if (a) {
                setUserName(a.userInfo.fullName)
                setOrganization(a.userInfo.organization)
                setTitle(a.userInfo.title)
                setUserId(a.userInfo.userId)
            }
        });

        helpers.getStroge('darkTheme').then(previousState => {
            if (previousState) {
                setIsEnabledTheme(true)

            }
        });
    })

    return (
        <AppConsumer>
            {appConsumer => (
                <View style={{ flex: 1, backgroundColor: appConsumer.theme.colors.primary }}>
                    <View style={{ flex: 0.37, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ height: 90, width: 90, borderRadius: 50 }}
                            source={{ uri: 'https://cbsrvfmsrv.tccb.gov.tr/webapps/PhotoHandler.ashx?id=' + userId }} />

                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: appConsumer.theme.colors.text }}>{username}</Text>
                        <Text style={{ fontSize: 16, marginTop: 10, color: appConsumer.theme.colors.text }}>{organization}</Text>
                        <Text style={{ fontSize: 16, marginTop: 10, color: appConsumer.theme.colors.text }}>{title}</Text>
                    </View>
                    <View style={{ flex: 0.3, backgroundColor: appConsumer.theme.colors.primary, padding: 10, justifyContent: 'center', alignContent: 'center', }}>
                        <TouchableOpacity
                            style={{ backgroundColor: appConsumer.theme.colors.line, flexDirection: 'row', alignContent: 'center', alignItems: 'center', flex: 0.2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                            <Icon name="ios-notifications" size={26} style={{ flex: 0.1, paddingLeft: 8, color: appConsumer.theme.colors.white }} />
                            <Text style={{ flex: 0.8, color: appConsumer.theme.colors.text, fontSize: 16 }}>Bildirimler</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43a047" }}
                                thumbColor={isEnabledNotification ? appConsumer.theme.colors.white : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={notificationSwitch}
                                value={isEnabledNotification}

                            ></Switch>
                        </TouchableOpacity>

                        <View style={{ borderWidth: 0.3, borderColor: appConsumer.theme.colors.line }}></View>

                        <TouchableOpacity
                            style={{ backgroundColor: appConsumer.theme.colors.line, flexDirection: 'row', alignContent: 'center', alignItems: 'center', flex: 0.2, }} >
                            <MaterialCommunityIcons name="theme-light-dark" size={26} style={{ flex: 0.1, paddingLeft: 8, color: appConsumer.theme.colors.white }} />
                            <Text style={{ flex: 0.8, color: appConsumer.theme.colors.text, fontSize: 16 }}>Gece Modu</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#43a047" }}
                                thumbColor={isEnabledTheme ? appConsumer.theme.colors.white : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={(a) => {
                                    setIsEnabledTheme(previousState => !previousState);
                                    a ? appConsumer.updateTheme(darkTheme) : appConsumer.updateTheme(lightTheme);

                                }}
                                value={isEnabledTheme}

                            ></Switch>
                        </TouchableOpacity>

                        <View style={{ borderWidth: 0.3, borderColor: appConsumer.theme.colors.line }}></View>

                        <TouchableOpacity
                            style={{ backgroundColor: appConsumer.theme.colors.line, flexDirection: 'row', alignContent: 'center', alignItems: 'center', flex: 0.2, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                            onPress={() => {

                                helpers.removeValue('userData').then(b => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: router.login }],
                                    });
                                })
                               // navigationService.navigate(router.login)



                            }}>
                            <Text style={{ flex: 1, justifyContent: 'center', textAlign: 'center', color: 'red', fontSize: 16 }}>Oturumu Kapat</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'flex-end' }}>

                    </View>
                </View>
            )}
        </AppConsumer>
    )

}
export default ProfilScreen;


