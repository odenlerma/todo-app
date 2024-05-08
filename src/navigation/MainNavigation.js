import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom imports
import HomePage from '@pages/HomePage';
import AddTask from '@pages/AddTask';
import ViewTask from '@pages/ViewTask';
import EditTask from '@pages/EditTask';

const headlessScreenOptions = {
    headerMode: 'none',
    options: {
      headerShown: false,
    }
}

const TASK_STACK = createStackNavigator();
const TASK_STACK_NAVIGATOR = () => (
  <TASK_STACK.Navigator>
    <TASK_STACK.Screen name='ViewTask' component={ViewTask} {...headlessScreenOptions}/>
    <TASK_STACK.Screen name='EditTask' component={EditTask} {...headlessScreenOptions}/>
  </TASK_STACK.Navigator>
)


const ROOT_STACK = createStackNavigator();
const MAIN_STACK_NAVIGATOR = () => (
  <ROOT_STACK.Navigator>
    <ROOT_STACK.Screen name='HomePage' component={ViewTask} {...headlessScreenOptions}/>
    <ROOT_STACK.Screen name='AddTask' component={AddTask} {...headlessScreenOptions}/>
    <ROOT_STACK.Screen name='ViewTask' component={TASK_STACK_NAVIGATOR} {...headlessScreenOptions}/>
  </ROOT_STACK.Navigator>
)

export default () => {
    return(
        <NavigationContainer>
            <MAIN_STACK_NAVIGATOR />
        </NavigationContainer>
    )
}