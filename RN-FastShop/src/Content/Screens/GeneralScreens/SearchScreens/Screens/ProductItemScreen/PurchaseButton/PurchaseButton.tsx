// PLUGINS IMPORTS //
import React from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/Components';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
};
const PurchaseButton: React.FC<PropsType> = (props) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.wrapper, {backgroundColor: colors.card}]}>
      <Text isBold>{props.product.price}</Text>
      <Button
        text={'BUY NOW'}
        style={styles.button}
        onPress={() => Linking.openURL(props.product.link)}
      />
    </View>
  );
};

const PADDING_VERTICAL = 40;
const styles = StyleSheet.create({
  wrapper: {
    elevation: 25,
    paddingHorizontal: 25,
    paddingTop: PADDING_VERTICAL - 19,
    paddingBottom: PADDING_VERTICAL,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: '25%',
    height: 25,
  },
});

export default React.memo(PurchaseButton, memoComparison);
