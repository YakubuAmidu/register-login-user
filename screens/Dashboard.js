import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton';
import RowContainer from '../components/Containers/RowContainer';
import BigText from '../components/Texts/BigText';
import PressableText from '../components/Texts/PressableText';
import MsgBox from '../components/Texts/MsgBox';
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
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleLogin = async (credentials, seSubmitting) => {
    try {
      setMessage(null);

      // Call to backend

      // Move to next page

      seSubmitting(false);
    } catch(err){
      setMessage('Login failded: ' + err.message);
      seSubmitting(false);
    }
  }

    return <MainContainer style={{ paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}>
       <TopBg />

       <MainContainer style={{ backgroundColor: 'transparent' }}>
         <BigText style={{ marginBottom: 25, fontWeight: 'bold', textAlign: 'left'}}>Hello! Walt</BigText>

         <InfoCard />
       </MainContainer>
    </MainContainer>
}

export default Dashboard;