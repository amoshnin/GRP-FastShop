// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

// COMPONENTS IMPORTS //
import AuthContent from './AuthContent/AuthContent';
import UnAuthContent from './UnAuthContent/UnAuthContent';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import {getAuthStatusSelector} from '~/Redux/Selectors/GeneralSelectors';

/////////////////////////////////////////////////////////////////////////////

const MainScreen = () => {
  const isAuth = useSelector(getAuthStatusSelector);

  return (
    <View style={styles.wrapper}>
      {isAuth ? <AuthContent /> : <UnAuthContent />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default React.memo(MainScreen, memoComparison);
