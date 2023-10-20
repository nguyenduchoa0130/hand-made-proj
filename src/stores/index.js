import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// Global
import globalReducer from './global/global.reducer';
import * as globalActions from './global/global.actions';
import * as globalSelectors from './global/global.selectors';

const rootReducer = combineReducers({
  global: globalReducer,
});
const middlewares = [thunk];
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);
export const actions = {
  ...globalActions,
};
export const selectors = {
  ...globalSelectors,
};
