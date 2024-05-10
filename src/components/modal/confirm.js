import React from 'react';
import { View, StyleSheet} from 'react-native';
//REDUX
import { useDispatch } from 'react-redux'

// CUSTOM
import * as STYLE from '@styles/global';
import { ACTION_MODAL_SHOWHIDE } from '@custom-redux/slice' 


// COMPONENTS
import { CUSTOM_TEXT } from '../text';
import { CUSTOM_BUTTON } from '../button';

import { MODALSTYLES } from './index';

export function CUSTOM_CONFIRM_MODAL({ modalReducer }){
    const dispatch = useDispatch()
    const ConfirmAction = modalReducer.params

    const closeModal = () => {
        if(ConfirmAction?.onClose){
            ConfirmAction?.onClose()
        }

        dispatch(ACTION_MODAL_SHOWHIDE({visible: false}))
    }

    const onPressConfirm = async () => {
        if(ConfirmAction?.process){
            ConfirmAction?.process()
        }

        dispatch(ACTION_MODAL_SHOWHIDE({visible: false}))
    }

    return(
        <View style={MODALSTYLES.modalInner}>
            <CUSTOM_TEXT text={ConfirmAction?.modalTitle || 'Confirmation'} textType='black_secondary' 
            fontFamily='secondary_bold' customStyles={styles.titlestyle}/>
            
            <View style={styles.contentcontainerstyle}>
                <CUSTOM_TEXT

                text={ConfirmAction?.message || 'Are you sure to remove?'}
                numberOfLines={0}
                />
            </View>

            <CUSTOM_BUTTON 
                onPress={onPressConfirm}
                type='primary'
                text={ConfirmAction?.buttonText || 'Delete'}
                customStyles={styles.confirmBtn}
            />

            <CUSTOM_BUTTON 
                onPress={closeModal}
                type='gray'
                text={ConfirmAction?.buttonTextClose || 'Cancel'}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    italic: {
       fontStyle: 'italic'
    },
    titleStyle: {
        marginVertical: STYLE.SPACING.default
    },
    contentcontainerstyle: {
        marginTop: STYLE.SPACING.default,
        marginBottom: STYLE.SPACING.s8
    },
    confirmBtn: {
        marginBottom: STYLE.SPACING.s2
    }
})