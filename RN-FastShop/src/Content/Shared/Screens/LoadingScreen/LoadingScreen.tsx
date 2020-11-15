// PLUGINS IMPORTS //
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const LoadingScreen = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.wrapper}>
      <ActivityIndicator size={'large'} color={colors.notification} />
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

export default React.memo(LoadingScreen, memoComparison);
