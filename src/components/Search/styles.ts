import styled, { css } from 'styled-components';

interface Props {
  isFocused: boolean;
}

export const Container = styled.div<Props>`
display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 15px;  
  box-shadow: 0 1px 3px ${({ theme})=> theme.colors.button_light_200};
  background-color: ${({ theme})=> theme.colors.background_table};
${({ isFocused, theme }) => isFocused && css`

box-shadow: 0 1px 5px ${({ theme})=> theme.colors.button};
`};
`;

export const IconContainer = styled.div<Props>`
  display: flex;
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const InputText = styled.input<Props>`

  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  border-style: none;
  border-radius: 15px; 
  border-style: none; 

  padding: 0 23px; 

${({ isFocused, theme }) => isFocused && css`
    border: 0 none;
    outline: 0;

border-color: ${({ theme})=> theme.colors.button};
`};
`;