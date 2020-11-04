import React, { FormEvent, useState } from 'react'
import emailjs from 'emailjs-com';
import { Form } from './styles';
import swal from 'sweetalert';
import { State } from '../../../../../../store';
import { Theme } from '../../../../../../store/modules/darkMode/types';
import { useSelector } from 'react-redux';
import './alert.css';

export default function EmailForm() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const value = useSelector<State, Theme>((state) => state.darkMode)
  
  const theme = value.theme;

 

  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();

    const templateId = 'template_zphgoso';
    const data = {
      message,
      name,
      email,
    };

    emailjs.send('gmail', templateId, data, 'user_oxZJfR0n7r4pLJ7Ejn5tj').then((result) => {
      swal({
        title: 'Mensagem enviada!',
        text: 'Entrarei em contato em breve!',
      });
    }).catch(() => {
      swal({
        title: 'Ops!',
        text: 'Houve um erro, verifique seus dados ou tente novamente mais tarde.',
      });
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  
  return (
    
    <Form id='mail' onSubmit={handleSubmit} theme={theme}>
      
      <input value={name} onChange={(event) =>  setName(event.target.value)} type="text" placeholder='Seu nome' required/>
      <input value={email} onChange={(event) =>  setEmail(event.target.value)} type="text" placeholder='Seu email' required/>
      <textarea value={message} onChange={(event) =>  setMessage(event.target.value)} placeholder='Sua mensagem' required/>

      <button type="submit">Envie sua mensagem</button>
    </Form>
  )
}
