import styled from 'styled-components';

export const AboutContainer = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.theme === true ? '#2B2B2B' : '#FFF')};

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

  img {
    width: 10rem;
    border: 0.1rem solid;
    border-radius: 50%;
    margin-bottom: 2rem;
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