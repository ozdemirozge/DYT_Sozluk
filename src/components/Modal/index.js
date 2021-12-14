import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, Image, View, SafeAreaViewBase, Text, StyleSheet, TouchableOpacity, Modal, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AppConsumer } from '../../constants/ThemeProvider'


export default function ModalList({ isVisible, data, onCloseModal, onPressItem }) {

    const [isModalVisible, setModalVisible] = useState(isVisible);

    useEffect(() => {
        setModalVisible(isVisible)

    }, [isVisible])
    return (
        <AppConsumer>
            {appConsumer => (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}

                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: appConsumer.theme.colors.primary, flex: 1, marginTop: '30%', marginBottom: '50%', borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15, backgroundColor: appConsumer.theme.colors.primary, }}>
                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <Text style={{ color: 'orange' }}>İşlem listesi</Text>
                                    <Text style={{ fontWeight: '600', fontSize: 17, marginTop: 5, color: appConsumer.theme.colors.text, }}>Sana yardım edebileceğim işlemler :</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 0.2, justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                                    <Icon onPress={() => { onCloseModal() }}
                                        name="md-close"
                                        size={32}
                                        color={appConsumer.theme.colors.white}
                                    />

                                </View>
                            </View>

                            <View style={{ paddingLeft: 10, paddingRight: 20, backgroundColor: appConsumer.theme.colors.light, top: 10, borderRadius: 10 }}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) =>
                                        <>
                                            <Text style={{ flex: 1, padding: '3%', fontSize: 18, color: appConsumer.theme.colors.text, }} onPress={() => onPressItem(item)}>{item.commandName} </Text>
                                            <View style={{ flex: 1, borderWidth: 0.5, backgroundColor: appConsumer.theme.colors.light, borderColor: appConsumer.theme.colors.white }}>
                                            </View>
                                        </>
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </AppConsumer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderTopWidth: 1,






    },
});