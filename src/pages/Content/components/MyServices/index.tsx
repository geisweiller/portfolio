import React from 'react'
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';
import { ServicesContainer, Service } from './styles';
import devImage from '../../../../assets/images/development.png'
import { useSelector } from 'react-redux';


export default function MyServices() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  
  const theme = value.theme;

  return (
    <ServicesContainer theme={theme} id='services'>
      <h1>Meus Serviços</h1>
      <Service>
        <strong>Desenvolvimento Web e Mobile</strong>
        <p>Desenvolvimento de aplicações Web (Sites) e aplicações Mobile (Apps)</p>
        <img src={devImage} alt='Development'/>
      </Service>
    </ServicesContainer>
  )
}
