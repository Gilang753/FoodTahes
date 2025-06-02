import React from 'react';
import Route from './src/navigation/Route';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

export default function App() {
  async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();

    console.log('FCM token', token);
  }
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  registerAppWithFCM();
  return <Route />;
}
