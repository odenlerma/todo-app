import React, {useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, Pressable } from 'react-native';

// Additional imports
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// Custom imports
import * as STYLE from '@styles/global';
import * as COMPONENTS from '@components';


const item = {
    completed: true,
    bookmarked: false,

}
export default () => {
    const navigation = useNavigation()

    return(
        <View
            style={STYLE.CONTAINER.main}
        >
            <COMPONENTS.CUSTOM_SUB_HEADER title='View' navigation={navigation} />
            <View style={{flexGrow: 1}}>
                <ScrollView>
                    <COMPONENTS.CUSTOM_TEXT text='Code Mobile App for Legal Match' textType='primary_secondary' numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text='May 7, 2024' textType='gray_default' numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text='' numberOfLines={100000}/>
                </ScrollView>
            </View>
            <FOOTER_TOOLS />
        </View>
    )
}

const PRESSABLE_SIZE = 32;
const FOOTER_TOOLS = ({

}) => {
    const CHECKBOX = item?.completed ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/>;
    const BOOKMARK = item?.bookmarked ? <COMPONENTS.CUSTOM_SVG_MARKED size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_NOTMARKED size={PRESSABLE_SIZE} />


    return(
        <View style={styles.footercontent.container}>
            <Pressable style={styles.footercontent.pressable}>
                {CHECKBOX}
            </Pressable>
            <Pressable style={styles.footercontent.pressable}>
                {BOOKMARK}
            </Pressable>
            <Pressable style={styles.footercontent.pressable}>
                <COMPONENTS.CUSTOM_SVG_EDIT size={PRESSABLE_SIZE}/>
            </Pressable>
            <Pressable>
                <COMPONENTS.CUSTOM_SVG_DELETE size={PRESSABLE_SIZE}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    footercontent: {
        container: {
           ...STYLE.FLEX.CENTER_ROW,
           paddingVertical: STYLE.SPACING.s6
        },
        pressable: {
            marginRight: STYLE.SPACING.s8
        }
    }
})