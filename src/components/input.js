import { Text, View, StyleSheet, Keyboard, Platform } from 'react-native'
import React, { Component, useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


import * as UTILS from '@helper/utils';
import * as STYLE from '@styles/global'

import { CUSTOM_TEXT } from './text'

export const CUSTOM_INPUT = ({
    refInner = null,
    placeholder='',
    title='',
    isDisabled = false,
    textInputStyle = {},
    ...props
}) => {
    const inputRef = useRef(null)

    return (
        <View style={styles.container}>
            <CUSTOM_TEXT
                text={title}
                customStyles={styles.labelcontainer}
            />
        
            <View style={isDisabled ? styles.textinputDisabled : styles.textinput}>
                {!isDisabled ? (
                    <TextInput
                        autoCompleteType='off'
                        autoCorrect={false}
                        autoCapitalize='none'
                        ref={refInner != null ? refInner : inputRef}
                        placeholder={placeholder || title || ''}
                        placeholderTextColor={STYLE.COLORS.gray}
                        {...props}
                        style={[styles.text_default, textInputStyle]}
                    />
                ):(
                    <CUSTOM_TEXT
                        text={!UTILS.isEmpty(props?.defaultValue) ? props?.defaultValue : placeholder}
                        customTextStyles={!UTILS.isEmpty(props?.defaultValue) ? styles.text_default : styles.text_gray}
                    />
                )
                }
            </View>
        </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        marginBottom: STYLE.SPACING.s4
    },
    labelcontainer: {
        marginBottom: STYLE.SPACING.s2
    },
    text_default: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.default
    },
    text_gray:{
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.default
    },
    textinput: {
        ...Platform.select({
            ios: {
                paddingVertical: STYLE.SPACING.s3,
            },
            android: {
                paddingVertical: 0,
            },
            default: {
                paddingVertical: STYLE.SPACING.s3,
            },
        }),
        paddingHorizontal: STYLE.SPACING.default,
        borderRadius: STYLE.BORDERRADIUS,
        borderWidth: STYLE.BORDERWIDTH, 
        borderColor: STYLE.COLORS.gray,
        overflow: 'hidden',
        backgroundColor: STYLE.COLORS.white,
    },
    textinputDisabled: {
        ...Platform.select({
            ios: {
                paddingVertical: STYLE.SPACING.s3,
            },
            android: {
                paddingVertical: 0,
            },
            default: {
                paddingVertical: STYLE.SPACING.s3,
            },
        }),
        paddingHorizontal: STYLE.SPACING.default,
        overflow: 'hidden',
        backgroundColor: STYLE.COLORS.white,
    },
})

export const INPUTSTYLES = styles