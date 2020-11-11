import styled from 'styled-components';

export const HeaderContainer = styled.div`
  
  position: fixed;
  z-index: 10;
  top: 0;

  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};

  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 1rem;
  width: 100%;
  height: 3.5rem;

  box-shadow: ${(props) => (props.theme === true ? '0 0 0.5rem #000' : '0 0 0.5rem')};

  div {

    @media(min-width: 1100px) {
      width: 50%;
    }

    display: flex;
    justify-content: space-between;

    padding-top: 0.5rem;
    width: 100%;
    

  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const DrawerButton = styled.button`

  font-size: 1.2rem;
  font-weight: lighter;
  color: #F5F5F5;

  background: transparent;
 
  border: 0.1rem solid #707070;
  border-left: none;
  border-right: none;

  padding: 0.5rem;

  :hover{
      background: #000;
      color: #F5F5F5;
      transition: background 0.3s;
  }
  
`;


