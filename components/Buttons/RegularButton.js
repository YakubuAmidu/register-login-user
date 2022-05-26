import React from 'react';
import RegularText from '../Texts/RegularText'

// Styled components
import styled from 'styled-components/native';

// Custom colors
import { colors } from '../colors';
const { primary, accent } = colors;

const ButtonView = styled.TouchableOpacity`
padding: 15px;
background-color: ${ accent };
width: 100%;
border-radius: 10px;
justify-content: center;
align-items: center;
height: 60px;
`

const RegularButton = (props) => {
  return <ButtonView onPress={props.onPress} {...props}><RegularText style={[{ color: primary }, { ...props?.textStyle }]}>{props.children}</RegularText></ButtonView>
}

export default RegularButton;