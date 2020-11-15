// PLUGINS IMPORTS //
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Icon} from '~/Content/Shared/Components/Components';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Firebase from '~/API/FirebaseConfig';

// COMPONENTS IMPORTS //
import LineItem from './LineItem/LineItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// REDUX
import {getUserDataThunkCreator} from '~/Redux/Reducers/AuthReducers/AuthGetReducer';
//
import {getUserDataSelector} from '~/Redux/Selectors/AuthSelectors';
import {ScrollView} from 'react-native-gesture-handler';

/////////////////////////////////////////////////////////////////////////////

const AuthContent = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserDataSelector);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getUserDataThunkCreator());
  }, []);

  console.log(userInfo);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text size={26} isBold>
          Hi, {userInfo.name}
        </Text>

        <View style={styles.list_wrap}>
          <LineItem
            text={'Search configuration'}
            onPress={() => navigation.navigate('SettingsScreen')}
            icon={
              <Icon
                icon={<Feather name={'settings'} color={'white'} size={24} />}
              />
            }
          />

          <LineItem
            text={'Change password'}
            icon={
              <Icon
                icon={<FontAwesome5 name={'lock'} color={'white'} size={24} />}
              />
            }
          />
          <LineItem
            text={'Change email'}
            icon={
              <Icon
                icon={
                  <MaterialCommunityIcons
                    name={'email-edit-outline'}
                    color={'white'}
                    size={24}
                  />
                }
              />
            }
          />
          <LineItem
            text={'Logout'}
            onPress={() => Firebase.auth().signOut()}
            icon={
              <Icon
                icon={
                  <SimpleLineIcons name={'logout'} color={'white'} size={24} />
                }
              />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},

  container: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  list_wrap: {
    marginTop: 20,
  },
});

export default React.memo(AuthContent, memoComparison);
