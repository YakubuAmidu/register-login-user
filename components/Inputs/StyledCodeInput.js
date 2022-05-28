import React, { useRef } from 'react';

// Styled components
import styled from 'styled-components/native';

import { StatusBarHeight } from '../shared';

// Custom colors
import { colors } from '../colors';
const { primary } = colors;

const CodeInputSection = styled.View`
flex: 1;
justify-content: center;
align-items: center;
margin-vertical: 35px;
`;

const HiddentTextInput = styled.TextInput`
 
`

const StyledCodeInput = ({ setCode, code, maxLength }) => {
  const codeDigitArray = new Array(maxLength).fill(0);
  
  // Ref for textinput
  const textInputRef = useRef(null);

  const handleOnSubmitEditting = () => {}

  return <CodeInputSection>
    <HiddentTextInput 
  keyboardType="number-pad"
  returnKeyType="done"
  textContentType="oneTimeCode"
   ref={textInputRef}
   value={code}
   onChangeText={setCode}
   maxLength={maxLength}
   onSubmitEditting={handleOnSubmitEditting}
  />
  </CodeInputSection>
}

export default StyledCodeInput;