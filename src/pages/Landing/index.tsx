import React, { useEffect, useState } from 'react'
import { Switch } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import landingImage from '../../assets/images/code.gif'
// import englishLanguage from '../../assets/images/eua.png';
import { toggleDarkMode } from '../../store/modules/darkMode/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LandingContainer, ImageContainer, TextContainer, ButtonsContainer } from './styles'
import { Link } from 'react-router-dom';
import { State } from '../../store';
import { Theme } from '../../store/modules/darkMode/types';

export default function Landing() {
  const [theme, setTheme] = useState(false);
  const localItem = JSON.parse(localStorage.getItem('theme')|| '{}');
  const dispatch = useDispatch();
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const checked = value.theme;
  
  function toggleSwitch() {
    if (theme === false) {
      setTheme(true);
      localStorage.setItem('theme',JSON.stringify(true));
    }
    if (theme === true) {
      setTheme(false);
      localStorage.setItem('theme',JSON.stringify(false));
    }    
  }

 useEffect(() => {
  dispatch(toggleDarkMode(localItem))
 }, [dispatch, localItem]);

  return (

    <LandingContainer theme={localItem}>
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
      
      <Link to='/portfolio/home'type='button' className='access'>Acessar <ArrowForwardIosIcon/></Link>
      <ButtonsContainer>
        {/* <div>
          <button type='button' className='language'><img src={englishLanguage} alt='Language'/></button>
          <label>Mudar linguagem</label>
        </div> */}
        <div>
          <Switch checked={checked} color="default" onClick={toggleSwitch}/>
          <label>Modo escuro</label>
        </div>
        
      </ButtonsContainer>
    </LandingContainer>
    
  )
}
