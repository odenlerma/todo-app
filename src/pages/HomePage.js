import React, {useCallback, useEffect, useState} from 'react';
import { View, FlatList, Text, StyleSheet, Pressable } from 'react-native';

import * as STYLE from '@styles/global';
import * as COMPONENTS from '@components'
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        title: 'First Item ahsd ahsda ahsdba hasdga ahsdghasdghasd',
        description: 'Test description',
        date: 'May 7, 2024',
        completed: false,
    },
    {
        id: '2',
        title: '2nd Item',
        description: 'Test description',
        date: 'May 7, 2024',
        completed: true,
    },
];

const BOOKMARK = [
    {
        id: '1',
        title: 'First Item',
        description: 'Test description',
        date: 'May 7, 2024',
        completed: false,
    },
    {
        id: '2',
        title: '2nd Item',
        description: 'Test description',
        date: 'May 7, 2024',
        completed: true,
    },
];

const tabslist = ['Bookmarks', 'Tasks']

export default () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [currentTab, setCurrentTab] = useState('Bookmarks')
    const [azToggle, setazToggle] = useState(0) // 0 = unsort, 1 = az sort, 2 = za sort
    const [searchToggle, setSearchToggle] = useState(false)

    const changeTab = useCallback((tab) => {
        setCurrentTab(tab)
    }, [currentTab])

    const changeAzToggle = useCallback(() => {
        setazToggle(prev => {
            if(prev == 2){
                return 0
            }else{
                return prev + 1
            }
        })
    },[azToggle])

    const onSearchToggle = useCallback(() => {
        setSearchToggle(prev => !prev)
    },[searchToggle])

    const RENDER_MANAGETASK = () => {
        return(
            <View>
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
                    />
                )}
            </View>
        )
    }

    return(
        <View style={STYLE.CONTAINER.main}>
            <COMPONENTS.CUSTOM_MAIN_HEADER navigation={navigation} />
            <RENDER_MANAGETASK />
            <FlatList 
                data={DATA}
                renderItem={({item}) => <TASK_ITEM item={item} listType={currentTab} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={<EMPTY_TASK navigation={navigation} />}
            />
        </View>
    )
}

const EMPTY_TASK = ({navigation}) => (
    <View style={STYLE.FLEX.CENTER}>
        <COMPONENTS.CUSTOM_SVG_NOTASK size={250} />
        <COMPONENTS.CUSTOM_TEXT numberOfLines={2} textType="primary_secondary" customStyles={styles.centerText} text="Couldn't find any tasks? Let's get started listing your tasks for a more productive day!" />
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
    listType, 
    onToggle = () => {}, 
    onBookmark = () =>{}
}) => {
    const CHECKBOX = item?.completed ? <COMPONENTS.CUSTOM_SVG_CHECK size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_UNCHECKED size={PRESSABLE_SIZE}/>;
    const BOOKMARK = listType == tabslist[0] ? <COMPONENTS.CUSTOM_SVG_MARKED size={PRESSABLE_SIZE} /> : <COMPONENTS.CUSTOM_SVG_NOTMARKED size={PRESSABLE_SIZE} />

    return (
        <View style={[styles.taskitem.container, listType == tabslist[0] ? styles.taskitem.bookmarkcontainer : styles.taskitem.taskcontainer]}>
          <View style={styles.taskitem.titlecontainer}>
            <Pressable onPress={onToggle}>
                {CHECKBOX}
            </Pressable>
            <COMPONENTS.CUSTOM_TEXT text={item.title} customStyles={styles.taskitem.title} />
            <Pressable onPress={onBookmark}>
                {BOOKMARK}
            </Pressable>
          </View>
          <COMPONENTS.CUSTOM_TEXT text={item.description} textType='black_sm' numberOfLines={4} />
          <View style={styles.taskitem.cardfooter}>
            <COMPONENTS.CUSTOM_BUTTON
                text='Read more'
                type='plain_nopadding'
                customTextStyle='primary_sm'
            />
            <COMPONENTS.CUSTOM_TEXT text={item.date} textType='gray_sm' numberOfLines={4} />
          </View>
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
        },
        taskcontainer: {
            
        },
        bookmarkcontainer: {
            backgroundColor: STYLE.COLORS.secondary,
        },
        title: {
            flex: 1,
            marginHorizontal: STYLE.SPACING.s3
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