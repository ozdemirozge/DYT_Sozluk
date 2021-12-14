import { StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    logoWrapper: {
        alignItems: 'center',
    },
    wrapper: {
        padding: 20,
        flex: 1,
    },
    btnText:{
        flex:1,
        backgroundColor:'red'
    },


    wrapperOpacity: {
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 5,
        padding: 10,
        marginTop: 15,
    },
    bg: {
        
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    inputWrap: {
        flexDirection: 'row',
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },

    iconWrap: {
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    title: {
        color: 'white',
        fontWeight: '700',
        fontSize:18
    },
    subTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize:16
    },
})
