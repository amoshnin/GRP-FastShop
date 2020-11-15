// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/Components';
import AsyncStorage from '@react-native-community/async-storage';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';
import {SafeAreaView} from 'react-native-safe-area-context';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: {params: any};
};
const StarterScreen: React.FC<PropsType> = (props) => {
  const {setAppLaunched} = props.route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Starter screen</Text>
      <Button
        text={'Get started'}
        onPress={async () => {
          await AsyncStorage.setItem('appUsed', 's');
          await setAppLaunched(true);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(StarterScreen, memoComparison);
