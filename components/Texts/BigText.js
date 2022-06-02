import React from 'react';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { tertiary } = colors;

// Styled Text
const StyledText = styled.Text`
  font-size: 30px;
  color: ${tertiary};
  text-align: center;
`

const BigText = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default BigText;