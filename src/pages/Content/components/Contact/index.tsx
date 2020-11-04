import React from 'react'

import EmailForm from './components/EmailForm';
import { useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';

import  { ContactContainer } from './styles';

import phoneLogo from '../../../../assets/images/logos/Phone_logo.png'
import emailLogo from '../../../../assets/images/logos/Email_logo.png'
import whatsappLogo from '../../../../assets/images/logos/Whatsapp_logo.png'

import phoneDarkLogo from '../../../../assets/images/logos/darkModeLogos/Phone_logo_darkMode.png'
import emailDarkLogo from '../../../../assets/images/logos/darkModeLogos/Email_logo_darkMode.png'
import whatsappDarkLogo from '../../../../assets/images/logos/darkModeLogos/Whatsapp_logo_darkMode.png'


export default function Contact() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const theme = value.theme;

  return (
    <ContactContainer theme={theme} id='contact'>
      <h1>Entre em Contato</h1>   
      <div>

        {theme === true ?
        (
          <img src={phoneDarkLogo} alt='Phone' width='40px'/>
        )
        : 
        (
          <img src={phoneLogo} alt='Phone' width='40px'/>
        )}
        
        
        <span>
          <strong>Telefone</strong>
          <p>+55071999080236</p>
        </span>  
      </div>
      <div>
        
        {theme === true ?

        (
          <img src={emailDarkLogo} alt='Phone' width='40px'/>
        )
        : 
        (
          <img src={emailLogo} alt='Phone' width='40px'/>
        )}
        

        <span>
          <strong>E-mail</strong>
          <p>geisweiller@gmail.com</p>
        </span>  
      </div>   
      <div> 

        {theme === true ?

        (
          <img src={whatsappDarkLogo} alt='Phone' width='40px'/>
        )
        : 
        (
          <img src={whatsappLogo} alt='Phone' width='40px'/>
        )}

        
     
        <span>
          <strong>WhatsApp</strong>
          <a href='https://api.whatsapp.com/send?phone=5571999080236&text=Olá!%20Gostaria%20de%20falar%20com%20voc%C3%AA!'>Clique aqui</a>
        </span>  
      </div>

      <EmailForm/>      

    </ContactContainer>
  )
}
