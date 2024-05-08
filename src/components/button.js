import React, { useEffect } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

import * as STYLE from '@styles/global';
import { CUSTOM_TEXT } from './text';
import * as SVG from './svg';

/* PARAMS
    - type - string (options: 'primary', 'secondary', 'gray', 'plain') - button type
    - text - string - display text inside button
    - customStyles - object - additional styles for button
    - icon - string (options: see iconlist) - left icon component
    - isBlock - bool - full width == true, hug content == false
*/

const BUTTON_ICON_SIZE = STYLE.SIZE.m
const iconlist = {
    add: <SVG.CUSTOM_SVG_ADD size={BUTTON_ICON_SIZE} />,
    check: <SVG.CUSTOM_SVG_CHECK size={BUTTON_ICON_SIZE} />,
    close: <SVG.CUSTOM_SVG_CLOSE size={BUTTON_ICON_SIZE} />,
    delete: <SVG.CUSTOM_SVG_DELETE size={BUTTON_ICON_SIZE}/>,
    edit: <SVG.CUSTOM_SVG_EDIT size={BUTTON_ICON_SIZE}/>,
}

const BUTTON  = ({
    type = 'primary',
    text = 'Default Button',
    customStyles = {},
    icon = null,
    isBlock = true,
    ...props
}) => {
    return(
        <View style={!isBlock ? STYLE.FLEX.LEFT_CENTER_ROW : {}}>
            <Pressable
                {...props}
            >
                <View style={[styles[type], customStyles]}>
                    {icon != null ? iconlist[icon] : <View />}
                    {text != null ? <CUSTOM_TEXT text={text} textType="white_secondary" /> : <View /> }
                </View>
            </Pressable>
        </View>
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
    plain: {
        ...button
    }
})

