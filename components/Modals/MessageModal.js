import React from 'react';
import { Modal } from 'react-native';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, black } = colors;

const ModalPressableContainer = styled.Pressable`
flex: 1;
padding: 25px;
background-color: rgba(0, 0, 0, 0.7);
justify-content: center;
`;

const ModalView = styled.View`
 background-color: ${ primary };
 border-radius: 20px;
 width: 100%;
 padding: 35px;
 align-items: center;
 elevation: 5;
 shadow-color: ${ black };
 shadow-offset: 0px 2px;
 shadow-opacity: 0.25;
 shadow-radius: 4px;
`;

const MessageModal = ({ buttonHandler }) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
     visible={true}
    >
   <ModalPressableContainer onPress={buttonHandler}>
    <ModalView>

    </ModalView>
   </ModalPressableContainer>
    </Modal>
  )
}

export default MessageModal;