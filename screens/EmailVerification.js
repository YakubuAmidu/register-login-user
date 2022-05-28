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
import MsgBox from '../components/Texts/MsgBox';

// Colors
import { colors } from '../components/colors';
const { primary } = colors;

const EmailVerification = () => {
  // Code input
  const MAX_CODE_LENGTH = 4;
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);

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

    return <MainContainer>
      <KeyboardAvoidingContainer>

        <IconHeader name={"lock-open"} style={{ marginBottom: 20 }}/>

        <RegularText>Enter the 4-digit code sent to your email</RegularText>

        <StyledCodeInput code={code} setCode={setCode} maxLength={MAX_CODE_LENGTH} setPinReady={setPinReady}/>

        <Formik initialValues={{ email: '', password: '' }}
        onSubmit={(values, { seSubmitting }) => {
          if(values.email == " " || values.password == " "){
            setMessage('Please fill in all fields...🚫');
            seSubmitting(false)
          } else {
             handleLogin(values, seSubmitting)
          }
        }}
        >
           {
             ({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
               <>
                <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"} onChangeText={handleChange('email')} onBlur={handleBlur('email')} values={values.email} style={{ marginBottom: 15 }}/>

                <StyledTextInput label={"Password"} icon={"lock-open"} placeholder={"* * * * * * * *"} onChangeText={handleChange('password')} onBlur={handleBlur('password')} values={values.password} isPassword={true} style={{ marginBottom: 15 }}/>

                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>{message || " "}</MsgBox>

                {!isSubmitting && <RegularButton onPress={handleSubmit}>Login</RegularButton>}
                {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}
                
                <RowContainer>
                <PressableText onPress={() => {}}>New Account signup</PressableText>
                <PressableText onPress={() => {}}>Forgot password</PressableText>
                </RowContainer>
               </>
             )
           }
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default EmailVerification;