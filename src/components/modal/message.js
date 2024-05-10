import React, { Component, useState, useEffect, useCallback, useRef } from 'react';
import { ScrollView, View, StatusBar, StyleSheet, Platform, ViewPropTypes, Dimensions, KeyboardAvoidingView} from 'react-native';

//REDUX
import { useDispatch, useSelector, connect } from 'react-redux'

// CUSTOM
import * as UTILS from '@helper/utils';
import * as STYLE from '@styles/global';
import { ACTION_MODAL_SHOWHIDE } from '@custom-redux/slice'
import { LOTTIE_SUCCESS, LOTTIE_ERROR, LOTTIE_INFO } from '@helper/constants'


// COMPONENTS
import { CUSTOM_TEXT } from '../text';
import { CUSTOM_BUTTON } from '../button';
import { CUSTOM_LOTTIE } from '../lottie';

import { MODALSTYLES } from './index';

export function CUSTOM_MESSAGE_MODAL({modalReducer}){
    const dispatch = useDispatch()
    const type = modalReducer.params.contentType
    const icon = type == 'success' ? LOTTIE_SUCCESS : type == 'error' ?  LOTTIE_ERROR :  LOTTIE_INFO;
    const messageTypeText = type == 'success' ? 'Success' : type == 'error' ?  'Error' :  'Information';


    const closeModal = () => {
        dispatch(ACTION_MODAL_SHOWHIDE({visible: false}))
    }

    return(
        <View style={MODALSTYLES.modalInner}>
            <View style={STYLE.FLEX.CENTER}>
                <CUSTOM_LOTTIE size={150} source={icon} />
                <CUSTOM_TEXT text={messageTypeText} textType='black_m' fontFamily='secondary_bold' customStyles={styles.messagetext}/>
                <CUSTOM_TEXT text={modalReducer?.params?.message || ''}  numberOfLines={null} customStyles={styles.messageContentSubText}/>
            </View>

            {modalReducer?.params?.additionalComponent}

            <CUSTOM_BUTTON 
                onPress={closeModal}
                type='gray'
                text={'Close'}
            />
        </View>
    )

}

const styles = StyleSheet.create({
	messageContentIcon: {
		overflow: "hidden", 
	},
	messageContentSubText: {
		marginBottom: STYLE.SPACING.s7,
        textAlign: 'center'
	},
    messagetext: {
        marginVertical:  STYLE.SPACING.default
    }
})