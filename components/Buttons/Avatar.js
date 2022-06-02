import React, { useState } from 'react';

// Modal
import ProfileModal from '../Modals/ProfileModal';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, secondary, accent } = colors;

// StyledView
const StyledView = styled.TouchableOpacity`
background-color: ${ primary };
flex-direction: column;
width: 45px;
height: 45px;
border-radius: 15px;
justify-content: center;
align-items: center;
border-width: 2px;
border-color: ${ secondary }
`;

const Avatar = (props) => {
   // Modal
   const [modalVisible, setModalVisible] = useState(false);
   const [headerText, setHeaderText] = useState(' ');
   const [loggingOut, setLoggingOut] = useState(false);

   const onLogout = async () => {
     setLoggingOut(true);


     // Clear user credentials

     setLoggingOut(false);
     setModalVisible(false);

     // Move to login
  };

  const showProfileModal = (user) => {
     setHeaderText(user);
     setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onAvatarPress = () => {
    showProfileModal("Yakubu Amidu!")
  }

  return <>
  <StyledView onPress={onAvatarPress} style={props.imgContainerStyle}>
    <MaterialCommunityIcons name={"account"} size={30} color={accent}/>
  </StyledView>

  <ProfileModal modalVisible={modalVisible} headerText={headerText} buttonHandler={onLogout} loggingOut={loggingOut} hideModal={hideModal}/>
  </>
}

export default Avatar;