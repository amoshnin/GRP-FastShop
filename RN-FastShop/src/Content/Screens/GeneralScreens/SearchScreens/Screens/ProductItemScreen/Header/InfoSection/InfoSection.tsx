// PLUGINS IMPORTS //
import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {Text, Icon} from '~/Content/Shared/Components/Components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// REDUX
import {
  addProductThunkCreator,
  removeProductThunkCreator,
} from '~/Redux/Reducers/SavedReducers/SavedSetReducer';
//
import {getSavedProductsIDsSelector} from '~/Redux/Selectors/SavedProductsSelectors';
import {ProductType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
};

const InfoSection: React.FC<PropsType> = (props) => {
  const savedProductsIDs = useSelector(getSavedProductsIDsSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const isSelected = savedProductsIDs.includes(props.product.link);
  return (
    <View style={[styles.wrapper, {backgroundColor: colors.card}]}>
      <View style={styles.title_wrap}>
        <Text size={18}>{props.product.title}</Text>
        <Icon
          style={styles.shop_title}
          icon={
            <Text color={'white'} size={16} isBold>
              {props.product.shopData?.name}
            </Text>
          }
          onPress={() =>
            navigation.navigate('ShopItemScreen', {
              shopData: props.product.shopData,
            })
          }
        />
      </View>
      <View style={styles.icons_wrapper}>
        <Icon
          icon={
            <FontAwesome
              name={isSelected ? 'bookmark' : 'bookmark-o'}
              color={'white'}
              size={27}
              style={styles.icon}
            />
          }
          onPress={() =>
            dispatch(
              isSelected
                ? removeProductThunkCreator(props.product)
                : addProductThunkCreator(props.product),
            )
          }
        />
        <Icon
          icon={<EvilIcons name={'external-link'} color={'white'} size={40} />}
          onPress={() => Linking.openURL(props.product.link)}
        />
      </View>
    </View>
  );
};

const BORDER_RADIUS = 35;
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title_wrap: {
    maxWidth: '60%',
  },

  shop_title: {
    marginTop: 10,
  },

  icons_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {marginRight: 8, marginTop: 1},
});

export default React.memo(InfoSection, memoComparison);
