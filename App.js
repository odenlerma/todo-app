import React, {useEffect} from 'react';
import {View, LogBox, Button} from 'react-native';

export default function App(props) {
  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <View>
      <Button title='Save'></Button>
      <Button title='Console'></Button>
    </View>
  );
}
