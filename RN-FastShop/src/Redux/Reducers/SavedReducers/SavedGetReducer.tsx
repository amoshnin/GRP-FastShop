//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {ProductType} from '~/Redux/Types/ListsTypes';

////////////////////////////////////////////////////////////////////////

const initialState = {
  savedProducts: [] as Array<ProductType>,
  savedProductsIDs: [] as Array<string>,
};

type initialStateType = typeof initialState;

// *REDUCER* //
const SavedGetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === 'SET_SAVED_PRODUCTS_LIST') {
    return {
      ...state,
      savedProducts: action.products,
      savedProductsIDs: action.products.map((item) => item.link),
    };
  }

  return state;
};

export default SavedGetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setSavedProductsListActionCreator: (products: Array<ProductType>) =>
    ({
      type: 'SET_SAVED_PRODUCTS_LIST',
      products,
    } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Get saved products
export const getSavedProductsThunkCreator = (): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const state = getState();
    const firestore = getFirestore();

    await firestore
      .collection('SavedProducts')
      .doc(state.firebase.auth.uid)
      .onSnapshot(async (doc: any) => {
        const data = await doc.data().res;
        dispatch(ActionCreatorsList.setSavedProductsListActionCreator(data));
      });
  };
};
