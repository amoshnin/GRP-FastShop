import {AppStateType} from '~/Redux/ReduxStore';

export const getUserDataSelector = (state: AppStateType) => {
  return state.AuthGetReducer.userData;
};
