import {AppStateType} from '~/Redux/ReduxStore';

export const getOnlineStatusSelector = (state: AppStateType) => {
  return state.GeneralReducer.isOnline;
};

export const getAuthStatusSelector = (state: AppStateType) => {
  return state.GeneralReducer.isAuth;
};

export const getSearchSettingsSelector = (state: AppStateType) => {
  return state.GeneralReducer.SearchSettings;
};
