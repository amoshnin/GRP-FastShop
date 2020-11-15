// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  setSearchLocation: (newSearchLocation: {
    longitude: number;
    latitude: number;
  }) => void;
};
const ButtonsSection: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Button
        style={styles.button}
        text={'Select location'}
        onPress={() => {
          props.setSearchLocation(props.location);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 999,
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
  },

  button: {
    width: '45%',
  },
});

export default React.memo(ButtonsSection, memoComparison);
