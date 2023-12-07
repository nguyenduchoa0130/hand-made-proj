import { createSelector } from 'reselect';

const selectGlobalFeature = (rootState) => rootState.global;
export const selectIsLoading = createSelector(selectGlobalFeature, (state) => state.isLoading);
export const selectListProduct = createSelector(
  selectGlobalFeature,
  (state) => state.listProductOrders,
);
export const selectUserInfo = createSelector(selectGlobalFeature, (state) => state.userInfo);
