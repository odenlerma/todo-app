import React, {useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, Pressable } from 'react-native';

// Additional imports
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

// Custom imports
import * as STYLE from '@styles/global';
import * as COMPONENTS from '@components';


const item = {
    completed: true,
    bookmarked: false,

}
export default () => {
    const navigation = useNavigation()
    const routes = useRoute()
    const { params } = routes;


    return(
        <View
            style={STYLE.CONTAINER.main}
        >
            <COMPONENTS.CUSTOM_SUB_HEADER title='View' navigation={navigation} />
            <View style={styles.scrollviewheight}>
                <ScrollView>
                    <COMPONENTS.CUSTOM_TEXT text={params?.todoItem?.title} textType='primary_secondary' customStyles={styles.textstyle} numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text={params?.todoItem?.date} textType='gray_default' customStyles={styles.textstyle} numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text={params?.todoItem?.description} numberOfLines={0} />
                </ScrollView>
            </View>
            <FOOTER_TOOLS todoItem={params?.todoItem} navigation={navigation}/>
        </View>
    )
}

const PRESSABLE_SIZE = 32;
const FOOTER_TOOLS = ({
    todoItem,
    navigation
}) => {
    const CHECKBOX = todoItem?.isCompleted ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/>;
    const BOOKMARK = todoItem?.isBookmarked ? <COMPONENTS.CUSTOM_SVG_MARKED size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_NOTMARKED size={PRESSABLE_SIZE} />

    const onPressEdit = () => {
        navigation.navigate('EditTask')
    }

    return(
        <View style={styles.footercontent.container}>
            <Pressable style={styles.footercontent.pressable}>
                {CHECKBOX}
            </Pressable>
            <Pressable style={styles.footercontent.pressable}>
                {BOOKMARK}
            </Pressable>
            <Pressable onPress={onPressEdit} style={styles.footercontent.pressable}>
                <COMPONENTS.CUSTOM_SVG_EDIT size={PRESSABLE_SIZE}/>
            </Pressable>
            <Pressable>
                <COMPONENTS.CUSTOM_SVG_DELETE size={PRESSABLE_SIZE}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        marginBottom: STYLE.SPACING.s1
    },
    scrollviewheight: {
        height: '80%'
    },
    footercontent: {
        container: {
           ...STYLE.FLEX.CENTER_ROW,
           paddingVertical: STYLE.SPACING.s6
        },
        pressable: {
            marginRight: STYLE.SPACING.s8
        }
    },
})