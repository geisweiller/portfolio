import React, { useEffect, useState } from 'react'
import { Switch } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import landingImage from '../../assets/images/code.gif'
// import englishLanguage from '../../assets/images/eua.png';
import { toggleDarkMode } from '../../store/modules/darkMode/actions';
import { useDispatch } from 'react-redux';
import { LandingContainer, ImageContainer, TextContainer, ButtonsContainer } from './styles'
import { Link } from 'react-router-dom';

export default function Landing() {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();

  function toggleSwitch() {
    if (theme === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }

 useEffect(() => {
  dispatch(toggleDarkMode(theme))
 }, [dispatch, theme]);

  return (

    <LandingContainer theme={theme}>
      <TextContainer>
        <p>Olá, meu nome é</p>
          {' '}
          <strong id="name">Arthur Geisweiller</strong>
          {' '}
        <p>Bem vindo(a) ao meu portfólio</p>
      </TextContainer>

      <ImageContainer>
        <img src={landingImage} alt='Development'/>
      </ImageContainer>
      
      <Link to='/home'type='button' className='access'>Acessar <ArrowForwardIosIcon/></Link>
      <ButtonsContainer>
        {/* <div>
          <button type='button' className='language'><img src={englishLanguage} alt='Language'/></button>
          <label>Mudar linguagem</label>
        </div> */}
        <div>
          <Switch color="default" onChange={toggleSwitch}/>
          <label>Modo escuro</label>
        </div>
        
      </ButtonsContainer>
    </LandingContainer>
    
  )
}
