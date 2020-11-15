// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/Components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {removeProductThunkCreator} from '~/Redux/Reducers/SavedReducers/SavedSetReducer';
import {ProductType} from '~/Redux/Types/ListsTypes';
import {TouchableOpacity} from 'react-native-gesture-handler';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
};
const ProductItem: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('ProductItemScreen', {product: props.product});
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onNavigate}>
        <Image style={styles.image} source={{uri: props.product.image}} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View>
          <Text style={styles.title} onPress={onNavigate} isBold>
            {props.product.title}
          </Text>
          <Text color={'silver'}>Price: {props.product.price}</Text>
          <Text color={'silver'}>Shop: {props.product.shopData?.name}</Text>
        </View>
        <View style={styles.row}>
          <Button style={styles.button} text={'View'} onPress={onNavigate} />
          <Button
            style={styles.button}
            text={'Remove'}
            onPress={() => dispatch(removeProductThunkCreator(props.product))}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },

  image: {
    height: 140,
    width: 110,
    borderRadius: 4,
  },

  content: {flex: 2.3, justifyContent: 'space-between', marginLeft: 10},

  title: {
    marginBottom: 4,
  },

  button: {
    width: '30%',
    height: 30,
    marginHorizontal: 20,
  },
});

export default React.memo(ProductItem, memoComparison);
