import React from 'react';
import { View, StyleSheet } from 'react-native';

// NODE MODULES
import Modal from "react-native-modal";
import { SafeAreaView } from 'react-native-safe-area-context';

//REDUX
import { useSelector, useDispatch } from 'react-redux'

// CUSTOM
import * as STYLE from '@styles/global';
import * as UTILS from '@helper/utils';
import { ACTION_MODAL_SHOWHIDE } from '@custom-redux/slice' 


// COMPONENTS
import { CUSTOM_MESSAGE_MODAL } from './message'
import { CUSTOM_CONFIRM_MODAL } from './confirm';

/***
modalType = 
  'messageModal',
  'confirmModal',
  'customModal',
****/


export function CUSTOM_MODAL(props){
  const dispatch = useDispatch()
  const modalReducer = useSelector((state)=>state.modal)

  const customModalContent = () => {
    let heightStyle = styles.modalInner
    return(
      <View style={[props.customStyle, heightStyle, STYLE.FLEX.CENTER]}>
        {!UTILS.isEmpty(modalReducer?.params?.customComponent) && modalReducer?.params?.customComponent}
      </View>
    )
  }

  const closeModal = () => {
      if(modalReducer?.params?.disableBack){
        return
      }else{
        dispatch(ACTION_MODAL_SHOWHIDE({visible: false}))
      }
  }


  return(
    <Modal 
      swipeDirection={modalReducer?.params?.enableSwipeDown ? ['down'] : null} 
      style={styles.modalContainer} 
      onSwipeComplete={(direction)=> closeModal()}
      isVisible={modalReducer.visible}
      animationOut="fadeOut" 
      animationIn="fadeIn"
      backdropTransitionOutTiming={0} 
      propagateSwipe={true}
      avoidKeyboard={true}
      backdropOpacity={0.4}
      backdropColor={STYLE.COLORS.black}
      hideModalContentWhileAnimating={true}
      onBackdropPress={()=>closeModal()}
      onBackButtonPress={()=>closeModal()}
      >
        <SafeAreaView style={styles.safeViewStyle}>
          <View style={[
              props?.customStyle, 
              styles.modalView, 
              STYLE.FLEX.CENTER]}>
            {
            modalReducer.modalType == 'messageModal' ? 
            <CUSTOM_MESSAGE_MODAL modalReducer={modalReducer}/> 
            : 
            modalReducer.modalType == 'confirmModal' ?   
            <CUSTOM_CONFIRM_MODAL modalReducer={modalReducer}/> 
            :
            customModalContent()
            }
          </View>
        </SafeAreaView>
    </Modal>
  )
}

const MODALVIEW = {
	margin: 0,
	backgroundColor: STYLE.COLORS.white,
}

const MODALINNER = {
  width: '100%',
	padding: STYLE.SPACING.default,
}


const styles = StyleSheet.create({
  safeViewStyle: {
    backgroundColor: STYLE.COLORS.white,
    borderTopRightRadius: STYLE.BORDERRADIUS,
    borderTopLeftRadius: STYLE.BORDERRADIUS,
    overflow: 'hidden',
    paddingBottom: STYLE.SPACING.default
  },
  modalView : {
    ...MODALVIEW,
    minHeight: 200,
    alignItems: "center",
  },
  modalInner: {
      ...MODALINNER,
      minHeight: 200,
  },
  modalContainer: {
      justifyContent: 'flex-end', 
      margin: 0,
  },
})

export const MODALSTYLES = styles