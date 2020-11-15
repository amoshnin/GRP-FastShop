// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const OfflineScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('~/Images/offline.png')} style={styles.image} />
      <Text color={'black'} isBold isCenterAlign>
        Seems like you have problems with your internet connection. Please try
        again.
      </Text>
    </View>
  );
};

const IMAGE_SIZE = 320;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
    marginTop: -50,
  },
});

export default React.memo(OfflineScreen, memoComparison);
