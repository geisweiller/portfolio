import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { Theme } from './modules/darkMode/types';

export interface State {
  darkMode: Theme;
}

const store = createStore(rootReducer);

export default store;