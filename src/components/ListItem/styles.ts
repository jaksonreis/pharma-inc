import styled from 'styled-components';

export const Container = styled.tr`
`;

export const ContainerStyle = styled.div`
width: 100%;

`;

export const Avatar = styled.img`
width: 50px;
border-radius: 25px;
margin-left: 15px;
`;


export const Data = styled.td`
background-color: ${({theme})=> theme.colors.background_secondary};
padding: 10px;
background-color:  ${({theme})=> theme.colors.background_table};
border-top: 1px solid ${({ theme })=> theme.colors.border};
color: ${({ theme })=> theme.colors.title};
`