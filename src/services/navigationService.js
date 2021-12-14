import { Keyboard } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export const navigatorRef = createNavigationContainerRef()
let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator = navigatorRef;
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params
    })
  );
}

function setParams(params) {
  navigator = navigatorRef;
  navigator.dispatch(
    NavigationActions.setParams(params)
  );
}

function openDrawer() {
  navigator = navigatorRef;
  navigator.dispatch(
    DrawerActions.openDrawer()
  );
  Keyboard.dismiss();
}

function closeDrawer() {
  navigator = navigatorRef;
  navigator.dispatch(
    DrawerActions.closeDrawer()
  );
  Keyboard.dismiss();
}

function goBack() {

  navigator = navigatorRef;
  navigator.dispatch({
    ...CommonActions.goBack(),
    source: 'route.key,',
    target: 'home',
  });
}

export default {
  navigate,
  goBack,
  openDrawer,
  setParams,
  closeDrawer,
  setTopLevelNavigator,
};