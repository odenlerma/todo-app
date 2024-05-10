import React, {useCallback, useEffect, useState, useRef, useTransition } from 'react';
import { View, FlatList, Text, StyleSheet, Pressable } from 'react-native';

// additional modules
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

// custom imports
import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils'
import * as COMPONENTS from '@components'
import { ACTION_MODAL_SHOWHIDE, ACTION_BULK_DELETE_TASK, ACTION_BOOKMARK_TASK, ACTION_COMPLETE_TASK } from '@custom-redux/slice'
const AnimatedFlatlist = Animatable.createAnimatableComponent(FlatList);

const tabslist = ['Tasks','Bookmarks']

export default () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const flatlistRef = useRef()
    const tasks = useSelector((state) => state.tasks);

    // for bookmark or tasks tab
    const [currentTab, setCurrentTab] = useState('Bookmarks')

    // for sort alphabetically
    // 0 = unsort, 1 = asc sort, 2 = desc sort
    const [azToggle, setazToggle] = useState(0) 
    
    // for search by title
    const [searchToggle, setSearchToggle] = useState(false)
    const [searchText, setSearchText] = useState('')

    const [isPending, startTransition] = useTransition();

    const [bookmarkList, setBookmarkList] = useState([])
    const [tasksList, setTasksList] = useState([])

    // for bulk delete
    const [toggleBulkDelete, setToggleBulkDelete] = useState(false)
    const [bulkDeleteList, setBulkDeleteList] = useState([])

    useEffect(() => {
        sortList();
    }, [tasks])

    useEffect(() => {
        // listen to alphabetical arrange toggle
        sortList();
    }, [azToggle])

    const sortList = (search = searchText) => {
        let list = tasks;

        // search by title
        if(!UTILS.isEmpty(search)){
            list = list.filter((task) => task.title.includes(search))
        }

        // if alphabetically arranged
        if(azToggle == 1){
            list = UTILS.sort(list, 'asc', 'title');
        }else if(azToggle == 2){
            list = UTILS.sort(list, 'desc', 'title')
        }
        
        // separate bookmark to tasks
        let bklist = []

        for(let key in list){
            if(list[key].isBookmarked){
                bklist.push(list[key])
            }
        }

        // list for bookmark and taskslist
        setBookmarkList(bklist)
        setTasksList(list)
    }

    const changeTab = useCallback((tab) => {
        startTransition(() => {
            setCurrentTab(tab)

            // animate flatlist
            if(tab == 'Bookmarks'){
                flatlistRef.current.bounceInLeft(500)
            }else{
                flatlistRef.current.bounceInRight(500)
            }
        })
    }, [currentTab])

    const changeAzToggle = useCallback(() => {

        // set alphabetical toggle
        setazToggle(prev => {
            if(prev == 2){
                return 0
            }else{
                return prev + 1
            }
        })
    },[azToggle])

    const onSearchToggle = useCallback(() => {
        if(searchToggle){
            setSearchText('') // clear search input
            startTransition(() => {
                sortList('')
            })
        }

        setSearchToggle(prev => !prev)
    },[searchToggle])

    const onChangeSearch = useCallback((e) => {
        setSearchText(e)
        startTransition(() => {
            sortList(e)
        })
    }, [searchText])


    const onTaskCheck = useCallback((id) => {
        // check/uncheck task
        dispatch(ACTION_COMPLETE_TASK(id))
    }, [tasks])

    const onTaskBookmark = useCallback((id) => {
        // bookmark task
        dispatch(ACTION_BOOKMARK_TASK(id))
    }, [tasks])

    // Saving array of id's for bulk delete
    const onToBulkDelete = (id, bool) => {
        if(bool){
            setBulkDeleteList(prev => [...prev, id])
        }else{
            setBulkDeleteList(prev => prev.filter(taskid => taskid !== id))
        }
    }

    // toggle show bulkd delete
    const onToggleBulkDelete = useCallback(() => {
        setToggleBulkDelete(!toggleBulkDelete)
        if(!toggleBulkDelete == false){
            setBulkDeleteList([])
        }
    }, [toggleBulkDelete])


    // bulk delete from tasks
    const onBulkDelete = () => {
        if(bulkDeleteList.length == 0){
            dispatch(ACTION_MODAL_SHOWHIDE({
                visible: true,
                modalType: 'messageModal',
                params: {
                    message: 'No selected task to delete',
                }
            }))
            return
        }

        dispatch(ACTION_MODAL_SHOWHIDE({
            visible: true,
            modalType: 'confirmModal',
            params: {
                buttonText: 'Delete', 
                message: `Are you sure you want to delete selected tasks?`,  
                modalTitle: 'Delete Tasks', 
                onClose: () => onToggleBulkDelete(),
                process: ()=> processBulkDelete(),
            }
        }))
        
    }

    const processBulkDelete = async () => {
        await dispatch(ACTION_BULK_DELETE_TASK(bulkDeleteList))
        setBulkDeleteList([])
    }



    return(
        <View style={STYLE.CONTAINER.main}>
            <COMPONENTS.CUSTOM_MAIN_HEADER navigation={navigation} />
            <View>
                {toggleBulkDelete ? (
                    <View style={STYLE.FLEX.RIGHT_CENTER_ROW}>
                        <COMPONENTS.CUSTOM_BUTTON
                            type='plain'
                            icon='delete'
                            onPress={onBulkDelete}
                        />
                         <COMPONENTS.CUSTOM_BUTTON
                            type='plain'
                            icon='close'
                            onPress={onToggleBulkDelete}
                        />
                    </View>
                ) : (
                    <>
                        <View style={styles.toolbarcontainer}>
                            <View style={STYLE.FLEX.LEFT_CENTER_ROW}>
                                {tabslist.map((tab) => (
                                    <COMPONENTS.CUSTOM_BUTTON
                                        key={tab}
                                        text={tab}
                                        type={currentTab == tab ? 'primary' : 'gray'}
                                        onPress={() => changeTab(tab)}
                                        customTextStyle='white_default'
                                        customStyles={styles.tabsbtn}
                                    />
                                ))}
                            </View>
                            <View style={STYLE.FLEX.LEFT_CENTER_ROW}>
                                <COMPONENTS.CUSTOM_BUTTON
                                    type='plain'
                                    icon='search'
                                    onPress={onSearchToggle}
                                />
                                <COMPONENTS.CUSTOM_BUTTON
                                    type={azToggle == 0 ? 'plain' : 'outline'}
                                    icon={azToggle == 2 ? 'sortr' : 'sort'}
                                    onPress={changeAzToggle}
                                />
                            </View>
                        </View>
                        {searchToggle && (
                            <COMPONENTS.CUSTOM_INPUT
                                placeholder='Search by task title...'
                                value={searchText}
                                onChangeText={onChangeSearch}
                            />
                        )}
                    </>
                )}
            </View>
            {isPending ? <COMPONENTS.CUSTOM_LOADER /> : (
                <AnimatedFlatlist 
                    ref={flatlistRef}
                    data={currentTab == 'Bookmarks' ? bookmarkList : tasksList}
                    renderItem={({item}) => (
                        <TASK_ITEM 
                            onToggle={onTaskCheck} 
                            onBookmark={onTaskBookmark} 
                            navigation={navigation}
                            item={item}
                            onLongPress={onToggleBulkDelete}
                            sendToDelete={onToBulkDelete}
                            showDelete={toggleBulkDelete}
                            bulkDeleteList={bulkDeleteList}
                        />)}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<EMPTY_TASK navigation={navigation} />}
                />
            )}
        </View>
    )
}

const EMPTY_TASK = ({navigation}) => (
    <View style={STYLE.FLEX.CENTER}>
        <COMPONENTS.CUSTOM_SVG_NOTASK size={250} />
        <COMPONENTS.CUSTOM_TEXT numberOfLines={2} textType="primary_default" customStyles={styles.centerText} text="Couldn't find any tasks? Let's get started listing your tasks for a more productive day!" />
        <COMPONENTS.CUSTOM_BUTTON
            text='+ Add Task'
            type="secondary"
            onPress={() => navigation.navigate('AddTask')}
            customStyles={styles.addtaskbtn}
        />
    </View>
)

const PRESSABLE_SIZE = 32;
const TASK_ITEM = ({
    item, 
    navigation,
    onToggle = () => {}, 
    onBookmark = () =>{},
    onLongPress = () => {},
    sendToDelete = () => {},
    showDelete = false,
    bulkDeleteList = [],
}) => {
    const toDelete = bulkDeleteList.includes(item?.id)

    const settings = {
        CHECKBOX: item?.isCompleted ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/>,
        BOOKMARK: item?.isBookmarked ? <COMPONENTS.CUSTOM_SVG_MARKED size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_NOTMARKED size={PRESSABLE_SIZE} />,
        titleTextType: item?.isCompleted ? 'gray_default_strikethrough' : 'default',
        descTextType: item?.isCompleted ? 'gray_sm_strikethrough' : 'black_sm',
        container: item?.isBookmarked ? styles.taskitem.bookmarkcontainer : styles.taskitem.taskcontainer,
        containerCompleted: item?.isCompleted ? styles.taskitem.completedcontainer : {},
    }

    const onReadMore = () => {
        navigation.navigate('ViewTask', {todoItem: item})
    }

    const onPressCheckbox = useCallback(() => {
        sendToDelete(item.id, !toDelete)
    }, [toDelete])

    return (
        <View style={STYLE.FLEX.ENDTOEND_ROW}>
            {showDelete ? (
                <Pressable onPress={onPressCheckbox} style={styles.taskitem.deletecheckbox}>
                    {toDelete ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/> }
                </Pressable>
            ) : <View />}
            <Pressable onLongPress={onLongPress} style={[styles.taskitem.container, settings.container, settings.containerCompleted]}>
            <View style={styles.taskitem.titlecontainer}>
                <Pressable onPress={() => onToggle(item.id)}>
                    {settings.CHECKBOX}
                </Pressable>
                <COMPONENTS.CUSTOM_TEXT text={item.title} textType={settings.titleTextType} customStyles={styles.taskitem.title} />
                <Pressable onPress={() => onBookmark(item.id)}>
                    {settings.BOOKMARK}
                </Pressable>
            </View>
            <COMPONENTS.CUSTOM_TEXT text={item.description} textType={settings.descTextType} numberOfLines={4} />
            <View style={styles.taskitem.cardfooter}>
                <COMPONENTS.CUSTOM_BUTTON
                    text='View Task'
                    type='plain_nopadding'
                    customTextStyle='primary_sm'
                    onPress={onReadMore}
                />
                <COMPONENTS.CUSTOM_TEXT text={UTILS.convertDate(item.date)} textType='gray_sm' numberOfLines={4} />
            </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    taskitem: {
        container: {
            padding: STYLE.SPACING.default,
            borderWidth: STYLE.BORDERWIDTH,
            borderRadius: STYLE.BORDERRADIUS,
            marginBottom: STYLE.SPACING.s3,
            borderColor: STYLE.COLORS.primary,
            flex: 1,
        },
        taskcontainer: {
            
        },
        deletecheckbox:{
            marginRight: STYLE.SPACING.default
        },
        bookmarkcontainer: {
            backgroundColor: STYLE.COLORS.secondary,
        },
        completedcontainer: {
            opacity: 0.6,
        },
        title: {
            flex: 1,
            marginHorizontal: STYLE.SPACING.s3,
            fontWeight: STYLE.FONTWEIGHT
        },
        titlecontainer: {
            ...STYLE.FLEX.ENDTOEND_ROW,
            marginBottom: STYLE.SPACING.s1
        },
        cardfooter: {
            ...STYLE.FLEX.ENDTOEND_ROW,
            paddingTop: STYLE.SPACING.s3
        }
    },
    addtaskbtn: {
        marginTop: STYLE.SPACING.default
    },
    centerText: {
        textAlign: 'center',
        marginVertical: STYLE.SPACING.default
    },
    tabsbtn: {
        marginRight: STYLE.SPACING.s1
    },
    toolbarcontainer: {
        ...STYLE.FLEX.ENDTOEND_ROW,
        paddingBottom: STYLE.SPACING.default
    }
})