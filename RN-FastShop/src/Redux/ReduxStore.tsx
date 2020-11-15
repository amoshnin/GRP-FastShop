// REDUX IMPORTS //
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

// FIREBASE IMPORTS //
import {getFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {firestoreReducer} from 'redux-firestore';
import FirebaseConfig from '~/API/FirebaseConfig';

// REDUCERS IMPORTS //
// General Reducer
import GeneralReducer from '~/Redux/Reducers/GeneralReducers/GeneralGetReducer';
// User Reducer
import AuthGetReducer from '~/Redux/Reducers/AuthReducers/AuthGetReducer';
// Products Reducer
import ListsReducer from '~/Redux/Reducers/ListsReducers/ListsGetReducer';
// Saved products
import SavedGetReducer from '~/Redux/Reducers/SavedReducers/SavedGetReducer';

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  GeneralReducer,
  AuthGetReducer,
  ListsReducer,
  SavedGetReducer,

  // Firebase //
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

type reducersType = typeof reducers;
export type AppStateType = ReturnType<reducersType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<
  T extends {[key: string]: (...args: any[]) => any}
> = ReturnType<PropertiesTypes<T>>;

const composeEnhancers = compose;
const ReduxStore = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({getFirestore, getFirebase}),
    ),
    reduxFirestore(FirebaseConfig),
  ),
);

export default ReduxStore;
