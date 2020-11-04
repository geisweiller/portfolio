import styled from 'styled-components';

export const SkillsetContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => (props.theme === true ? '#2B2B2B' : '#FFF')};
  
  width: 100%;
  padding: 3rem;
  margin-bottom: 1rem;

  h1 {
    font-size: 2.2rem;
    margin-top: 1rem;
  }

  
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;

  margin-top: 2rem;

  @media(min-width: 1100px) {
    width: 25%;
  }

  strong {
    margin: 0.4rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.4rem 0;
    font-size: 0.8rem;
    text-align: justify;
  }
`;

