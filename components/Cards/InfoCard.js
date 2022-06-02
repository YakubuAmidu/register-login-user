import React from 'react';

// Text
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styled components
import styled from 'styled-components/native';

// Screen Height
import { ScreenHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { primary, secondary, black, accent } = colors;

// Card View
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
`;

// Card Section
const CardSection = styled.View`
 justify-content: space-between;
 align-items: flex-start;
`;

const InfoCard = ({ icon, value, date, title, color, ...props}) => {
  return <CardView style={{ ...props?.style }}>
    <CardSection style={{ width: '60%' }}>
     <RegularText style={{ fontWeight: 'bold'}}>{ title }</RegularText>
     <RegularText style={{ fontWeight: 'bold', fontSize: 25 }}>{ value }</RegularText>
     <SmallText>{ date }</SmallText>
    </CardSection>

    <CardSection style={{ width: '40%' }}>
      <MaterialCommunityIcons name={icon} size={ScreenHeight * 0.13} color={ color ? color : accent } />
    </CardSection>
  </CardView>
}

export default InfoCard;