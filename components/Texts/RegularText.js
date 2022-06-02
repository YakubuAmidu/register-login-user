import React from 'react';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { tertiary } = colors;

// Styled Text
const StyledText = styled.Text`
  font-size: 15px;
  color: ${tertiary};
  text-align: center;
`

const RegularText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default RegularText;