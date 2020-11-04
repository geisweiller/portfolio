import React from 'react';
import Header from './components/Header/index';
import About from './components/About/index';
import Experience from './components/Experience/index';
import MyServices from './components/MyServices/index';
import Portfolio from './components/Portfolio/index';
import Skillset from './components/Skillset/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useScrollPosition from "@react-hook/window-scroll";

import { State } from '../../store/index'
import { Theme } from '../../store/modules/darkMode/types';


import { ContentContainer } from './styles';
import { useSelector } from 'react-redux';


export default function Content() {

  const value = useSelector<State, Theme>((state) => state.darkMode) 
  const theme = value.theme;
  const scrollY = useScrollPosition(60);



  return (
    <ContentContainer theme={theme}>
      <Header />
      <About />
      <Experience />
      <MyServices/>
      <Portfolio />
      <Skillset/>
      <Contact />
      <Footer />
      {scrollY > 200 && (<button className='scrollup' type='button' onClick={() => window.scrollTo({top: 0, left: 0, behavior:'smooth'})}><ExpandLessIcon/></button>)}
    </ContentContainer> 

  )
}
