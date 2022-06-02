import React, { useState } from 'react';
import { View } from 'react-native';

// Text
import SmallText from '../Texts/SmallText';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Styled component
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, tertiary, secondary, accent, lightGray } = colors;

// Input Fields
const InputFields = styled.TextInput`
 background-color: ${ primary };
 padding: 15px;
 padding-left: 65px;
 padding-right: 55px;
 border-radius: 10px;
 font-size: 16px;
 height: 60px;
 margin-top: 3px;
 margin-bottom: 10px;
 color: ${tertiary}
 border-color: ${secondary}
 border-width: 2px;
`;

// Left Icon
const LeftIcon = styled.View`
position: absolute;
top: 35px;
left: 15px;
z-index: 1;
border-right-width: 2px;
border-color: ${ secondary };
padding-right: 10px;
`;

// Right Icon
const RightIcon = styled.TouchableOpacity`
position: absolute;
top: 35px;
right: 15px;
z-index: 1;
`;

const StyledTextInput = ({ icon, label, isPassword, ...props }) => {
  // useState
  const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
  const [hidePassword, setHidePassword] = useState(true);

  // CustomOnBlur function
  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(primary)
  }

  // CustomOnFocus funtion
  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(secondary)
  }

  return <View>
    <LeftIcon>
      <MaterialCommunityIcons name={icon} size={30} color={accent}/>
    </LeftIcon>

    <SmallText>{label}</SmallText>

     <InputFields {...props} placeholderTextColor={ lightGray } style={{ backgroundColor: inputBackgroundColor, ...props?.style }} onBlur={customOnBlur} onFocus={customOnFocus} secureTextEntry={isPassword && hidePassword}/>

     {
       isPassword && <RightIcon onPress={() => {
         setHidePassword(!hidePassword);
       }}>
         <MaterialCommunityIcons name={ hidePassword ? 'eye-off' : 'eye'} size={30} color={tertiary}/>
       </RightIcon>
     }
  </View>
}

export default StyledTextInput;