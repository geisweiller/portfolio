import styled from 'styled-components';

export const ContactContainer = styled.div`


  @media(min-width: 1100px) {
    width: 50%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  padding: 3rem;
  margin-bottom: 1rem;


  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;

    text-align: center;
  }
  
  div {

    @media(min-width: 1100px) {
      width: 25%;
    }


    display: flex;
    justify-content: flex-start;

    width: 75%;
    align-items: center;
    margin: 0.5rem 0;

    span {
      display: flex;
      flex-direction: column;

      margin-left: 0.5rem;

      strong {
        font-size: 1rem;
      }

      p, a{
        font-size: 0.8rem;
      }

      a {
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
