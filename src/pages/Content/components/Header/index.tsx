import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Theme } from '../../../../store/modules/darkMode/types';
import agLogo from '../../../../assets/images/logos/AG_logo.png';
import agDarkLogo from '../../../../assets/images/logos/darkModeLogos/AG_logo_darkMode.png';
import { HeaderContainer, DrawerButton } from './styles';
import './drawer.css';
import { Drawer } from '@material-ui/core';


export default function Header() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  const theme = value.theme;

  const [drawer, setDrawer] = useState(false);


  function toggleDrawer(open: boolean) {
    setDrawer(open);
  }

  function scrollToAbout() {
    const elmnt = document.getElementById('about');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToExperience() {
    const elmnt = document.getElementById('experience');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToServices() {
    const elmnt = document.getElementById('services');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProjects() {
    const elmnt = document.getElementById('projects');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToSkills() {
    const elmnt = document.getElementById('skillset');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToContact() {
    const elmnt = document.getElementById('contact');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }

  


  return (

    <HeaderContainer theme={theme}>
      <div>
        {theme === true ? 

        (
        
        <Link to='/'><img src={agDarkLogo} alt='Arthur Geisweiller'height='40rem'/></Link>

        ) : (
          
        <Link to='/'><img src={agLogo} alt='Arthur Geisweiller'height='40rem'/></Link>
        
        )}
        
        <button type='button' onClick={() => toggleDrawer(true)}><MenuIcon fontSize='large'/></button>
        <Drawer
        anchor={'right'}
        open={drawer}
        onClose={() => toggleDrawer(false)}
        >

            <img src={agDarkLogo} alt='Arthur Geisweiller'height='60rem' width='90rem'/>

            <DrawerButton onClick={scrollToAbout}>Sobre mim</DrawerButton>
            <DrawerButton onClick={scrollToExperience}>Experiência</DrawerButton>
            <DrawerButton onClick={scrollToServices}>Serviços</DrawerButton>
            <DrawerButton onClick={scrollToProjects}>Projetos</DrawerButton>
            <DrawerButton onClick={scrollToSkills}>Habilidades</DrawerButton>
            <DrawerButton onClick={scrollToContact}>Contato</DrawerButton>

        </Drawer>
      </div>
    </HeaderContainer>

  )
}
