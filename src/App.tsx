import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './assets/styles/global';
import Routes from './routes';

import { State } from './store/index';
import { Theme } from './store/modules/darkMode/types';


export default function App() {
  const value = useSelector<State, Theme>((state) => state.darkMode)
  
  const theme = value.theme;

  return (

    <>
      <GlobalStyle theme={theme}/>
      <Routes />
    </>

  )
  
  
}

