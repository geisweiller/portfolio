import { Reducer } from 'redux';


const INITIAL_STATE = {
  theme: false,
};

const darkMode: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return { theme: action.payload };
    default:
      return state;
  }
}

export default darkMode;