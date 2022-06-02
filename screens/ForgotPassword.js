import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

// Formik
import { Formik } from 'formik';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton';
import IconHeader from '../components/Icons/IconHeader';
import MsgBox from '../components/Texts/MsgBox';

// Custom colors
import { colors } from '../components/colors';
const { primary } = colors;

// Forgot Password function
const ForgotPassword = () => {
  const [message, setMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  // HandleOnSubmit function
  const handleOnSubmit = async (credentials, setSubmitting) => {
    try {
      setMessage(null);

      // Call to backend

      // Move to next page

      setSubmitting(false);
    } catch(err){
      setMessage('Request failded: ' + err.message);
      setSubmitting(false);
    }
  }

    return <MainContainer>
      <KeyboardAvoidingContainer>
        <IconHeader name={"key"} style={{ marginBottom: 30 }}/>

        <RegularText style={{ marginBottom: 25 }}>Provide a details below to begin the process</RegularText>

        <Formik initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if(values.email == " "){
            setMessage('Please fill in all fields...🚫');
            setSubmitting(false)
          } else {
             handleOnSubmit(values, setSubmitting)
          }
        }}
        >
           {
             ({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
               <>
                <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"} onChangeText={handleChange('email')} onBlur={handleBlur('email')} values={values.email} style={{ marginBottom: 25 }}/>

                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>{message || " "}</MsgBox>

                {!isSubmitting && <RegularButton onPress={handleSubmit}>Submit</RegularButton>}
                {isSubmitting && <RegularButton disabled={true}><ActivityIndicator size={"large"} color={primary} /></RegularButton>}
                
               </>
             )
           }
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default ForgotPassword;