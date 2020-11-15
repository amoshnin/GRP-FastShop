// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

// COMPONENTS IMPORTS //

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ShopDataType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  shopData: ShopDataType;
};

const Body: React.FC<PropsType> = (props) => {
  const {latitude, longitude} = props.shopData.geometry;

  return (
    <View style={styles.wrapper}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        scrollEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}>
        <Marker
          coordinate={props.shopData.geometry}
          image={require('~/Images/marker.png')}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },

  map: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
});

export default React.memo(Body, memoComparison);
