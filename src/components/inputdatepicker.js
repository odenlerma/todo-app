import React, { useCallback, useState } from 'react';
import { Pressable, Keyboard } from 'react-native';

// Additional modules
import DatePicker from 'react-native-date-picker'

// Custom imports
import * as UTILS from '@helper/utils'
import { CUSTOM_INPUT } from './input';


/**
 * value - Date obj - value for date
 * title - string - input title
 * setValue - function - set new value
 */
export const CUSTOM_INPUT_DATETIME = ({
    value = null,
    title = 'Select Date',
    setValue = () => {},
}) => {
    const [open, setOpen] = useState(false);
    const [storeDef, setStoreDef] = useState(value);

    const showPickerModal = useCallback(() => {
        Keyboard.dismiss()
        setOpen(!open)
    }, [open])

    return(
        <>
            <Pressable onPress={showPickerModal}>
                <CUSTOM_INPUT
                    isDisabled={true}
                    defaultValue={UTILS.convertDate(value)}
                    value={UTILS.convertDate(value)}
                    placeholder='YYYY-MM-DD'
                    title={title}
                />
            </Pressable>
            <DatePicker
                modal
                open={open}
                mode='date'
                date={value}
                onConfirm={(date) => {
                    setOpen(false)
                    setValue(date)
                }}
                onCancel={() => {
                    setOpen(false)
                    setValue(storeDef)
                }}
            />
        </>
    )
}