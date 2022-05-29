import React, { useState, useEffect } from 'react';
import SmallText from '../Texts/SmallText';
import PressableText from '../Texts/PressableText';

// Styled components
import styled from 'styled-components/native';

import { StatusBarHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { primary } = colors;

const StyledView = styled.View`
align-items: center;
`

const ResendTimer = ({ activeResend, setActiveResend, targetTimeInSeconds, resendEmail, resendStatus, ...props }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [targetTime, setTargetTime] = useState(null);

  let ResendTimerInterval;

  const triggerTimer = (targetTimeInSeconds = 30) => {
    setTimeLeft(targetTimeInSeconds);
    setActiveResend(false);

    const finalTime = +new Date() + targetTimeInSeconds * 1000;
    ResendTimerInterval = setInterval(() => calculateTimeLeft(finalTime), 1000);
  }

  const calculateTimeLeft = (finalTime) => {
    const difference = finalTime - +new Date();
    if(difference >= 0){
      setTimeLeft(Math.round(difference / 1000));
    } else {
      clearInterval(ResendTimerInterval);
      setActiveResend(true);
      setTimeLeft(null);
    }
  }

  useEffect(() => {
    triggerTimer(targetTimeInSeconds);

    return () => {
    clearInterval(ResendTimerInterval);
    }
  }, [])

  return <StyledView {...props}>
    <SmallText>Didn't received the email? </SmallText>

    <PressableText onPress={() => resendEmail(triggerTimer)}>Resend</PressableText>

    {!activeResend && (
    <SmallText>In 
      <SmallText style={{ fontWeight: 'bold' }}> { timeLeft || targetTime } </SmallText> seconds(s)
    </SmallText>)}
  </StyledView>
}

export default ResendTimer;