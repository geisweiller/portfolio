import styled from 'styled-components';

export const ExperienceContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 3rem;



  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  p {
    font-size: 0.8rem;
    text-align: justify;
  }

  a {
    font-size: 1rem;
    text-decoration: none;


    padding: 1rem;
    margin-top: 2rem;
    border: none;
    border-radius: 0.2rem;

    background: ${(props) => (props.theme === true ? '#DDDDDD' : '#202020')};
    color: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};

    :hover{
      background: #000;
      color: #F5F5F5;
      transition: background 0.3s;
    }
  }
`;

export const CenteredContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media(min-width: 1100px) {
    width: 25%;
  }

`;