//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';

////////////////////////////////////////////////////////////////////////

const initialState = {};

type initialStateType = typeof initialState;

// *REDUCER* //
const AuthSetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  return state;
};

export default AuthSetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Get products
export const registerUserThunkCreator = (name?: string | null): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const state = getState();
    const firestore = getFirestore();

    await firestore
      .collection('users')
      .doc(state.firebase.auth.uid)
      .set({name});
  };
};
