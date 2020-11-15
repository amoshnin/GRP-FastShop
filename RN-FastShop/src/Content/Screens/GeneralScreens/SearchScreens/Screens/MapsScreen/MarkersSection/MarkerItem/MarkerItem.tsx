// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';
import {Marker, Callout} from 'react-native-maps';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ListType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  marker: ListType;
};
const MarkerItem: React.FC<PropsType> = (props) => {
  return (
    <Marker
      coordinate={props.marker.shopData.geometry}
      image={require('~/Images/marker.png')}>
      <Callout tooltip>
        <View style={{marginBottom: -18}}>
          <View style={styles.bubble}>
            <View>
              <Text color={'black'}>
                {props.marker.shopData.name.slice(0, 18)}
              </Text>
              <Text color={'black'}>
                {/* {props.marker.description.slice(0, 6)} */}
              </Text>
            </View>
            {/* <Image style={styles.image} source={props.marker.image} /> */}
          </View>
          <View style={styles.arrow_border} />
          <View style={styles.arrow} />
        </View>
      </Callout>
    </Marker>
  );
};

const IMAGE_SIZE = 35;
const styles = StyleSheet.create({
  bubble: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },

  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: 'white',
    borderWidth: 14,
    alignSelf: 'center',
    marginTop: -28.1,
  },

  arrow_border: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 14,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    marginLeft: 15,
  },
});

export default React.memo(MarkerItem, memoComparison);
