// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from '~/Content/Shared/Components/Components';
import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS IMPORTS //
import MainScreen from './Screens/MainScreen/MainScreen';
import MapsScreen from './Screens/MapsScreen/MapsScreen';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import IonIcons from 'react-native-vector-icons/Ionicons';

// REDUX

/////////////////////////////////////////////////////////////////////////////

const SearchScreens = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MainScreen" mode={'modal'}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({navigation, route}) => ({
          headerRight: () => (
            <Icon
              style={styles.icon}
              icon={<IonIcons name={'ios-filter'} size={26} color={'white'} />}
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MapsScreen"
        component={MapsScreen}
        initialParams={{
          searchQuery: null as string | null,
        }}
        options={({navigation, route}) => ({
          headerRight: () => (
            <Icon
              style={styles.icon}
              icon={<IonIcons name={'ios-filter'} size={26} color={'white'} />}
              onPress={() => navigation.navigate('SettingsScreen')}
            />
          ),
        })}
        listeners={({navigation, route}: any) => ({
          focus: () => {
            navigation.setParams({
              searchQuery: route.params.searchQuery,
            });
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 23,
    marginBottom: 4,
  },
});

export default React.memo(SearchScreens, memoComparison);
