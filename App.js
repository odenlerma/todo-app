import React, {useEffect} from 'react';
import {View, LogBox, Button, Pressable, Animated, Text} from 'react-native';

// This import is to initialize gesture handler
import 'react-native-gesture-handler';

// Additional module imports
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

// Custom imports
import MainNavigation from './src/navigation/MainNavigation';
import { store } from '@custom-redux/store';
import { CUSTOM_MODAL } from './src/components/modal';


export default function App(props) {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <MainNavigation />
          <CUSTOM_MODAL />
      </SafeAreaProvider>
    </Provider>
  );
}
