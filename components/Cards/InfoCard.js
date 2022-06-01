import React from 'react';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

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
`;

const CardSection = styled.View`
 justify-content: space-between;
 align-items: flex-start;
`;

const InfoCard = (props) => {
  return <CardView {...props}>
    <CardSection style={{ width: '60%' }}>
     <RegularText style={{ fontWeight: 'bold'}}>Balance</RegularText>
     <RegularText style={{ fontWeight: 'bold', fontSize: 25 }}>$ 13,288.65</RegularText>
     <SmallText>13/05/22</SmallText>
    </CardSection>

    <CardSection style={{ width: '40%' }}>

    </CardSection>
  </CardView>
}

export default InfoCard;