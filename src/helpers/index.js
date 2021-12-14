
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class helpers {
  static setStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {

    }
  }

  static getStroge = async(key) => {
    try {

    const value=  await  AsyncStorage.getItem(key)
      if (value !== null) {
        return JSON.parse(value)
      }
    } catch (e) {
    }
  }

  static removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
    }
  }
}
