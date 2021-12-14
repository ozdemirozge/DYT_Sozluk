import React, { useState, useEffect } from 'react'
import {
    Text, View, ImageBackground, Image, SafeAreaView, ScrollView, Button, TextInput,
    StatusBar, ActivityIndicator, Platform, Alert, Keyboard
} from 'react-native'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import callApi from '../../services/apiServices'
import { apiUrl } from '../../../app.json'
import helpers from '../../helpers'
import router from '../../constants/router'
import navigationService from '../../services/navigationService'
import Icon from 'react-native-vector-icons/FontAwesome';


const lockIcon = require('../../assets/login/lock.png')
const personIcon = require('../../assets/login/person.png')
const bgImage = require('../../assets/kulliye.png')



export default function LoginScreen({ navigation }) {


    const [username, addUserName] = useState('')
    const [password, addPassword] = useState('')
    const [loading, addLoading] = useState(false)
    // const { isConnected } = useNetInfo()
    const [visible, setVisibility] = React.useState(false);
    const icon = !visible ? 'eye-slash' : 'eye';


    function showToast(message, type) {
        // Toast.show({
        //     type: type,
        //     text: message,
        //     buttonText: 'Tamam',
        //     duration: 3000,
        // })
    }

    function onPressLogin() {
        // if (isConnected == false) {
        //     showToast('Lütfen internet bağlantınızı kontrol ediniz.')
        //     return
        // }

        // if (username.length == 0 || password.length == 0) {
        //     showToast('Lütfen gerekli alanları giriniz.')
        //     return
        // }


        addLoading(true)
        callApi(apiUrl + '/auth/login', { username: username, password: password }, (res) => {
            debugger
            addLoading(false)
            if (res.status == -1) {
                Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı');


            } else {
                helpers.setStorage('userData', res.data).then(a => {

                    navigationService.navigate(router.tab)
                })
            }
        })
    }

    const blur = Platform.OS == 'ios' ? 3 : 2

    return (


        <ImageBackground
            source={bgImage}
            style={styles.bg}
        // blurRadius={blur}
        >
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView style={styles.root}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <View style={styles.logoWrapper}>
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={require('../../assets/fors3.png')}
                            />
                            <View style={{ height: 10 }}></View>
                            <Text style={styles.title}>
                                T.C. CUMHURBAŞKANLIĞI
                            </Text>
                            <View style={{ height: 8 }}></View>

                            <Text type="h1White" style={styles.subTitle}>
                                CBOT
                            </Text>
                        </View>
                        <View style={styles.wrapperOpacity}>
                            <View>
                                <View style={styles.inputWrap}>
                                    <View style={styles.iconWrap}>
                                        <ImageBackground
                                            source={personIcon}
                                            style={styles.icon}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <TextInput
                                        autoCapitalize="none"
                                        value={username}
                                        keyboardType={'email-address'}
                                        placeholder="Kullanıcı Adı"
                                        onChangeText={(text) => {
                                            addUserName(text)
                                        }}
                                        placeholderTextColor="#FFF"
                                        style={styles.input}
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <View style={styles.iconWrap}>
                                        <ImageBackground
                                            source={lockIcon}
                                            style={styles.icon}
                                            resizeMode="contain"
                                        />
                                    </View>

                                    <TextInput
                                        value={password}
                                        placeholderTextColor="#FFF"
                                        placeholder="Şifre"
                                        onChangeText={addPassword}
                                        style={styles.input}
                                        secureTextEntry={!visible}
                                    />
                                    <Icon
                                        name={icon}
                                        color={'white'}
                                        onPress={() => setVisibility(!visible)}
                                        style={{ textAlign: 'center', textAlignVertical: 'center' ,top:8}}
                                        size={22}
                                    />
                                </View>

                                {loading ? (
                                    <ActivityIndicator />
                                ) : (
                                    <TouchableOpacity
                                        style={{}}
                                        success
                                        block
                                        onPress={onPressLogin}
                                    >
                                        <Text style={{ textAlign: 'center', height: 30, color: 'white', fontSize: 16, top: 5 }}>Giriş yap</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>


    )
}

