export const SHOW_LOADING = 'show_loading';
export const showLoading = () => ({ type: SHOW_LOADING });

export const HIDE_LOADING = 'hide_loading';
export const hideLoading = () => ({ type: HIDE_LOADING });

export const ADD_PRODUCT = 'add_product';
export const addProduct = (payload) => ({ type: ADD_PRODUCT, action: payload });

export const INCREASE_NUMBER = 'increase_number';
export const increaseNumber = (payload) => ({ type: INCREASE_NUMBER, action: payload });

export const DECREASE_NUMBER = 'decrease_number';
export const decreaseNumber = (payload) => ({ type: DECREASE_NUMBER, action: payload });

