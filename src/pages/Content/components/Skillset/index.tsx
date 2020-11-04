import React from 'react'

import { SkillsetContainer, SkillContainer} from './styles';

import reactLogo from '../../../../assets/images/logos/React_logo.png'
import typesLogo from '../../../../assets/images/logos/Typescript_logo.svg'
import uxLogo from '../../../../assets/images/logos/UX_logo.png'
import jsLogo from '../../../../assets/images/logos/Js_logo.png'

import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';
import { useSelector } from 'react-redux';

export default function Skillset() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  
  const theme = value.theme;


  return (
    <SkillsetContainer theme={theme} id='skillset'>
      <h1>Habilidades</h1>
  
        <SkillContainer>
          <img src={jsLogo} alt='Javascript' width='40px'/>
          <strong>Javascript</strong>
          <p>
          Possuo conhecimento avançado nessa linguagem, bem como os conceitos trazidos pelo
          ES6+, como: Webpack, Classes, Arrow functions, Desestruturação, Import/Export, Async/Await, Rest/Spread.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={reactLogo} alt='React' width='40px'/>
          <strong>ReactJs e React Native</strong>
          <p>
            Meu maior foco de aprendizado.
            Desenvolvi esse portfólio atráves do ReactJs justamente para apresentar meu conhecimento da ferramenta, utilizei conceitos de SPA e Stateful Components.
            A cada dia procuro aprender mais sobre essa biblioteca que torna mais simples o desenvolvimento de interfaces Web e Mobile.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={typesLogo} alt='Typescript' width='40px'/>
          <strong>Typescript</strong>
          <p>
            Aprofudando os conhecimentos cada vez mais nessa nova tecnologia. Desenvolvi algumas aplicações aplicando
            tipagem sobre o JavaScript, poupando tempo ao encontrar erros e aplicando ajustes antes de rodar o código.
          </p>
        </SkillContainer>
        <SkillContainer>
          <img src={uxLogo} alt='UX/UI' width='40px'/>
          <strong>UI/UX</strong>
          <p>
            Por ser um desenvolvedor Frontend, me interesso bastante pelos conceitos UI/UX.
            Participei de cursos referentes ao assunto, para entender melhor o processo e
            entregar resultados mais satisfatórios.
          </p>
        </SkillContainer>
 
    </SkillsetContainer>
  )
}
