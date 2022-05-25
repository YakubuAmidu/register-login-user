import React from 'react';
import { Formik } from 'formik';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';

const Login = () => {
    return <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>Enter your account credentials</RegularText>

        <Formik initialValues={{ email: '', password: '' }}>
           {
             ({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
               <>
                <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"} onChangeText={handleChange('email')} onBlur={handleBlur('email')} values={values.email} style={{ marginBottom: 25 }}/>

                <StyledTextInput label={"Password"} icon={"lock-open"} placeholder={"* * * * * * * *"} onChangeText={handleChange('password')} onBlur={handleBlur('password')} values={values.password} isPassword={true} style={{ marginBottom: 25 }}/>
               </>
             )
           }
        </Formik>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default Login;