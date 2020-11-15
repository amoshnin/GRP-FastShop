// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import BottomPanel from './BottomPanel/BottomPanel';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const UnAuthContent = () => {
  return (
    <>
      <View style={styles.content}>
        <Text size={22} isBold isCenterAlign>
          Покупки проще простого
        </Text>
      </View>

      <BottomPanel />
    </>
  );
};

const styles = StyleSheet.create({
  content: {alignItems: 'center', justifyContent: 'center', flex: 1.5},
});

export default React.memo(UnAuthContent, memoComparison);
