import React from 'react';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, secondary, accent } = colors;

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
  return <StyledView {...props}>
    <MaterialCommunityIcons name={"account"} size={30} color={accent}/>
  </StyledView>
}

export default Avatar;