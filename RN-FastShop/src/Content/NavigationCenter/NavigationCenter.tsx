// PLUGINS IMPORTS //
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import Home from '~/Content/Screens/GeneralScreens/SearchScreens/SearchScreens';
import SavedScreen from '~/Content/Screens/GeneralScreens/SavedScreen/SavedScreen';
import Profile from '~/Content/Screens/GeneralScreens/Profile/Profile';

// EXTRA IMPORTS //
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

////////////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const NavigationCenterContainer: React.FC<PropsType> = (props) => {
  const Tab = createMaterialBottomTabNavigator();
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: colors.card}}
      activeColor={colors.notification}
      labeled={false}
      inactiveColor="#9E9E9E">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}: any) => (
            <EvilIcons
              name={'search'}
              size={30}
              color={focused ? colors.notification : '#9E9E9E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          tabBarLabel: 'SavedScreen',
          tabBarIcon: ({focused}: any) => (
            <Entypo
              name={'bookmark'}
              size={26}
              color={focused ? colors.notification : '#9E9E9E'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}: any) => (
            <FontAwesome
              name={'user-circle'}
              size={24}
              color={focused ? colors.notification : '#9E9E9E'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationCenterContainer;
