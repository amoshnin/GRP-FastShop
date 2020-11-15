import {AppStateType} from '~/Redux/ReduxStore';

export const getProductsListSelector = (state: AppStateType) => {
  return state.ListsReducer.productsList;
};

export const getProductInfoSelector = (state: AppStateType) => {
  return state.ListsReducer.productInfo;
};

export const getWebsiteInfoSelector = (state: AppStateType) => {
  return state.ListsReducer.websiteInfo;
};
