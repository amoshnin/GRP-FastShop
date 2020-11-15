// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '~/Content/Shared/Components/Components';
import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import EmailAuthScreen from './Screens/EmailAuthScreen/EmailAuthScreen';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

// REDUX
import {getAuthStatusSelector} from '~/Redux/Selectors/GeneralSelectors';

/////////////////////////////////////////////////////////////////////////////

const SearchScreens = () => {
  const Stack = createStackNavigator();
  const isAuth = useSelector(getAuthStatusSelector);

  return (
    <Stack.Navigator initialRouteName="ProfileScreen" mode={'modal'}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({navigation, route}: any) => ({headerShown: false})}
      />
      {!isAuth && (
        <Stack.Screen
          name="EmailAuthScreen"
          component={EmailAuthScreen}
          initialParams={{
            isRegister: false as boolean,
            backButtonClicked: false as boolean,
          }}
          options={({navigation, route}: any) => ({
            headerLeft: () => (
              <Icon
                icon={
                  <AntDesign name={'arrowleft'} size={24} color={'white'} />
                }
                onPress={() => navigation.setParams({backButtonClicked: true})}
                style={styles.icon}
              />
            ),
          })}
          listeners={({navigation, route}: any) => ({
            focus: () => {
              navigation.setParams({
                isRegister: route.params.isRegister,
              });
            },
          })}
        />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 14,
    marginBottom: 5,
  },
});

export default React.memo(SearchScreens, memoComparison);
