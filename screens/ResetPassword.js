import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

// Formik
import { Formik } from 'formik';

// Custom Containers
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';

// Custom Text
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';

// Custom Button
import RegularButton from '../components/Buttons/RegularButton';

// Code Input
import StyledCodeInput from '../components/Inputs/StyledCodeInput';

// Message Timer
import ResendTimer from '../components/Timers/ResendTimer';

// Modal
import MessageModal from '../components/Modals/MessageModal';

// Message Box
import MsgBox from '../components/Texts/MsgBox';

// Custom colors
import { colors } from '../components/colors';
const { primary } = colors;

// Styled components
import styled from 'styled-components/native';

// FormWrapper function
const FormWrapper = styled.View`
 ${(props) => {
   return props.pinReady ? "opacity: 1" : "opacity: 0.3";
 }}
`;
// Reset Password function
const ResetPassword = ({ navigation }) => {
  // Stae
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

   // Code input
   const MAX_CODE_LENGTH = 4;

   // State
   const [code, setCode] = useState('');
   const [pinReady, setPinReady] = useState(false);

  // Resending email
  const [activeResend, setActiveResend] = useState(false);
  const [resendStatus, setResendStatus] = useState('Resend');
  const [resendingEmail, setResendingEmail] = useState(false);

   // Modal
   const [modalVisible, setModalVisible] = useState(false);
   const [modalMessageType, setModalMessageType] = useState(' ');
   const [headerText, setHeaderText] = useState(' ');
   const [modalMessage, setModalMessage] = useState(' ');
   const [buttonText, setButtonText] = useState(' ');

   const moveTo = (screen, payload) => {
     navigation.navigate(screen, { ...payload });
   };

   // Button Handler function
   const buttonHandler = () => {
    if(modalMessageType === 'success'){
      // Do something
      moveTo("Login");
    }

    setModalVisible(false);
  };

  const showModal = (type, buttonText, message, headerText) => {
    setModalMessageType(type);
    setHeaderText(headerText);
    setModalMessage(message);
    setButtonText(buttonText);
    setModalVisible(true);
 }

 // Handle On Submit function
  const handleOnSubmit = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      // Call to backend

      setSubmitting(false);
      return showModal('success', 'All Good!...😊', 'Your password has been reset!...👍', 'Proceed!...👉')
    } catch(err){
      setSubmitting(false);
      return showModal('failed', 'Failed!...😔', err.message, 'Close!...👊')
    }
  }

  // Resend Email function
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
       alert('Email resend Failed!...😔: ' + err.message);
    }
  }

    return <MainContainer>
      <KeyboardAvoidingContainer>

        <RegularText style={{ marginTop: 25, marginBottom: 25 }}>Enter the 4-digit code sent to your email</RegularText>

        <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

        <ResendTimer activeResend={activeResend} setActiveResend={setActiveResend} resendStatus={resendStatus} resendingEmail={resendingEmail} resendEmail={resendEmail} style={{ marginBottom: 25 }}/>

        <Formik initialValues={{ email: '', confirmNewPassword: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if(values.newPassword == "" || values.confirmNewPassword == ""){
            setMessage('Please fill in all fields...🚫');
            setSubmitting(false)
          } else if(values.newPassword !== values.confirmNewPassword){
             setMessage('Password do not match...🚫');
             setSubmitting(false)
          } else {
             handleOnSubmit(values, setSubmitting)
          }
        }}
        >
           {
             ({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
               <FormWrapper pinReady={pinReady}>
                <StyledTextInput label={"New Password"} icon={"lock-open-variant"} placeholder={"* * * * * * * *"} onChangeText={handleChange('newPassword')} onBlur={handleBlur('newPassword')} values={values.newPassword} isPassword={true} style={{ marginBottom: 25 }} editable={pinReady}/>

                <StyledTextInput label={"Confirm New Password"} icon={"lock-open-variant"} placeholder={"* * * * * * * *"} onChangeText={handleChange('confirmNewPassword')} onBlur={handleBlur('confirmNewPassword')} values={values.confirmNewPassword} isPassword={true} style={{ marginBottom: 25 }} editable={pinReady}/>

                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>{message || " "}</MsgBox>

                {!isSubmitting && <RegularButton onPress={handleSubmit} disabled={!pinReady}>Submit</RegularButton>}
                {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}
                
               </FormWrapper>
             )
           }
        </Formik>

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

export default ResetPassword;