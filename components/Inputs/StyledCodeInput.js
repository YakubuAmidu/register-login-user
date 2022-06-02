import React, { useRef, useState, useEffect } from 'react';

// Styled components
import styled from 'styled-components/native';

import { StatusBarHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
import { setIn } from 'formik';
const { secondary, tertiary, accent } = colors;

// Code Input Section
const CodeInputSection = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-vertical: 15px;
`;

// Hidden Text Input
const HiddenTextInput = styled.TextInput`
 position: absolute;
 width: 1px;
 height: 1px;
 opacity: 0;
`;

// Code Input Container
const CodeInputsContainer = styled.Pressable`
width: 70%;
flex-direction: row;
justify-content: space-between;
`;

// Code Input
const CodeInput = styled.View`
 min-width: 15%;
 padding: 12px;
 border-bottom-width: 5px;
 border-radius: 10px;
 border-color: ${secondary};
`;

// Code Input Text
const CodeInputText = styled.Text`
 font-size: 22px;
 font-weight: bold;
 text-align: center;
 color: ${tertiary};
`;

// Code Input Focused
const CodeInputFocused = styled(CodeInput)`
 border-color: ${ accent };
`;

const StyledCodeInput = ({ setCode, code, maxLength, setPinReady }) => {
  const codeDigitsArray = new Array(maxLength).fill(0);

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  // Ref for textinput
  const textInputRef = useRef(null);

  // HandleOnPress
  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef.current.focus();
  }


  // HandleOnSubmitting
  const handleOnSubmitEditing = () => {
    setInputContainerIsFocused(false);
  };

  // useEffect
   useEffect(() => {
     // Toggle pinReady
     setPinReady(code.length === maxLength);
     return () => setPinReady(false);
   }, [code])

   // toCodeDigitInput function
  const toCodeDigitInput = (value, index) => {
    const emptyInputChar = ' ';
    const digit = code[index] || emptyInputChar;

    // Formatting
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyledCodeInput = inputContainerIsFocused && isDigitFocused ? CodeInputFocused : CodeInput;

    return (
      <StyledCodeInput key={index}>
        <CodeInputText>{digit}</CodeInputText>
      </StyledCodeInput>
    )
  };

  return <CodeInputSection>
    <CodeInputsContainer onpress={handleOnPress}>{codeDigitsArray.map(toCodeDigitInput)}</CodeInputsContainer>

    <HiddenTextInput 
    keyboardType={"number-pad"}
  returnKeyType={"done"}
  textContentType={"oneTimeCode"}
   ref={textInputRef}
   value={code}
   onChangeText={setCode}
   maxLength={maxLength}
   onSubmitEditing={handleOnSubmitEditing}
  />
  </CodeInputSection>
}

export default StyledCodeInput;