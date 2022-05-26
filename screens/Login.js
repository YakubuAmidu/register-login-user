import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton'
import MsgBox from '../components/Texts/MsgBox';

import { colors } from '../components/colors';
const { primary } = colors;

const Login = () => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

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
               </>
             )
           }
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default Login;