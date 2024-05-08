import React, {useEffect} from 'react'
import { View, StyleSheet } from 'react-native'

import { FLEX } from '@styles/global';
import { CUSTOM_SVG_LOGO } from './svg';
import { CUSTOM_BUTTON } from './button';


export const CUSTOM_MAIN_HEADER = ({
    navigation = null
}) => {
    return(
        <View style={FLEX.ENDTOEND_ROW}>
            <CUSTOM_SVG_LOGO size={120}/>
            <CUSTOM_BUTTON
                icon="add"
                type='secondary'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainheader: {
    }
})