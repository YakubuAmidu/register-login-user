import React from 'react';

// Custom components
import MainContainer from '../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../components/Texts/RegularText';

const Login = () => {
    return <MainContainer>
      <KeyboardAvoidingContainer>
        <RegularText>Enter your account credentials</RegularText>
      </KeyboardAvoidingContainer>
    </MainContainer>
}

export default Login;