import React, {useCallback, useEffect, useRef, useState} from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

// Additional imports
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Custom imports
import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils'
import { CUSTOM_SUB_HEADER, CUSTOM_INPUT, CUSTOM_BUTTON, CUSTOM_INPUT_DATETIME } from '@components';
import { ACTION_MODAL_SHOWHIDE, ACTION_ADD_TASK } from '@custom-redux/slice'


export default () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const { isLoading, error } = useSelector((state) => state.tasks)

    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [date, setDate] = useState(new Date())

    const showMessageModal = (message, type = 'info') => {
        dispatch(ACTION_MODAL_SHOWHIDE({
            visible: true,
            modalType: 'messageModal',
            params: {
                message: message,
                contentType: type
            }
        }))
    }

    const onPressAddTask = async () => {
        if(UTILS.isEmpty(title)){
            showMessageModal('Provide task title')
            return
        }

        if(UTILS.isEmpty(description)){
            showMessageModal('Provide task description')
            return
        }

        if(UTILS.isEmpty(date)){
            showMessageModal('Provide date')
            return
        }


        await dispatch(ACTION_ADD_TASK({
            id: UTILS.randomID(), 
            title: title, 
            description: description,
            date: date,
            isBookmarked: false,
            isCompleted: false,
        }))

        if(!isLoading){
            if(error){
                showMessageModal('An error has occured. Please try again later', 'warning')
            }else{
                showMessageModal('Task successfully added!', 'success')
                navigation.goBack();
            }
        }
    }

    const onChangeTitle = useCallback((e) => {
        setTitle(e)
    }, [title])

    const onChangeDescription = useCallback((e) => {
        setdescription(e)
    }, [description])

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={STYLE.CONTAINER.main}
        >
            <CUSTOM_SUB_HEADER title='Add' navigation={navigation} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.scrollviewheight}
            >
                <View style={styles.form}>
                    <CUSTOM_INPUT
                        refInner={titleRef}
                        placeholder='What to do?'
                        title='Task title'
                        returnKeyType='next'
                        onChangeText={onChangeTitle}
                        onSubmitEditing={() => descriptionRef.current.focus()}
                    />
                    <CUSTOM_INPUT
                        refInner={descriptionRef}
                        placeholder='Describe what you want to do...'
                        title='Task description'
                        multiline={true}
                        onChangeText={onChangeDescription}
                        textInputStyle={styles.multilineTextinput}
                    />
                    <CUSTOM_INPUT_DATETIME
                        placeholder='When do you expect the task to be completed?'
                        title='Date'
                        value={date}
                        setValue={setDate}
                    />
                </View>
            </ScrollView>

            <CUSTOM_BUTTON
                showLoader={isLoading}
                text='+ Add Task'
                onPress={onPressAddTask}
                customStyles={styles.btn}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    multilineTextinput: {
        height: 80, 
        alignSelf: 'flex-start',
        textAlignVertical: "top"
    },
    form: {
        marginBottom: STYLE.SPACING.s5
    },
    scrollviewheight: {
        height: '100%'
    },
    btn: {
        marginBottom: STYLE.SPACING.default
    }
})