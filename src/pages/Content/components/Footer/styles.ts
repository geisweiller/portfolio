import styled from 'styled-components';

export const FooterContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background: ${(props) => (props.theme === true ? '#202020' : '#F5F5F5')};


  p {
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  a {
    font-size: 1rem;
    margin: 0 1rem;
    text-decoration: none;

  }

`;
