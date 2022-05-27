import React from 'react';

// Icons 
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styled components
import styled from 'styled-components/native';

import { ScreenHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { secondary, accent } = colors;

const IconBg = styled.View`
background-color: ${ secondary };
width: ${ ScreenHeight * 0.15 }px;
height: ${ ScreenHeight * 0.15}px;
border-radius: ${ ScreenHeight * 0.02 }px;
justify-content: center;
align-items: center;
align-self: center;
`

const IconHeader = ({ name, color, ...props }) => {
  return <IconBg style={{ ...props.style }}><MaterialCommunityIcons name={name} size={ ScreenHeight * 0.08 } color={ color ? color : accent } /></IconBg>
}

export default IconHeader;