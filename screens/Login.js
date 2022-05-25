import React from 'react';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import StyledTextInput from '../components/Inputs/StyledTextInput';
import RegularText from '../components/Texts/RegularText';

const Login = () => {
    return <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText style={{ marginBottom: 25 }}>Enter your account credentials</RegularText>

        <StyledTextInput label={"Email address"} icon={"email-variant"} placeholder={"Yakubu@gmail.com"} keyboardType={"email-address"}/>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default Login;