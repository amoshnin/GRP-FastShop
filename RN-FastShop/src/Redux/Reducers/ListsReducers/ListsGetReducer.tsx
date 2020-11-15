//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {
  ListType,
  WebsiteInfoType,
  ProductInfoType,
} from '~/Redux/Types/ListsTypes';
import axios from 'axios';

import {
  DefaultProductInfo,
  DefaultWebsiteInfo,
} from '~/Redux/Helpers/DefaultValues/DefaultValues';

////////////////////////////////////////////////////////////////////////

const initialState = {
  productsList: [] as Array<ListType>,

  productInfo: DefaultProductInfo as ProductInfoType,
  websiteInfo: DefaultWebsiteInfo as WebsiteInfoType,
};

type initialStateType = typeof initialState;

// *REDUCER* //
const ListsGetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      productsList: action.productsList,
    };
  }

  if (action.type === 'SET_PRODUCT_INFO') {
    return {
      ...state,
      productInfo: action.productInfo,
    };
  }

  if (action.type === 'SET_WEBSITE_INFO') {
    return {
      ...state,
      websiteInfo: action.websiteInfo,
    };
  }

  return state;
};

export default ListsGetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setProductsActionCreator: (productsList: Array<ListType>) =>
    ({
      type: 'SET_PRODUCTS',
      productsList,
    } as const),

  setProductInfoActionCreator: (productInfo: ProductInfoType) =>
    ({
      type: 'SET_PRODUCT_INFO',
      productInfo,
    } as const),

  setWebsiteInfoActionCreator: (websiteInfo: WebsiteInfoType) =>
    ({
      type: 'SET_WEBSITE_INFO',
      websiteInfo,
    } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Get products
export const getProductsThunkCreator = (
  searchQuery: string,
  latitude: number,
  longitude: number,
  radius: number,
  selectedType?: string,
): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    console.log(searchQuery);
    await axios
      .post('http://localhost:3000/api/products', {
        searchQuery,
        latitude,
        longitude,
        radius,
        selectedType,
      })
      .then((res) => {
        const list = res.data;
        console.log(list);
        dispatch(ActionCreatorsList.setProductsActionCreator(list));
      })
      .catch((error) => console.log(error));
  };
};

// Get product info
export const getProductInfoThunkCreator = (
  url: string | undefined,
  searchUrl: string,
): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    if (url) {
      await axios
        .post('http://localhost:3000/api/product_info', {
          url,
          searchUrl,
        })
        .then((res) => {
          dispatch(ActionCreatorsList.setProductInfoActionCreator(res.data));
        })
        .catch((error) => console.log(error));
    }
  };
};

// Get website info
export const getWebsiteInfoThunkCreator = (
  websiteUrl: string,
  placeID: string,
): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    await axios
      .post('http://localhost:3000/api/web_info', {
        websiteUrl,
        placeID,
      })
      .then((res) => {
        dispatch(ActionCreatorsList.setWebsiteInfoActionCreator(res.data));
      })
      .catch((error) => console.log(error));
  };
};
