//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {ProductType} from '~/Redux/Types/ListsTypes';

////////////////////////////////////////////////////////////////////////

const initialState = {};

type initialStateType = typeof initialState;

// *REDUCER* //
const SavedSetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  return state;
};

export default SavedSetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Add saved product
export const addProductThunkCreator = (product: ProductType): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const state = getState();
    const firestore = getFirestore();

    await firestore
      .collection('SavedProducts')
      .doc(state.firebase.auth.uid)
      .set(
        {
          res: firestore.FieldValue.arrayUnion(product),
        },
        {merge: true},
      );
  };
};

// Remove saved product
export const removeProductThunkCreator = (product: ProductType): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const state = getState();
    const firestore = getFirestore();

    await firestore
      .collection('SavedProducts')
      .doc(state.firebase.auth.uid)
      .set(
        {
          res: firestore.FieldValue.arrayRemove(product),
        },
        {merge: true},
      );
  };
};
