import React from 'react';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { success, fail } = colors;

// Styled Text
const StyledText = styled.Text`
font-size: 13px;
color: ${(props) => (props.success ? success : fail )};
text-align: center;
`;

const MsgBox = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default MsgBox;