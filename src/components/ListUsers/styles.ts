import styled from 'styled-components';



export const Container = styled.div`
width: 70%;
display: flex;
flex-direction: column;
  display: flex;
  align-items: center;
  padding: 20px;`


  export const Table = styled.table`
  margin: 20px 0;
  width: 100%;
  background-color: ${({theme})=> theme.colors.background_table};
  border: 1px solid ${({ theme })=> theme.colors.border};
  `
  export const Header = styled.th`
  height: 30px;
  font-size: 15px;
  color: ${({theme})=> theme.colors.text_detail}
  background-color: ${({theme})=> theme.colors.background_primary};
  color: ${({ theme })=> theme.colors.title};
  `
  export const HeaderStyle = styled.div`
  height: 15px;
  border-left: 1px solid ${({ theme })=> theme.colors.border};
  `
  export const Row = styled.tr`
  `


export const ModalConponent = styled.div`
  position: fixed;
  top: 100px;
  text-align: center;
  background-color: white;

  border-radius: 10px;


`