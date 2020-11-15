// PLUGINS IMPORTS //
import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  item: ProductType;

  loading: boolean;
  searchFailed: boolean;
};
const SlideItem: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  console.log(props.item);
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate('ProductItemScreen', {product: props.item})
      }>
      {props.searchFailed ? (
        <>
          <Text color={'black'}>Search failed</Text>
        </>
      ) : props.loading ? (
        <>
          <ActivityIndicator color={colors.notification} />
          <Text color={'black'}>
            Sending your product request to the satelites.
          </Text>
        </>
      ) : (
        <>
          <Text color={'black'}>{props.item.title}</Text>
          <Text color={'black'}>{props.item.price}</Text>
          <Image source={{uri: props.item.image}} style={styles.image} />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 37,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },

  image: {
    height: 90,
    width: 90,
    zIndex: 99,
  },
});

export default React.memo(SlideItem, memoComparison);
