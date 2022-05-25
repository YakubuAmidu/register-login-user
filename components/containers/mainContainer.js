import React from 'react';

// StatusBarHeight
import { StatusBarHeight } from '../shared';

// Colors
import { colors } from '../colors';
const { primary } = colors;

// Styled components
import styled from 'styled-components/native';

const StyledView = styled.View`
 flex: 1;
 padding: 25px;
 padding-top: ${StatusBarHeight + 30}px;
 background-color: ${ primary }
`

const mainContainer = (props) => {
  return (
    <StyledView {...props}>{props.children}</StyledView>
  )
}

export default mainContainer;