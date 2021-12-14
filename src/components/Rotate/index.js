import React from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { AppConsumer } from '../../constants/ThemeProvider'

let RotateValueHolder = new Animated.Value(0);

const RotateData = RotateValueHolder.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const StartImageRotateFunction = () => {
  RotateValueHolder.setValue(0);
  Animated.timing(RotateValueHolder, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start(() => StartImageRotateFunction());
}

export default Rotate = (props) => {

  StartImageRotateFunction();

  return (
    <AppConsumer>
      {appConsumer => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: appConsumer.theme.colors.light, }}>
          <Animated.Image
            style={{
              width: 60,
              height: 60,
              transform: [{ rotate: RotateData }],
            }}
            source={require('../../assets/fors3.png')}
          />
          {props.children}
        </View>
      )}
    </AppConsumer>
  );
}

