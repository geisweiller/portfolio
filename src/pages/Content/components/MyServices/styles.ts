import styled from 'styled-components';

export const ServicesContainer = styled.div`
    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: ${(props) => (props.theme === true ? '#2B2B2B' : '#FFF')};

  padding: 3rem;


  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;

  }

  p, strong {
    text-align: center;

    font-size: 1rem;
  }

  img {

    margin-top: 2rem;

    height: 15rem;
  }

`;


export const Service = styled.article`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
`;
