import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

// Containers
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';

// Text
import RegularText from '../components/Texts/RegularText';

// Button
import RegularButton from '../components/Buttons/RegularButton';

// Icon
import IconHeader from '../components/Icons/IconHeader';

// Code Input
import StyledCodeInput from '../components/Inputs/StyledCodeInput';

// Modal
import MessageModal from '../components/Modals/MessageModal';

// Timer
import ResendTimer from '../components/Timers/ResendTimer';

// Colors
import { colors } from '../components/colors';
const { primary, secondary , lightGray} = colors;

const EmailVerification = ({ navigation }) => {
  // Code Lenght
  const MAX_CODE_LENGTH = 4;

  // Code state
  const [code, setCode] = useState('');

  // Pin Ready state
  const [pinReady, setPinReady] = useState(false);

  // Verifying state
  const [verifying, setVerifying] = useState(false);

  // Resending email
  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend');
  const [resendingEmail, setResendingEmail] = useState(false);

  // Modal states
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessageType, setModalMessageType] = useState(' ');
  const [headerText, setHeaderText] = useState(' ');
  const [modalMessage, setModalMessage] = useState(' ');
  const [buttonText, setButtonText] = useState(' ');

  const moveTo = (screen, paylaod) => {
    navigation.navigate(screen, { ...paylaod });
  };

  // Button Handler
  const buttonHandler = () => {
    if(modalMessageType === 'success'){
      // Do something
      moveTo("Dashboard");
    }

    setModalVisible(false);
  };

  // Show Modal
  const showModal = (type, buttonText, message, headerText) => {
     setModalMessageType(type);
     setHeaderText(headerText);
     setModalMessage(message);
     setButtonText(buttonText);
     setModalVisible(true);
  }

  // Resend Email
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
      }, 2000);
    } catch(err) {
       setResendingEmail(false);
       setResendStatus('Failed!');
       alert('Email resend Failed!...????: ' + err.message);
    }
  }

  // Handle Email Verification
  const handleEmailVerification = async () => {
    try {
      setVerifying(true);

      // Call to backend

      setVerifying(false);
      return showModal('success', 'All Good!...????', 'Your email has been verified!...????', 'Proceed!');
    } catch(err){
      setVerifying(false);
      return showModal('failed!', 'Failed!...????', err.message, 'Close!');
    }
  }

    return <MainContainer>
      <KeyboardAvoidingContainer>

        <IconHeader name={"lock-open"} style={{ marginBottom: 30 }}/>

        <RegularText>Enter the 4-digit code sent to your email</RegularText>

        <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

        {!verifying && pinReady && <RegularButton onPress={handleEmailVerification}>Verify</RegularButton>}
        {!verifying && !pinReady && <RegularButton disabled={true} style={{ backgroundColor: secondary }} textStyle={{ color: lightGray }}>Verify</RegularButton>}

        {verifying && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}

        <ResendTimer activeResend={activeResend} setActiveResend={setActiveResend} resendStatus={resendStatus} resendingEmail={resendingEmail} resendEmail={resendEmail}/>

        <MessageModal 
        modalVisible={modalVisible}
        buttonHandler={buttonHandler}
        type={modalMessageType}
        message={modalMessage}
        headerText={headerText}
        buttonText={buttonText}
        />

      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default EmailVerification;