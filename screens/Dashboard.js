import React from 'react';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import Avatar from '../components/Buttons/Avatar';
import BigText from '../components/Texts/BigText';
import InfoCard from '../components/Cards/InfoCard';

// Custom colors
import { colors } from '../components/colors';
const { darkGray } = colors;

// Styled components
import styled from 'styled-components/native';
import { ScreenHeight } from '../components/shared';

const TopBg = styled.View`
background-color: ${ darkGray };
width: 100%;
height: ${ ScreenHeight * 0.3 }px;
border-radius: 30px;
position: absolute;
top: -30px;
`

const Dashboard = () => {
    return <MainContainer style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
       <TopBg />

       <MainContainer style={{ backgroundColor: 'transparent' }}>
         <BigText style={{ marginBottom: 25, fontWeight: 'bold', textAlign: 'left'}}>Hello! Walt</BigText>

         <InfoCard icon={"chart-timeline-variant"} title={"Balance"} value={"$ 13,288.65"} date={"13/05/22"} style={{ marginBottom: 25 }}/>

         <InfoCard icon={"chart-arc"} title={"Savings"} value={"$ 15,445.56"} date={"Last 6 month"}/>
       </MainContainer>
    </MainContainer>
}

export default Dashboard;