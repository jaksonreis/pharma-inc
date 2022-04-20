
import { HTMLProps } from 'react';
import {
    Container,
    IconContainer,
    Btn,
} from './styles';

import { FiLoader } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useTheme } from 'styled-components';


interface Props extends HTMLProps<HTMLButtonElement> {
    text: string;
    onClick: () => void;
    light?: boolean;
    icon: string;
}

export function Button({ onClick, text, light = false, icon }: Props) {
    const theme = useTheme();
    return (
        <Container onClick={onClick} light={light}>
            <IconContainer>{
                icon == "FiLoader" ?
                 <FiLoader size={20} color={ light ? theme.colors.text : theme.colors.text_light} /> :
                 <FiEye size={20} color={ light ? theme.colors.text : theme.colors.text_light} /> 
            }</IconContainer>
           
            <Btn light={light}>
                {text}
            </Btn>
        </Container>
    );
}