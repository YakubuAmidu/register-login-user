import React from 'react';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { tertiary } = colors;

// Styled Text
const StyledText = styled.Text`
  font-size: 13px;
  color: ${tertiary};
  text-align: left;
`

const SmallText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default SmallText;