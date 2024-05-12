import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

// Custom imports
import { mmkv } from '@custom-redux/store';
import HomePage from '@pages/HomePage';
import AddTask from '@pages/AddTask';
import ViewTask from '@pages/ViewTask';
import EditTask from '@pages/EditTask';

import { ACTION_MODAL_SHOWHIDE, ACTION_ACKNOWLEDGE_ERROR } from '@custom-redux/slice';

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
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.tasks);
    
    useEffect(() => {
        // LISTEN TO ERROR
        if(error){
          dispatch(ACTION_MODAL_SHOWHIDE({
            visible: true,
            modalType: 'messageModal',
            params: {
                message: 'An error has occured',
                contentType: 'error',
                customOnClose: () => acknowledgeClose(),
            }
          }))
        }
    }, [error])

    const acknowledgeClose = () => {
      dispatch(ACTION_ACKNOWLEDGE_ERROR())
    }

    
    useEffect(() => {
        // ==== DELETE TASKS FROM MMKV - FOR TESTING PURPOSES ==== //
        /* set  "clean" to true to clean every app reload, false to do not clean */
        if(__DEV__){
          let clean = false; 
          if(clean){
            mmkv.set('storeTasks', '[]')
            if(__DEV__) console.log('storeTasks clean')
          }
        }
    }, []);

    return(
        <NavigationContainer>
            <MAIN_STACK_NAVIGATOR />
        </NavigationContainer>
    )
}