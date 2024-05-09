import React, {useEffect, useRef} from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

// Additional imports
import { useNavigation } from '@react-navigation/native';

// Custom imports
import * as STYLE from '@styles/global';
import { CUSTOM_SUB_HEADER, CUSTOM_INPUT, CUSTOM_BUTTON, CUSTOM_INPUT_DATETIME } from '@components';


export default () => {
    const navigation = useNavigation()
    const titleRef = useRef()
    const descriptionRef = useRef()

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={STYLE.CONTAINER.main}
        >
            <CUSTOM_SUB_HEADER title='Edit' navigation={navigation} />
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
                        onSubmitEditing={() => descriptionRef.current.focus()}
                    />
                    <CUSTOM_INPUT
                        refInner={descriptionRef}
                        placeholder='Describe what you want to do...'
                        title='Task description'
                        multiline={true}
                        textInputStyle={styles.multilineTextinput}
                    />
                    <CUSTOM_INPUT_DATETIME
                        placeholder='What to do?'
                        title='Task title'
                    />
                </View>
                <CUSTOM_BUTTON
                    text='+ Add Task'
                />
            </ScrollView>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    multilineTextinput: {
        height: 150, 
        alignSelf: 'flex-start',
        textAlignVertical: "top"
    },
    form: {
        marginBottom: STYLE.SPACING.s5
    },
    scrollviewheight: {
        height: '100%'
    }
})