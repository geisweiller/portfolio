import styled from 'styled-components';


export const LandingContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100%;


  a.access {

    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    text-decoration: none;


    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 0.2rem;

    background: ${(props) => (props.theme === true ? '#DDDDDD' : '#202020')};
    color: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};

      :hover {
        background: #000;
        color: #F5F5F5;
        transition: background 0.3s;
      }
    }
`;

export const ImageContainer = styled.div`

  display: none;
  align-items: center;
  justify-content: center;

  
  img {
    height: 20rem;
    font-size: 1rem;
  }

`;

export const TextContainer = styled.div`
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;


  strong {
    font-size: 2rem;
    
  }

  p {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;


  @media(min-width: 1100px) {
    
    width: 100%;

    justify-content: center;    
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  
  }

  label {
    font-size: 0.8rem;

    text-align: center;
  }


  button.language {

    display:flex;
    align-items: center;
    justify-content: center;

    margin: 0 2rem 0.8rem 2rem;
    background: transparent;
    height: 1.4rem;
    width: 2rem;
    border: none;

    img {
      height: 1.4rem;
      width: 2rem; 
    }
  }

  

`;