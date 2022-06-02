import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// Custom Containes
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';

// Styled Text Input
import StyledTextInput from '../components/Inputs/StyledTextInput';

// Text
import RegularText from '../components/Texts/RegularText';
import PressableText from '../components/Texts/PressableText';

// Buttons
import RegularButton from '../components/Buttons/RegularButton';

// Container
import RowContainer from '../components/Containers/RowContainer';

// Message Box
import MsgBox from '../components/Texts/MsgBox';

// Custom colors
import { colors } from '../components/colors';
const { primary } = colors;

const Login = () => {
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
        <RegularText style={{ marginBottom: 25 }}>Enter your account credentials</RegularText>

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
                <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"} onChangeText={handleChange('email')} onBlur={handleBlur('email')} values={values.email} style={{ marginBottom: 25 }}/>

                <StyledTextInput label={"Password"} icon={"lock-open"} placeholder={"* * * * * * * *"} onChangeText={handleChange('password')} onBlur={handleBlur('password')} values={values.password} isPassword={true} style={{ marginBottom: 25 }}/>

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

export default Login;