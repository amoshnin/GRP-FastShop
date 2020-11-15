//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import AsyncStorage from '@react-native-community/async-storage';
import {SearchSettingsType} from '~/Redux/Types/GeneralTypes';

////////////////////////////////////////////////////////////////////////

const initialState = {
  isOnline: false as boolean,
  isAuth: false as boolean,

  SearchSettings: {} as SearchSettingsType,
};

type initialStateType = typeof initialState;

// *REDUCER* //
const GeneralGetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === 'SET_ONLINE_STATUS') {
    return {
      ...state,
      isOnline: action.onlineStatus,
    };
  }

  if (action.type === 'SET_AUTH_STATUS') {
    return {
      ...state,
      isAuth: action.authStatus,
    };
  }

  if (action.type === 'SET_SEARCH_SETTINGS') {
    return {
      ...state,
      SearchSettings: action.searchSettings,
    };
  }

  return state;
};

export default GeneralGetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setOnlineStatusActionCreator: (onlineStatus: boolean) =>
    ({
      type: 'SET_ONLINE_STATUS',
      onlineStatus,
    } as const),

  setAuthStatusActionCreator: (authStatus: boolean) =>
    ({
      type: 'SET_AUTH_STATUS',
      authStatus,
    } as const),

  setSearchSettingsActionCreator: (searchSettings: SearchSettingsType) =>
    ({
      type: 'SET_SEARCH_SETTINGS',
      searchSettings,
    } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Get settings data
export const getSearchSettingsThunkCreator = (): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const data = await AsyncStorage.getItem('searchSettings');
    data &&
      dispatch(
        ActionCreatorsList.setSearchSettingsActionCreator(JSON.parse(data)),
      );
  };
};
