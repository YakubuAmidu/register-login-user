import React from 'react';

// Text
import SamllText from './SmallText';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { accent } = colors;

// Styled Pressable
const StyledPressable = styled.Pressable`
  padding-vertical: 5px;
  align-self: center;
`;

const PressableText = (props) => {
  return <StyledPressable onPress={props.onPress} {...props}>
    <SamllText style={{ color: accent }}>{props.children}</SamllText>
  </StyledPressable>
}

export default PressableText;