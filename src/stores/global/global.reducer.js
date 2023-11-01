import * as actions from './global.actions';
// Reducer
const initialState = {
  listProductOrders: [],
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
    case actions.ADD_PRODUCT: {
      const index = state.listProductOrders.findIndex(item => item.id === action.id)
      if (index != -1) {
        state.listProductOrders[index].number++
        return { ...state, isLoading: false };
      } else {
        state.listProductOrders.push(action)
        return { ...state, isLoading: false };
      }
    }
    case actions.INCREASE_NUMBER: {
      const index = state.listProductOrders.findIndex(item => item.id === action.id)
      if (index != -1) {
        state.listProductOrders[index].number++
      }
      return { ...state, isLoading: false };
    }
    case actions.DECREASE_NUMBER: {
      const index = state.listProductOrders.findIndex(item => item.id === action.id)
      if (index != -1) {
        if (state.listProductOrders[index].number == 1) {
          state.listProductOrders = state.listProductOrders.filter(item => item.id !== action.id);
        } else {
          state.listProductOrders[index].number--
        }
      }
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
export default globalReducer;
