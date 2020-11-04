import styled from 'styled-components';

export const ContentContainer = styled.div`

  position: absolute;
  top: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};

  button.scrollup {

   
    display:flex;
    align-items: center;

    background: #363636;
    color: #FFFF;

    outline: none;
    border: none;

    position: fixed;
    bottom: 5rem;
    left: 0.5rem;
    
    z-index: 10000;

  
    :hover{
      background: #000;
      color: #F5F5F5;
      transition: background 0.3s;
    }
    
  }
 
`;

