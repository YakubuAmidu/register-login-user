import React from 'react';

// Styled components
import styled from 'styled-components/native';

import { ScreenHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { primary, secondary, black } = colors;

const CardView = styled.View`
flex-direction: row;
height: ${ ScreenHeight * 0.2}px;
background-color: ${ primary };
border-width: 2px;
border-color: ${ secondary };
padding: 20px;
border-radius: 15px;
overflow: hidden;
elevation: 5;
shadow-color: ${ black };
shadow-offset: 0px 2px;
shadow-opacity: 0.25;
shadow-radius: 4px;
`

const InfoCard = (props) => {
  return <CardView {...props}>{props.children}</CardView>
}

export default InfoCard;