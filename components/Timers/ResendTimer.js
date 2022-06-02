import React, { useState, useEffect } from 'react';

// Texts
import SmallText from '../Texts/SmallText';
import PressableText from '../Texts/PressableText';

// Row Container
import RowContatiner from '../Containers/RowContainer';

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { accent, fail, success  } = colors;

// Styled View
const StyledView = styled.View`
align-items: center;
`;

// Resent Text
const ResendText = styled(SmallText)`
 color: ${ accent };
  ${(props) => {
   const { resendStatus } = props;
    if(resendStatus == 'Failed!'){
      return `color: ${ fail }`;
    } else if(resendStatus == 'sent!'){
       return `color: ${ success }`;
    }
 }}
`;

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
    <RowContatiner>
    <SmallText>Didn't received the email? </SmallText>

      <PressableText onPress={() => resendEmail(triggerTimer)} disabled={!activeResend} style={{ opacity: !activeResend ?  0.25 : 2 }}>
    <ResendText resendStatus={resendStatus}>{ resendStatus }</ResendText>
    </PressableText>
    </RowContatiner>

    {!activeResend && (
    <SmallText>In 
      <SmallText style={{ fontWeight: 'bold' }}> { timeLeft || targetTime } </SmallText> seconds(s)
    </SmallText>)}
  </StyledView>
}

export default ResendTimer;