import React, {useEffect} from 'react'
import { View, StyleSheet, Pressable } from 'react-native'

import { FLEX, SPACING } from '@styles/global';
import { CUSTOM_SVG_CLOSE, CUSTOM_SVG_LOGO } from './svg';
import { CUSTOM_BUTTON } from './button';
import { CUSTOM_TEXT } from './text';


export const CUSTOM_MAIN_HEADER = ({
    navigation = null
}) => {

    const onPressNavigate = () => {
        navigation.navigate('AddTask')
    }

    return(
        <View style={FLEX.ENDTOEND_ROW}>
            <CUSTOM_SVG_LOGO size={120}/>
            <CUSTOM_BUTTON
                icon="add"
                type='secondary'
                onPress={onPressNavigate}
            />
        </View>
    );
}

export const CUSTOM_SUB_HEADER = ({
    navigation = null,
    title=''
}) => {

    const onPressNavigate = () => {
        navigation.goBack()
    }
    
    return(
        <View style={styles.subheader}>
            <View style={FLEX.LEFT_CENTER_ROW}>
                <CUSTOM_TEXT text={title} textType='primary_lg'/>
                <CUSTOM_TEXT text=' Task' textType='secondary_lg' />
            </View>
            <Pressable onPress={onPressNavigate}>
                <CUSTOM_SVG_CLOSE />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    subheader: {
        paddingVertical: SPACING.default,
        ...FLEX.ENDTOEND_ROW
    }
})