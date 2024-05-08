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
    - customTextStyle - string - (options: see text.js styles for options) if you want other text styles.
*/

const BUTTON_ICON_SIZE = STYLE.SIZE.m
const iconlist = {
    add: <SVG.CUSTOM_SVG_ADD size={BUTTON_ICON_SIZE} />,
    check: <SVG.CUSTOM_SVG_CHECK size={BUTTON_ICON_SIZE} />,
    close: <SVG.CUSTOM_SVG_CLOSE size={BUTTON_ICON_SIZE} />,
    delete: <SVG.CUSTOM_SVG_DELETE size={BUTTON_ICON_SIZE}/>,
    edit: <SVG.CUSTOM_SVG_EDIT size={BUTTON_ICON_SIZE}/>,
    search: <SVG.CUSTOM_SVG_SEARCH size={BUTTON_ICON_SIZE} />,
    sort: <SVG.CUSTOM_SVG_SORT size={BUTTON_ICON_SIZE} />,
    sortr: <SVG.CUSTOM_SVG_SORTR size={BUTTON_ICON_SIZE} />,
    check: <SVG.CUSTOM_SVG_CHECK size={BUTTON_ICON_SIZE} />,
    unchecked: <SVG.CUSTOM_SVG_UNCHECKED size={BUTTON_ICON_SIZE} />,
    mark: <SVG.CUSTOM_SVG_MARKED size={BUTTON_ICON_SIZE} />,
    unmarked: <SVG.CUSTOM_SVG_NOTMARKED size={BUTTON_ICON_SIZE} />,
}

const BUTTON  = ({
    type = 'primary',
    text = '',
    customStyles = {},
    customTextStyle = null,
    icon = null,
    isBlock = true,
    ...props
}) => {

    const textStyle = customTextStyle != null ? customTextStyle : (type == 'secondary' ? 'primary_secondary' : 'white_secondary')
    return(
        <View style={!isBlock ? STYLE.FLEX.LEFT_CENTER_ROW : {}}>
            <Pressable
                {...props}
            >
                <View style={[styles[type], customStyles]}>
                    {icon != null ? iconlist[icon] : <View />}
                    {text != null ? <CUSTOM_TEXT text={text} textType={textStyle} /> : <View /> }
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
    borderWidth: STYLE.BORDERWIDTH,
    borderColor: 'transparent',
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
    },
    plain_nopadding: {
       
    },
    outline: {
        ...button,
        borderColor: STYLE.COLORS.gray,
        borderWidth: STYLE.BORDERWIDTH
    }
})

