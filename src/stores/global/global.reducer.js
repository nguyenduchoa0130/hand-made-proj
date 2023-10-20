import * as actions from './global.actions';
// Reducer
const initialState = {
  isLoading: false,
};
const globalReducer = (state = initialState, { type, action }) => {
  switch (type) {
    case actions.SHOW_LOADING: {
      return { ...state, isLoading: true };
    }
    case actions.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
export default globalReducer;
