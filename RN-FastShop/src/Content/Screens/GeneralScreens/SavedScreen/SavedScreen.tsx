// PLUGINS IMPORTS //
import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// COMPONENTS IMPORTS //
import ProductItem from './ProductItem/ProductItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import EmptySVG from '~/Images/SVGs/EmptySVG';

// REDUX
import {getSavedProductsSelector} from '~/Redux/Selectors/SavedProductsSelectors';
import {getAuthStatusSelector} from '~/Redux/Selectors/GeneralSelectors';

/////////////////////////////////////////////////////////////////////////////

const SavedScreen = () => {
  const savedProducts = useSelector(getSavedProductsSelector);
  const isAuth = useSelector(getAuthStatusSelector);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      {isAuth ? (
        savedProducts.length > 0 ? (
          <ScrollView style={styles.wrapper}>
            {savedProducts.map((product) => (
              <ProductItem product={product} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.empty_wrapper}>
            <EmptySVG height={215} />
            <Text size={21} style={styles.empty_text} isBold isCenterAlign>
              You don't have any products saved yet.
            </Text>
            <Button
              style={styles.button}
              text={'Search products'}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        )
      ) : (
        <View style={styles.empty_wrapper}>
          <Text size={21} isBold isCenterAlign>
            Please login or register to save your products
          </Text>
          <Button
            style={styles.button}
            text={'Login or register'}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},

  empty_wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },

  empty_text: {
    marginTop: 24,
  },

  button: {
    marginTop: 25,
    width: '65%',
  },
});

export default React.memo(SavedScreen, memoComparison);
