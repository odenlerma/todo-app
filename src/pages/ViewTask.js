import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, Pressable } from 'react-native';

// Additional imports
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

// Custom imports
import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils'
import * as COMPONENTS from '@components';
import { ACTION_MODAL_SHOWHIDE, ACTION_DELETE_TASK, ACTION_BOOKMARK_TASK, ACTION_COMPLETE_TASK } from '@custom-redux/slice'
import { CUSTOM_LOADER } from '../components/loader';


const item = {
    completed: true,
    bookmarked: false,

}
export default () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { tasks, isLoading } = useSelector((state) => state.tasks);
    const routes = useRoute()
    const { params } = routes;
    const [taskItem, setTaskItem] = useState(params?.todoItem)

    useEffect(() => {
        setTaskItem(prev => tasks.find(task => task.id == params?.todoItem?.id))
    }, [tasks])
    
    return(
        <View
            style={STYLE.CONTAINER.main}
        >
            <COMPONENTS.CUSTOM_SUB_HEADER title='View' navigation={navigation} />
            <View style={styles.scrollviewheight}>
                <ScrollView>
                    <COMPONENTS.CUSTOM_TEXT text={taskItem?.title} textType='primary_secondary' customStyles={styles.textstyle} numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text={UTILS.convertDate(taskItem?.date)} textType='gray_default' customStyles={styles.textstyle} numberOfLines={0}/>
                    <COMPONENTS.CUSTOM_TEXT text={taskItem?.description} numberOfLines={0} />
                </ScrollView>
            </View>
            <FOOTER_TOOLS dispatch={dispatch} isLoading={isLoading} todoItem={taskItem} navigation={navigation}/>
        </View>
    )
}

const PRESSABLE_SIZE = 32;
const FOOTER_TOOLS = ({
    todoItem,
    navigation,
    dispatch,
    isLoading
}) => {
    const CHECKBOX = todoItem?.isCompleted ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/>;
    const BOOKMARK = todoItem?.isBookmarked ? <COMPONENTS.CUSTOM_SVG_MARKED size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_NOTMARKED size={PRESSABLE_SIZE} />

    const onPressEdit = () => {
        navigation.navigate('EditTask', {todoItem: todoItem})
    }

    const onTaskCheck = () => {
        // check/uncheck task
        dispatch(ACTION_COMPLETE_TASK(todoItem?.id))
    }

    const onTaskBookmark = () => {
        // bookmark task
        dispatch(ACTION_BOOKMARK_TASK(todoItem?.id))
    }

    // bulk delete from tasks
    const onTaskDelete = () => {
        dispatch(ACTION_MODAL_SHOWHIDE({
            visible: true,
            modalType: 'confirmModal',
            params: {
                buttonText: 'Delete', 
                message: `Are you sure you want to delete this task?`,  
                modalTitle: 'Delete Tasks', 
                process: ()=> processBulkDelete(),
            }
        }))
    }

    const processBulkDelete = async () => {
        await dispatch(ACTION_DELETE_TASK(todoItem?.id))
        navigation.goBack()
    }

    return(
        <View style={styles.footercontent.container}>
            {isLoading ? <CUSTOM_LOADER /> : (
                <>
                    <Pressable onPress={onTaskCheck} style={styles.footercontent.pressable} >
                        {CHECKBOX}
                    </Pressable>
                    <Pressable onPress={onTaskBookmark} style={styles.footercontent.pressable}>
                        {BOOKMARK}
                    </Pressable>
                    <Pressable onPress={onPressEdit} style={styles.footercontent.pressable}>
                        <COMPONENTS.CUSTOM_SVG_EDIT size={PRESSABLE_SIZE}/>
                    </Pressable>
                    <Pressable onPress={onTaskDelete}>
                        <COMPONENTS.CUSTOM_SVG_DELETE size={PRESSABLE_SIZE}/>
                    </Pressable>
                </>
            )}
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