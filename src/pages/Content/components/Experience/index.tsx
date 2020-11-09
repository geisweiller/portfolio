import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';

import { ExperienceContainer, CenteredContainer } from './styles';

export default function Experience() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const theme = value.theme;
  
  return (
   <ExperienceContainer id='experience' theme={theme}>
     <CenteredContainer>
        <h1>Experiência</h1>
        <p>
          Estagiário de Engenharia Ambiental - Construtora Odebrecht (2014). 
          Tal experiência me permitiu aprender sobre o meio empresarial bem como planejar projetos, gerenciamento de tempo, liderar e ser liderado.
          <br/>
          <br/>
          Estágiario de Testes de Software - BRISA (2018). 
          Trabalhei em um ambiente onde era preciso apresentar resultados de qualidade e em um curto espaço de tempo, pois a entrega dos projetos eram diárias. 
          Ambas as experiências me permitiram aprender à trabalhar em sinergia com equipes no âmbito de resolução de problemas da melhor forma possível.
        </p>

        <a href='https://drive.google.com/uc?export=download&id=1et02y71sWvNlofGHYrUT0Y_7EPVfBluB'>Baixe meu CV</a>
      </CenteredContainer>
   </ExperienceContainer>
  )
}
