import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Button
import RegularButton from '../Buttons/RegularButton';

// Text
import BigText from '../Texts/BigText';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, accent, secondary, tertiary } = colors;

// Modal
import { ModalPressableContainer, ModalView } from './MessageModal';

// Styled View
const StyledView = styled.View`
background-color: ${ primary };
flex-direction: column;
width: 65px;
height: 65px;
border-radius: 15px;
justify-content: center;
align-items: center;
border-width: 2px;
border-color: ${ secondary }
`;

// Props
const ProfileModal = ({ modalVisible, buttonHandler, headerText, loggingOut, hideModal }) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
     visible={modalVisible}
    >
   <ModalPressableContainer onPress={hideModal}>
    <ModalView>
      <StyledView>
     <MaterialCommunityIcons name={ "account" } size={55}
     color={ accent }
     />
     </StyledView>

     <BigText style={{ fontSize: 25, color: tertiary, marginVertical: 20 }}>{ headerText }</BigText>
     
     {!loggingOut && <RegularButton onPress={buttonHandler}>Logout</RegularButton>}

     {loggingOut && <RegularButton disabled={true}>
       <ActivityIndicator size={"large"} color={primary} />
       </RegularButton>}

    </ModalView>
   </ModalPressableContainer>
    </Modal>
  )
}

export default ProfileModal;