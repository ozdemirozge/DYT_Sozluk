import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/app.navigator'
import { NavigationContainer } from '@react-navigation/native';
import helpers from './src/helpers';
import { LoginStack } from './src/navigation/login.navigator';
import Loading from './src/components/Loading'
import { navigatorRef } from './src/services/navigationService';
import { View } from 'native-base';
import { ThemeProvider } from './src/constants/ThemeProvider';


const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    helpers.getStroge('userData').then(a => {
      if (!a) {
        setIsLogin(false)

      } else { setIsLogin(true) }
      setIsLoading(false)
    });
  }, [])

  return (

    <NavigationContainer ref={navigatorRef}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>

    </NavigationContainer>

  );
};


export default App;
