import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';

import avatar from '../../../../assets/images/profile.jpg'

import { AboutContainer, CenteredContainer } from './styles';
import { toggleDarkMode } from '../../../../store/modules/darkMode/actions';

export default function About() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const theme = value.theme;
  const localItem = JSON.parse(localStorage.getItem('theme')|| '{}');
  const dispatch = useDispatch();

  useEffect(() => {
    if(localItem === true) {
      dispatch(toggleDarkMode(localItem))
    }
   }, [dispatch, localItem]);


  return (
    <AboutContainer theme={theme} id='about'>
      <CenteredContainer>
        <h1>Sobre mim</h1>

        <img src={avatar} alt='avatar'/>

        <p>Graduando em Ciência da Computação pela UNIFACS e formado em Engenharia Ambiental (2016.2), na mesma universidade.
          Atualmente estou focando em dominar a Stack de Frontend atráves de estudos diários. 
          Procuro cada vez mais me desafiar, desenvolvendo diferentes aplicações Web e Mobile, utilizando as mais novas tecnologias relacionadas à Stack. 
          Estou sempre disposto a novos desafios que façam enriquecer ainda mais meus conhecimentos.
        </p>
 
      </CenteredContainer>
    </AboutContainer>
  )
}
