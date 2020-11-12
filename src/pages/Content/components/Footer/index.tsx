import React from 'react'

import { FooterContainer } from './styles';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';
import { useSelector } from 'react-redux';

export default function Footer() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  
  const theme = value.theme;

  return (
   <FooterContainer theme={theme}>
     <p>Copyright © 2020 Arthur Geisweiller</p>
     <div>
       <a target='_blank' rel='noreferrer' href='https://www.facebook.com/arthurgeisweiller/'>Facebook</a>
       <a target='_blank' rel='noreferrer' href='https://www.instagram.com/arthurgeisweiller/?hl=pt-br'>Instagram</a>
       <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/arthur-geisweiller-414587b7/'>Linkedin</a>
       <a target='_blank' rel='noreferrer' href='https://github.com/geisweiller'>GitHub</a>
     </div>
   </FooterContainer>
  )
}
