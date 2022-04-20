import styled from 'styled-components';

interface ButtonProps {
    light?: boolean;
}

export const Container = styled.div`
  box-shadow: 0 10px 20px gray;
  border-radius: 10px;
  padding: 20px;
`;
export const Avatar = styled.img`
width: 120px;
  height: 120px;
  border-radius: 60px;
`;
export const InfoCard = styled.div`
  flex: 1;
`;
export const Content = styled.div`
  margin: 30px;
`;

export const TitleName = styled.h2`
line-height: 15px;
color: ${({ theme }) => theme.colors.title}; 

`
export const InfoText = styled.p`
    
  line-height: 10px;
color: ${({ theme }) => theme.colors.text}; 
`

export const InfoTitle = styled.p`
    
  line-height: 0px;
color: ${({ theme }) => theme.colors.text_detail}; 
`
export const ButtonContainer = styled.div`

`
export const Button = styled.button<ButtonProps>`
width: 40%;
background: ${({ theme, light }) => light ? theme.colors.button_light_50 : theme.colors.button};
color:  ${({ theme, light }) => light ? theme.colors.title : theme.colors.text_light};
border-radius: 40px;
  padding: 20px;
  margin: 10px;
  font-size: 14px;
  border-style: none;

  box-shadow: 0 1px 5px ${({ theme, light }) => light ? "gray" : theme.colors.button};

  line-height: 5px;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    background: ${({ theme, light }) => light ? theme.colors.button_light_200 : "#a173ff"};
  }
`;