// PLUGINS IMPORTS //
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import * as Localization from 'react-native-localization';
// import {Asset} from 'expo-asset';
import {Provider, useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// REDUX CONFIGURATION //
import ReduxStore from '~/Redux/ReduxStore';
import {
  ActionCreatorsList as GeneralReducerActionCreatorsList,
  getSearchSettingsThunkCreator,
} from '~/Redux/Reducers/GeneralReducers/GeneralGetReducer';
import {ActionCreatorsList as ListsReducerActionCreatorsList} from '~/Redux/Reducers/ListsReducers/ListsGetReducer';
import {getSavedProductsThunkCreator} from '~/Redux/Reducers/SavedReducers/SavedGetReducer';
//
import {ProductType, ShopDataType} from '~/Redux/Types/ListsTypes';
import {DefaultProductInfo} from '~/Redux/Helpers/DefaultValues/DefaultValues';

// FIREBASE SETTINGS //
import Firebase from './src/API/FirebaseConfig';
import firebase from 'firebase/app';
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';

// COMPONENTS IMPORTS //
import NavigationCenter from '~/Content/NavigationCenter/NavigationCenter';
import SettingsScreen from '~/Content/Screens/HelperScreens/SettingsScreen/SettingsScreen';

import StarterScreen from '~/Content/Shared/Screens/StarterScreen/StarterScreen';
import LoadingScreen from '~/Content/Shared/Screens/LoadingScreen/LoadingScreen';
import OfflineScreen from '~/Content/Shared/Screens/OfflineScreen/OfflineScreen';

// Search screens
import ProductItemScreen from '~/Content/Screens/GeneralScreens/SearchScreens/Screens/ProductItemScreen/ProductItemScreen';
import ShopItemScreen from '~/Content/Screens/GeneralScreens/SearchScreens/Screens/ShopItemScreen/ShopItemScreen';

// EXTRA IMPORTS //
import {
  LightTheme,
  DarkTheme,
} from '~/Content/Shared/Helpers/Constants/Theme/Theme';
import {getOnlineStatusSelector} from '~/Redux/Selectors/GeneralSelectors';

/////////////////////////////////////////////////////////////////////////////

console.disableYellowBox = true;
const App = () => {
  const [loading, setLoading] = useState(false as boolean);
  const [appLaunched, setAppLaunched] = useState(false as boolean);
  const [theme, setTheme] = useState('Dark' as string);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  const {
    setOnlineStatusActionCreator,
    setAuthStatusActionCreator,
  } = GeneralReducerActionCreatorsList;
  const {setProductInfoActionCreator} = ListsReducerActionCreatorsList;
  const isOnline = useSelector(getOnlineStatusSelector);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      dispatch(setOnlineStatusActionCreator(state.isConnected));
    });
  }, []);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setAuthStatusActionCreator(true));
        getData().then(() => setLoading(false));
      } else {
        dispatch(setAuthStatusActionCreator(false));
        getData().then(() => setLoading(false));
      }
    });
  }, []);

  const getData = async () => {
    if (await AsyncStorage.getItem('appUsed')) {
      setAppLaunched(true);
      dispatch(getSavedProductsThunkCreator());
      dispatch(getSearchSettingsThunkCreator());
    } else {
      // Asset.fromModule(require("~/Images/logo.png")).downloadAsync()
      setAppLaunched(false);
    }

    const themeValue = await AsyncStorage.getItem('theme');
    setTheme(themeValue || 'Dark');

    // console.log(Localization);
    // const language = String(Localization.locale).slice(0, 2);
    // i18n.changeLanguage(language);
  };

  return (
    <>
      <NavigationContainer
        theme={
          theme === 'Light'
            ? LightTheme
            : theme === 'Dark'
            ? DarkTheme
            : DarkTheme
        }>
        <Stack.Navigator initialRouteName="NavigationCenter" mode={'modal'}>
          {loading ? (
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{headerShown: false}}
            />
          ) : appLaunched ? (
            isOnline ? (
              <>
                <Stack.Screen
                  name="NavigationCenter"
                  component={NavigationCenter}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="SettingsScreen"
                  component={SettingsScreen}
                />
                {/*  */}
                {/* Search screens */}
                <Stack.Screen
                  name="ProductItemScreen"
                  component={ProductItemScreen}
                  options={({navigation, route}) => ({
                    headerTitle: '',
                    headerTransparent: true,
                  })}
                  initialParams={{
                    product: {} as ProductType,
                  }}
                  listeners={({navigation, route}: any) => ({
                    focus: () => {
                      navigation.setParams({
                        product: route.params.product,
                      });
                    },
                    blur: () => {
                      dispatch(setProductInfoActionCreator(DefaultProductInfo));
                    },
                  })}
                />
                <Stack.Screen
                  name="ShopItemScreen"
                  component={ShopItemScreen}
                  initialParams={{
                    shopData: {} as ShopDataType,
                  }}
                  options={({navigation, route}: any) => ({
                    headerTitle: route.params.shopData.name,
                  })}
                  listeners={({navigation, route}: any) => ({
                    focus: () => {
                      navigation.setParams({
                        shopData: route.params.shopData,
                      });
                    },
                  })}
                />
              </>
            ) : (
              <Stack.Screen
                name="OfflineScreen"
                component={OfflineScreen}
                options={{headerShown: false}}
              />
            )
          ) : (
            <Stack.Screen
              name="StarterScreen"
              component={StarterScreen}
              options={{headerShown: false}}
              initialParams={{
                setAppLaunched,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} />
    </>
  );
};

const AppWrapper = () => {
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
  };

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: ReduxStore.dispatch,
    createFirestoreInstance,
  };

  return (
    <Provider store={ReduxStore}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default AppWrapper;
