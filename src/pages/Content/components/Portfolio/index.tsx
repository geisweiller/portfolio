import React, { useEffect, useState } from 'react'
import api from '../../../../services/api';
import { useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';
import { colorScheme } from '../../../../assets/styles/ColorScheme';
import { PortfolioContainer, ProjectContainer, Section, StyledSpinner } from './styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Portfolio() {

  interface Repositories {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
  }

  const [data, setData] = useState<Repositories[]>([])
  const [loading, setLoading] = useState(true);
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const theme = value.theme;

  const getData = async () => {
    const response = await api.get('users/geisweiller/repos')

    setData(response.data)
    };


  useEffect(() => {

    getData();
   
    setLoading(false);
    }, [])
 

  
  return (
   
    <PortfolioContainer id='projects'>
      <h1>Meus Projetos</h1>

      
      {loading ? (
        <StyledSpinner  viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"

        />
      </StyledSpinner>
      ):(
        data.map((repo) => {
          return(
            <Section key={repo.id}>
            <ProjectContainer theme={theme}>
              <strong>{repo.name}</strong>
              <p>
                {repo.description}
              </p>
              <div>
                <span className='indicator' style={{background: colorScheme(repo.language)}}/>
                <span>{repo.language}</span>
              </div>
              <a target='_blank' rel='noreferrer' href={repo.html_url}>Acesse o repositório <ArrowForwardIosIcon/></a>
            </ProjectContainer>
          </Section>
          )
        })
      )}

    </PortfolioContainer>
  )
}
