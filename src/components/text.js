import React, {useEffect} from 'react';
import { Text, StyleSheet, Animated } from 'react-native'

import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils'

/* PARAMS
    - textType - string (options: see styles for possible values) - text type
    - text - string - displayed text
    - numberOfLines - number - default is 1
    - customStyles - object - additional styles for text
    - ellipsizeMode - string - default is tail
*/
const TEXT = ({
        text = '', 
        numberOfLines = 1, 
        customStyles={},
        textType = 'default',
        ellipsizeMode = null,
        ...props
}) => {
    return(
        <Text
            style={[styles[textType], customStyles, numberOfLines == null ? styles.text: {}]} 
            adjustsFontSizeToFit={true}
            numberOfLines={numberOfLines}
            ellipsizeMode={!UTILS.isEmpty(ellipsizeMode) ? ellipsizeMode : 'tail'}>{text}
        </Text>
    )
}

export const CUSTOM_TEXT = React.memo(TEXT)

const styles = StyleSheet.create({
    text: {
        lineHeight: STYLE.SIZE.default,
    },

    // default
    default: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.default
    },
    white_default: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.default
    },
    secondary_default: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.default
    },
    gray_default: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.default
    },
    gray_default_strikethrough: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.default,
        textDecorationLine: 'line-through',
    },
    info_default: {
        ...STYLE.TEXTCOLOR.color_info,
        ...STYLE.TEXTFONTSIZE.default
    },
    success_default: {
        ...STYLE.TEXTCOLOR.color_success,
        ...STYLE.TEXTFONTSIZE.default
    },
    warning_default: {
        ...STYLE.TEXTCOLOR.color_warning,
        ...STYLE.TEXTFONTSIZE.default
    },
    danger_default: {
        ...STYLE.TEXTCOLOR.color_danger,
        ...STYLE.TEXTFONTSIZE.default
    },
    primary_default: {
        ...STYLE.TEXTCOLOR.color_primary,
        ...STYLE.TEXTFONTSIZE.default
    },


    // sm
    black_sm: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.sm
    },
    primary_sm: {
        ...STYLE.TEXTCOLOR.color_primary,
        ...STYLE.TEXTFONTSIZE.sm
    },
    white_sm: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.sm
    },
    secondary_sm: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.sm
    },
    gray_sm: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.sm
    },
    gray_sm_strikethrough: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.sm,
        textDecorationLine: 'line-through',
    },
    success_sm: {
        ...STYLE.TEXTCOLOR.color_success,
        ...STYLE.TEXTFONTSIZE.sm
    },
    warning_sm: {
        ...STYLE.TEXTCOLOR.color_warning,
        ...STYLE.TEXTFONTSIZE.sm
    },
    danger_sm: {
        ...STYLE.TEXTCOLOR.color_danger,
        ...STYLE.TEXTFONTSIZE.sm,
    },
    info_sm: {
        ...STYLE.TEXTCOLOR.color_info,
        ...STYLE.TEXTFONTSIZE.sm
    },


    // secondary
    black_secondary: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    white_secondary: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    secondary_secondary: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    gray_secondary: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.secondary,
    },
    gray_secondary_strikethrough: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.secondary,
        textDecorationLine: 'line-through',
    },
    success_secondary: {
        ...STYLE.TEXTCOLOR.color_success,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    warning_secondary: {
        ...STYLE.TEXTCOLOR.color_warning,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    danger_secondary: {
        ...STYLE.TEXTCOLOR.color_danger,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    info_secondary: {
        ...STYLE.TEXTCOLOR.color_info,
        ...STYLE.TEXTFONTSIZE.secondary
    },
    primary_secondary: {
        ...STYLE.TEXTCOLOR.color_primary,
        ...STYLE.TEXTFONTSIZE.secondary
    },


    // medium
    black_m: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.m
    },
    white_m: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.m
    },
    secondary_m: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.m
    },

    //lg
    black_lg: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.lg
    },
    white_lg: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.lg
    },
    secondary_lg: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.lg
    },


    //lg2
    white_lg2: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.lg2
    },


    //xl
    black_xl: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.xl
    },
    white_xl: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.xl
    },
    secondary_xl: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.xl
    },


    // xsm
    black_xsm: {
        ...STYLE.TEXTCOLOR.color_black,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    gray_xsm: {
        ...STYLE.TEXTCOLOR.color_gray,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    primary_xsm: {
        ...STYLE.TEXTCOLOR.color_primary,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    white_xsm: {
        ...STYLE.TEXTCOLOR.color_white,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    secondary_xsm: {
        ...STYLE.TEXTCOLOR.color_secondary,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    success_xsm: {
        ...STYLE.TEXTCOLOR.color_success,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    warning_xsm: {
        ...STYLE.TEXTCOLOR.color_warning,
        ...STYLE.TEXTFONTSIZE.xsm
    },
    danger_xsm: {
        ...STYLE.TEXTCOLOR.color_danger,
        ...STYLE.TEXTFONTSIZE.xsm
    },

})

export const TEXTSTYLES = styles;
