import React from 'react';
import Rotate from '../Rotate'
import { AppConsumer } from '../../constants/ThemeProvider'

import {
    View,
    StyleSheet,
    Modal, Button, ActivityIndicator,
    Text
} from 'react-native';

const Loading = () => (
    <AppConsumer>
        {appConsumer => (
            <View style={styles.container}>
                <Rotate>
                    <Text style={{ fontSize: 15,  color: appConsumer.theme.colors.text,top: 3}}>Yükleniyor</Text>
                </Rotate>
            </View>
        )}
    </AppConsumer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
  
        justifyContent: 'center',
    },
   
})

export default Loading;

// export const ModalLoading = ({ visible, text }) => {
//     return (
//         <AppConsumer>
//             {appConsumer => (
//                 <Modal transparent={true} onRequestClose={() => null} visible={visible}>
//                     <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
//                         <View style={{ borderRadius: 10, backgroundColor: appConsumer.theme.colos.light, padding: 25 }}>
//                             <ActivityIndicator size="large" />
//                             <Text style={{ fontSize: 16, fontWeight: '300' }}>{text}</Text>
//                         </View>
//                     </View>
//                 </Modal>
//             )}
//         </AppConsumer>
//     )
// }