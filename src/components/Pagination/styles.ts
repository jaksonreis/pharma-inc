import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 24px;
justify-content: space-between;
align-items: center;
`;

export const Stack = styled.div`
display: flex;
flex-direction: row;
padding: 20px 0;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
 
 box-shadow: 0 2px 5px gray; 
margin-left: 5px;
width: 25px;
height: 30px;
border-style: none;
font-size: 15px;
border-radius: 8px;
  background-color: ${ ({ theme })=> theme.colors.background_table};
  :hover {background-color: ${({theme})=> "#f8f0ff"};}
  :active {
  transform: translateY(1px);
}
`
export const ButtonActive = styled.button`
width: 25px;
height: 30px;
margin-left: 5px;
border-style: none;
font-size: 15px;
border-radius: 8px;
color: white;
 box-shadow: 0 2px 5px gray; 
  background-color: ${({theme})=> theme.colors.button};
  :hover {
  background-color: #a173ff;
}
  :active {
  transform: translateY(1px);
}
`

export const Box = styled.div`
`

export const Text = styled.p`
text-align: center;
color: "#CBD5E0"
`