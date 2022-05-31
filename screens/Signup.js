import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Formik } from 'formik';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton';
import PressableText from '../components/Texts/PressableText';
import MsgBox from '../components/Texts/MsgBox';

import { colors } from '../components/colors';
const { primary } = colors;

const Signup = () => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleSignup = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      // Call to backend

      // Move to next page

      setSubmitting(false);
    } catch(err){
      setMessage('Signup failded: ' + err.message);
      setSubmitting(false);
    }
  }

    return <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>Enter your account credentials</RegularText>

        <Formik initialValues={{ fullName: ' ', email: ' ', password: ' ', confirmPassword: ' ' }}
        onSubmit={(values, { setSubmitting }) => {
          if(values.fullName == " " || values.email == " " || values.password == " " || values.confirmPassword == " "){
            setMessage('Please fill in all fields...🚫');
            setSubmitting(false)
          } else if(values.password !== values.confirmPassword){
             setMessage('Password do not match...🚫');
             setSubmitting(false)
          } else {
            handleSignup(values, setSubmitting)
          }
        }}
        >
           {
             ({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
               <>
                <StyledTextInput label={"Full Name"} icon={"account"} placeholder={"Yakubu amidu"} onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')} values={values.fullName} style={{ marginBottom: 15 }}/>

                <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"} onChangeText={handleChange('email')} onBlur={handleBlur('email')} values={values.email} style={{ marginBottom: 15 }}/>

                <StyledTextInput label={"Password"} icon={"lock-open"} placeholder={"* * * * * * * *"} onChangeText={handleChange('password')} onBlur={handleBlur('password')} values={values.password} isPassword={true} style={{ marginBottom: 15 }}/>

                <StyledTextInput label={"Confirm Password"} icon={"lock-open"} placeholder={"* * * * * * * *"} onChangeText={handleChange('confirmPassword')} onBlur={handleBlur('confirmPassword')} values={values.confirmPassword} isPassword={true} style={{ marginBottom: 15 }}/>

                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>{message || " "}</MsgBox>

                {!isSubmitting && <RegularButton onPress={handleSignup}>Signup</RegularButton>}
                {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}
                
                <PressableText style={{ paddingVertical: 15 }} onPress={() => {}}>Signup into an existing account</PressableText>
               </>
             )
           }
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default Signup;