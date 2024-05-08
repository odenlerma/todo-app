import React, { useState } from 'react';

// Additional modules
import DatePicker from 'react-native-date-picker'
import { Pressable, View } from 'react-native';

// Custom imports
import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils'
import { CUSTOM_INPUT } from './input';

export const CUSTOM_INPUT_DATETIME = ({
    defaultValue = new Date(),
    changeDateTime = () => {},
    mode = 'date',
    title = 'Select Date',
}) => {
    const [date, setDate] = useState(null)
    const [isOpenPicker, setisOpenPicker] = useState(false)

    const showPickerModal = () => {
        setisOpenPicker(!isOpenPicker)
    }

    const changeDate = () => {

    }

    const PICKER = () => (
        <DatePicker
            textColor={STYLE.COLORS.black}
            date={!UTILS.isEmpty(date) ? date : new Date()}
            onDateChange={changeDate}
            mode={mode}
            androidVariant='nativeAndroid'
        />
    )

    return(
        <Pressable onPress={showPickerModal}>
            <CUSTOM_INPUT
                isDisabled={true}
                defaultValue={date}
                placeholder='MMMM DD, YYYY'
            />
            {isOpenPicker ? <PICKER/> : <View />}
        </Pressable>
    )
}