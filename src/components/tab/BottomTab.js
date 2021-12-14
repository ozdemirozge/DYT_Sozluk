import React, { useState, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, Image, SafeAreaView, SafeAreaViewBase, Keyboard } from 'react-native';
import router from '../../constants/router'
import { AppConsumer } from '../../constants/ThemeProvider'
import Icon from 'react-native-vector-icons/Ionicons';
import navigationService from '../../services/navigationService';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BottomTab(props) {
  const { navigate } = props.navigation;

  const selector = (routeName) => {
    navigate(routeName);
  };
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

  }, [])

  const SHADOW = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6.27,

    elevation: 10,
  };
  const WIDTH = 65;

  return (
    <AppConsumer>
      {appConsumer => (
        <SafeAreaView style={{    backgroundColor: appConsumer.theme.colors.bottom,height:'9%'}}>
        <View
          style={{
           
            backgroundColor: appConsumer.theme.colors.bottom,
            bottom: 0,
            height:66,
            bottomOffset:33,
            width: '100%',
            flexDirection: 'row',
            ...SHADOW,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.colors.bottom,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => { navigationService.navigate(router.notificationAndSurvey) }}>

              <AntDesign name="notification" color={appConsumer.theme.colors.gray} size={26} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 30, width: 113, alignItems: 'center', }}>

            <Image
              source={appConsumer.theme.colors.bottomImage ? require("../../assets/bottom.png") : require('../../assets/bottom3.png')}
              style={{
                height: appConsumer.theme.colors.bottomImage ? 60 : 60, width: 102, top: 0, shadowColor: appConsumer.theme.colors.white,
                shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.84, shadowRadius: 6.27,
              }}
            />
            <TouchableOpacity
              style={{
                shadowColor: appConsumer.theme.colors.white,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.84,
                shadowRadius: 6.27,
                elevation: 10,
                position: 'absolute',
                zIndex: 1,
                height: WIDTH,
                width: WIDTH,
                borderRadius: WIDTH / 2,
                backgroundColor: appConsumer.theme.colors.primary,
                top: -14,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => { navigationService.navigate(router.home) }}>
              <Image
                source={require('../../assets/fors3.png')}
                style={{ width: 60, height: 60, borderRadius:30}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: appConsumer.theme.colors.bottom,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => { navigationService.navigate(router.profile) }}>

              <Icon name="settings-sharp" color={appConsumer.theme.colors.gray} size={26} style={{}} />

            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
      )}
    </AppConsumer>
  );
};
