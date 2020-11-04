import styled from 'styled-components';

export const PortfolioContainer = styled.div`

  @media(min-width: 1100px) {

    width: 50%;

    display: grid;
    grid-gap: 1rem;    
    grid-template:
      'title title'
      'repo repo'
      'repo repo'
         
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  

  padding: 3rem;
  margin-bottom: 2rem;
 

  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;

    grid-area: title;
    text-align: center;
      
  }


  
`;

export const ProjectContainer = styled.article`

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;
  margin-top: 1rem;

  height: 100%;
  width: 100%;

  grid-area: repo;

  border: 0.1rem solid #F5F5F5;
  box-shadow: ${(props) => (props.theme === true ? '' : '0 0 0.5rem')};


  strong {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }

  div {

  display: flex;
  align-items: center;
  justify-content: flex-start;

    span {
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }

    span.indicator {

      margin-right: 0.2rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    
    }
  }

  a {

    display:flex;
    align-items: center;

    font-size: 1rem;
    font-weight: bold;

    text-decoration: none;
  }

`;

export const Section = styled.div`

  height: 100%;
  width: 100%;
   
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
 
  width: 100px;
  height: 100px;

  @media(min-width: 1100px) {
    margin-left: 3rem;
  }

  
  & .path {
    stroke: ${(props) => (props.theme === true ? '#F5F5F5' : '#707070')};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

