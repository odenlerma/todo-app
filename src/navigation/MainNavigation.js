import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom imports
import HomePage from '@pages/HomePage';
import AddTask from '@pages/AddTask';
import ViewTask from '@pages/ViewTask';
import EditTask from '@pages/EditTask';

import { mmkv } from '@custom-redux/store';
import { useSelector } from 'react-redux';

const headlessScreenOptions = {
    headerMode: 'none',
    options: {
      headerShown: false,
    }
}


const ROOT_STACK = createStackNavigator();
const MAIN_STACK_NAVIGATOR = () => (
  <ROOT_STACK.Navigator>
    <ROOT_STACK.Screen name='HomePage' component={HomePage} {...headlessScreenOptions}/>
    <ROOT_STACK.Screen name='AddTask' component={AddTask} {...headlessScreenOptions}/>
    <ROOT_STACK.Screen name='ViewTask' component={ViewTask} {...headlessScreenOptions}/>
    <ROOT_STACK.Screen name='EditTask' component={EditTask} {...headlessScreenOptions}/>
  </ROOT_STACK.Navigator>
)

export default () => {
    const taskList = useSelector((state) => state.tasks);
    useEffect(() => {
        // LISTEN TO TASKS REDUCER CHANGES AND SAVE TO MMKV IF CHANGE OCCUR
        mmkv.set('taskList', JSON.stringify(taskList));
    }, [taskList])

    return(
        <NavigationContainer>
            <MAIN_STACK_NAVIGATOR />
        </NavigationContainer>
    )
}