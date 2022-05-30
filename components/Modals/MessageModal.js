import React from 'react';
import { Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BigText from '../Texts/BigText';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, black, success, fail, tertiary } = colors;

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

const MessageModal = ({ buttonHandler, type }) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
     visible={true}
    >
   <ModalPressableContainer onPress={buttonHandler}>
    <ModalView>
     <MaterialCommunityIcons name={ type === "success" ? "check-circle" : "close-circle" } size={100}
     color={ type === "success" ? success : fail }
     />

     <BigText style={{ fontSize: 25, color: tertiary, marginVertical: 10 }}>Heading</BigText>
    </ModalView>
   </ModalPressableContainer>
    </Modal>
  )
}

export default MessageModal;