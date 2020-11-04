import styled from 'styled-components';

export const Form = styled.form`

  @media(min-width: 1100px) {
      width: 50%;
  }

  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

 input {

    @media(min-width: 1100px) {
     width: 100%;
    }

    margin: 1rem 0;
    border: 0.1rem solid;
    border-top: none;
    border-left: none;
    border-right: none;

    font-size: 1rem;

  }
  
  textarea {
    margin-top: 1rem;
    resize: none;
    width: 100%;
    height: 10rem;

    padding: 0.5rem;

    font-size: 1rem;

    
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;

    font-size: 1rem;
 

    background: ${(props) => (props.theme === true ? '#DDDDDD' : '#202020')};
    color: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};

    :hover{
      background: #000;
      color: #F5F5F5;
      transition: background 0.3s;
    }   
  }

  input:focus, textarea:focus {
      outline: none;
    }
  
`;
