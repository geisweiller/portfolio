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