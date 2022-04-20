import styled from 'styled-components';

interface Props {
  light: boolean;
}

export const Container = styled.div<Props>`
display: flex;
justify-content: center;
align-items: center;
    height: 35px;
    border-radius: 10px;
    border-style: none;
    background-color: ${ ({ theme, light })=> light ? theme.colors.button_light : theme.colors.button };
  :hover {background-color: ${ ({ theme, light })=> light ? "#f8f0ff" : "#a173ff"};}

    }
    
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;


`;
 export const Btn = styled.button<Props>`
 border-style: none;
 background-color: transparent;
    color: ${({ theme, light })=> light ? theme.colors.text : theme.colors.text_light};
 
 `