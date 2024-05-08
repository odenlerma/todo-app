import React, { useEffect } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

import * as STYLE from '@styles/global';
import { CUSTOM_TEXT } from './text';


/* PARAMS
    - type string (options: 'primary', 'secondary', 'gray') - button type
    - text string - display text inside button
    - customStyles object - additional styles for button
*/
const BUTTON  = ({
    type = 'primary',
    text = 'Default Button',
    customStyles = {},
    ...props
}) => {
    return(
        <Pressable
            {...props}
        >
            <View style={[styles[type], customStyles]}>
                {/* {(icon != null || customIcon!=null) && iconPlace == 'left' && <BUTTON_ICON {...iconButton}/>} */}
                {text != null ? <CUSTOM_TEXT text={text} textType="white_secondary" /> : null }
            </View>
        </Pressable>
    );

}

export const CUSTOM_BUTTON = BUTTON

const button = {
    borderRadius: STYLE.BORDERRADIUS,
    paddingHorizontal: STYLE.SPACING.default,
    paddingVertical: STYLE.SPACING.s3,
    ...STYLE.FLEX.CENTER_ROW
}


const styles = StyleSheet.create({
    primary: {
        ...button,
        backgroundColor: STYLE.COLORS.primary
    },
    secondary: {
        ...button,
        backgroundColor: STYLE.COLORS.secondary
    },
    gray: {
        ...button,
        backgroundColor: STYLE.COLORS.gray
    },
})

