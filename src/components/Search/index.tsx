import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useTheme } from 'styled-components';

import {
  Container,
  IconContainer,
  InputText
} from './styles';

interface Props {
  value?: string;
  onChange: (value: string, search:boolean) => void;
}

export function Search({
  onChange,
  value,
  ...rest
} : Props ){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)     
  }

  return (
    <Container
    isFocused={isFocused}>
      <IconContainer isFocused={isFocused}>
        <BiSearchAlt2 
          size={30}
          color={(isFocused || isFilled) ? theme.colors.button : theme.colors.text_detail}
        />
      </IconContainer>

      <InputText 
        type="search"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        onChange={(e)=>onChange(e.target.value, true)}
        {...rest}
      />
    </Container>
  );
}