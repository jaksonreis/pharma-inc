import { FiXCircle } from 'react-icons/fi';
import styled, { css } from 'styled-components';

interface Props {
    isActive: boolean;
}

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
border-bottom: 1px solid ${({ theme })=> theme.colors.border};
`;

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
`;

export const Button = styled.button<Props>`
color: ${({ theme })=> theme.colors.text};
font-size: 18px;
margin-right: 40px;
background-color: transparent;
border-style: none;

:hover {

color: ${({ theme })=> theme.colors.button};
}

${({ isActive, theme })=> isActive   && css`

font-weight: bold;
    border-bottom: 4px solid ${({ theme })=> theme.colors.button};
`};

`

export const ButtonIcon = styled(FiXCircle)`
height: 25px;
width: 25px;
color: ${({ theme })=> theme.colors.text};
:hover {
    color: ${({ theme })=> theme.colors.button};
}
`
