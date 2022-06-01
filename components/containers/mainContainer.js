import React from 'react';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary } = colors;

const StyledView = styled.View`
flex: 1;
padding: 25px;
background-color: ${ primary }
`

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>
}

export default MainContainer;