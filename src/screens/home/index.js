import React, { useState, useCallback, useEffect, useRef } from 'react'
import { GiftedChat, Bubble, Send, InputToolbar, Message, MessageText, Time, SendButton } from '../../components/react-native-gifted-chat'
import { Image, InputAccessoryView, Text, TextInput, View, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalList from '../../components/Modal'
import callApi from '../../services/apiServices'
import { apiUrl } from '../../../app.json'
import { AppConsumer } from '../../constants/ThemeProvider'

export default function HomeScreen() {
  const [messages, setMessages] = useState([]);
  const [commands, setCommands] = useState([]);
  const [typing, setTyping] = useState(false);
  const [txt, setTxt] = useState('');
  const [tempCommand, setTempCommand] = useState('');
  const [tempParameters, setTempParameters] = useState('Aranacak Kelime');
  const [deletedTempParameters, setDeletedTempParameters] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const myElement = useRef(null)


  const wordData = [
    {
      Kelime: "Çözünme",
      Tanımı: "Çözünme maddenin çözücü içinde dağılması olayı"
    },
    {
      Kelime: "Çözelti",
      Tanımı: "İyon ve moleküllerin homojen karışımı"
    },
    {
      Kelime: "Osmoz",
        Tanımı: "Yarı geçirgen bir zarın iki tarafındaki konsantrasyonu az olandan çok olana doğru suyun geçişidir"
   },
  ]

  useEffect(() => {

    setMessages([
      {
        _id: 0,
        text: 'Merhaba size nasıl yardımcı olabilirim 🙂 ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])


  function onModalItemPress(item) {
    null
  }

  function clear() {
    setTempParameters('Mesajınız')
    setTempCommand('')
    setTxt('')
    setDeletedTempParameters('')
    setCommands('')
    myElement.current.clear();

  }

 
  function onSendClick() {
    if (tempCommand == '') {
      sendMessage(txt.trimStart(), null)

    } else {
      sendMessage(tempCommand, tempParameters)

    }
  }

  const openModal = () => {

  };

  function openMicrophone() {

  }
  function closeModal() {
    setModalVisible(false);
  }

  const sendMessage = function sendMessage(commandName) {
    debugger
    var tempMessages = [];
    setTyping(true);
    setTxt('')
    var userMessage = {
      _id: messages.length,
      text: commandName,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    tempMessages = [userMessage].concat(tempMessages)

    wordData.map((item) => {
      debugger

      if (commandName === item.Kelime) {


        var botMessage = {
          _id:messages.length+1,
          text: item.Tanımı,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        };
        tempMessages = [botMessage].concat(tempMessages);


      }

    })
    setMessages(previousMessages => GiftedChat.append(previousMessages, tempMessages))
    myElement.current.clear();
    setTempParameters('Aranacak Kelime')
    setTempCommand('')
    setTxt('')
    setDeletedTempParameters('')
    setCommands('')

  }



  function renderBubble(props) {
    return (
      <AppConsumer>
        {appConsumer => (
          <Bubble
            {...props}

            wrapperStyle={{
              left: {
                backgroundColor: appConsumer.theme.colors.buble

              },
              right: {
                backgroundColor: appConsumer.theme.colors.blue
              },
            }}
          />
        )}
      </AppConsumer>
    );
  }

  function renderAvatar(props) {
    return (
      <View style={{ justifyContent: 'center', bottom: 8 }}>
        <Image
          source={require('../../assets/fors3.png')}
          style={{ width: 40, height: 40, }}
        />
      </View>
    );
  }

  return (
    <>
      <AppConsumer>
        {appConsumer => (
          <View style={{ flex: 1, backgroundColor: appConsumer.theme.colors.light, }}>
            <View style={{ flex: 0.98, flexDirection: 'column', backgroundColor: appConsumer.theme.colors.light, }}>

              <View>
                <Image resizeMode={'contain'}
                  style={{ width: 390, height: 560, alignItems: 'center', justifyContent: 'center', alignContent: 'center', position: 'absolute', }} source={require('../../assets/kulliye.png')} />
              </View>

              <ModalList
                isVisible={isModalVisible}
                onCloseModal={closeModal}
                onPressItem={(a) => onModalItemPress(a)}
                data={commands}
              />

              <View style={{ flex: 1 }} >

                <GiftedChat
                  bottomOffset={Platform.OS === "ios" ? 70 : 1}
                  messages={messages}
                  text={txt}
                  
                  onInputTextChanged={a => setTxt(a)}
                  renderInputToolbar={(props) => {
                    return (
                      <>

                        <View style={{ backgroundColor: appConsumer.theme.colors.primary, flexDirection: 'row', height: 50, alignItems: 'center' }}>
                          <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo
                              style={{ fontSize: 25, color: appConsumer.theme.colors.gray, }}
                              name="menu" onPress={openModal} />
                          </View>
                          <View style={{ flex: 0.85, height: 43 }}>
                            <View style={{ flex: 1, backgroundColor: appConsumer.theme.colors.buble, borderRadius: 20, flexDirection: 'row' }}>
                              <View style={{ flex: 1, flexDirection: 'row', marginLeft: '5%', marginTop: '2%' }}>


                                {
                                  tempCommand.length > 0 ?
                                    <>
                                      <Icon
                                        style={{ fontSize: 25, color: appConsumer.theme.colors.gray, alignItems: 'center', alignContent: 'center' }}
                                        name="close-circle"
                                        onPress={() => clear()} />
                                      <TextInput editable={false}> </TextInput>
                                      <TextInput editable={false} multiline={true}
                                        style={{ fontSize: 16, fontWeight: 'normal', color: appConsumer.theme.colors.white }} >
                                        {tempCommand}
                                      </TextInput>
                                    </>
                                    :
                                    null
                                }
                                <TextInput editable={false}> </TextInput>
                                <TextInput multiline={true} ref={myElement}
                                  style={{ fontSize: 16, fontWeight: 'normal', color: appConsumer.theme.colors.white, flex: 1, }}
                                  onChange={(x) => {
                                    setTxt(tempCommand + ' ' + x.nativeEvent.text)
                                    setTempParameters((x.nativeEvent.text.trim().length == 0) ? (tempCommand.trim().length != 0 ? deletedTempParameters : 'Mesajınız') : x.nativeEvent.text)
                                  }} placeholder={tempParameters} placeholderTextColor={appConsumer.theme.colors.placeHolder}>
                                </TextInput>

                              </View>

                              <View style={{ flex: 0.15 }}>
                                {txt.length > 0 ? <Send
                                  {...props}
                                  containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', }} >
                                  <View style={{ flex: 0.9, alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Icon
                                      style={{ fontSize: 25, color: appConsumer.theme.colors.gray, alignItems: 'center', alignContent: 'center' }}
                                      name="send"
                                      onPress={() => onSendClick()}
                                    />

                                  </View>
                                </Send> : null}
                              </View>
                            </View>
                          </View>
                          <View style={{ flex: 0.12, alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome
                              style={{ fontSize: 25, color: appConsumer.theme.colors.gray, }}
                              name="microphone"
                              onPress={openMicrophone}
                            /></View>

                        </View>

                      </>
                    )
                  }}

                  renderBubble={(props) => renderBubble(props)}
                  renderAvatar={renderAvatar}
                  user={{
                    _id: 1,

                  }}
                />
              </View>
            </View>
          </View>
        )}
      </AppConsumer>
    </>
  )
}
