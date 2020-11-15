//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {UserDataType} from '~/Redux/Types/AuthTypes';

////////////////////////////////////////////////////////////////////////

const initialState = {
  userData: {} as UserDataType,
};

type initialStateType = typeof initialState;

// *REDUCER* //
const AuthGetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === 'SET_USER_DATA') {
    return {
      ...state,
      userData: action.userData,
    };
  }

  return state;
};

export default AuthGetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUserDataActionCreator: (userData: UserDataType) =>
    ({
      type: 'SET_USER_DATA',
      userData,
    } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Get products
export const getUserDataThunkCreator = (): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const state = getState();
    const firestore = getFirestore();

    await firestore
      .collection('users')
      .doc(state.firebase.auth.uid)
      .get()
      .then(async (doc: any) => {
        const data = await doc.data();
        dispatch(ActionCreatorsList.setUserDataActionCreator(data));
      });
  };
};
