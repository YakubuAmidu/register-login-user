import React, { useRef } from 'react';

// Styled components
import styled from 'styled-components/native';

import { StatusBarHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { secondary, tertiary } = colors;

const CodeInputSection = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-vertical: 15px;
`;

const HiddenTextInput = styled.TextInput`
 position: absolute;
 width: 1px;
 height: 1px;
 opacity: 0;
`;

const CodeInputsContainer = styled.Pressable`
width: 70%;
flex-direction: row;
justify-content: space-between;
`;

const CodeInput = styled.View`
 min-width: 15%;
 padding: 12px;
 border-width: 5px;
 border-radius: 10px;
 border-color: ${secondary};
`;

const CodeInputText = styled.Text`
 font-size: 22px;
 font-weight: bold;
 text-align: center;
 color: ${tertiary};
`;

const StyledCodeInput = ({ setCode, code, maxLength }) => {
  const codeDigitsArray = new Array(maxLength).fill(0);

  // Ref for textinput
  const textInputRef = useRef(null);

  const handleOnPress = () => {
    textInputRef?.current?.focus();
  }

  const handleOnSubmitEditing = () => {}

  const toCodeDigitInput = (value, index) => {
    const emptyInputChar = ' ';
    const digit = code[index] || emptyInputChar;

    return (
      <CodeInput key={index}>
        <CodeInputText>{digit}</CodeInputText>
      </CodeInput>
    )
  };

  return <CodeInputSection>
    <CodeInputsContainer onpress={handleOnPress}>{codeDigitsArray.map(toCodeDigitInput)}</CodeInputsContainer>

    <HiddenTextInput 
  keyboardType="number-pad"
  returnKeyType="done"
  textContentType="oneTimeCode"
   ref={textInputRef}
   value={code}
   onChangeText={setCode}
   maxLength={maxLength}
   onSubmitEditing={handleOnSubmitEditing}
  />
  </CodeInputSection>
}

export default StyledCodeInput;