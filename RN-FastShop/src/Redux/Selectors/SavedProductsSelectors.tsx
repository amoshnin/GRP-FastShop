import {AppStateType} from '~/Redux/ReduxStore';

export const getSavedProductsSelector = (state: AppStateType) => {
  return state.SavedGetReducer.savedProducts;
};

export const getSavedProductsIDsSelector = (state: AppStateType) => {
  return state.SavedGetReducer.savedProductsIDs;
};
