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
import IconHeader from '../components/Icons/IconHeader';
import PressableText from '../components/Texts/PressableText';
import StyledCodeInput from '../components/Inputs/StyledCodeInput';
import ResendTimer from '../components/Timers/ResendTimer';
import MsgBox from '../components/Texts/MsgBox';

// Colors
import { colors } from '../components/colors';
const { primary, secondary , lightGray} = colors;

const EmailVerification = () => {
  // Code input
  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);

  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const [verifying, setVerifying] = useState(false);

  // Resending email
  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend');
  const [resendingEmail, setResendingEmail] = useState(false);

  const resendEmail = async (triggerTimer) => {
    try {
      setResendingEmail(true);
      
      // Make request to backend
      // update resendStatus() to 'Failed' or 'Sent'

      setResendingEmail(false);
      // Hold on briefly

      setTimeout(() => {
        setResendStatus('Resend');
        setActiveResend(false);
        triggerTimer();
      }, 5000);
    } catch(err) {
       setResendingEmail(false);
       setResendStatus('Failed!');
       alert('Email resend Failed!...😔: ' + err.message);
    }
  }

  const handleEmailVerification = async (credentials, seSubmitting) => {
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

    return <MainContainer>
      <KeyboardAvoidingContainer>

        <IconHeader name={"lock-open"} style={{ marginBottom: 30 }}/>

        <RegularText style={{ marginBottom: 25 }}>Enter the 4-digit code sent to your email</RegularText>

        <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

        {!verifying && pinReady && <RegularButton onPress={handleEmailVerification}>Verify</RegularButton>}
        {!verifying && !pinReady && <RegularButton disabled={true} style={{ backgroundColor: secondary }} textStyle={{ color: lightGray }}>Verify</RegularButton>}

        {verifying && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}

        <ResendTimer activeResend={activeResend} setActiveResend={setActiveResend} resendStatus={resendStatus} resendingEmail={resendingEmail} resendEmail={resendEmail}/>

      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default EmailVerification;