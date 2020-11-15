// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import SizesSection from './SizesSection/SizesSection';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductType, ProductInfoType} from '~/Redux/Types/ListsTypes';
//

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
  ProductInfo: ProductInfoType;
};
const Body: React.FC<PropsType> = (props) => {
  const {sizes} = props.ProductInfo;

  return (
    <View>
      {sizes && sizes.length > 0 && <SizesSection sizes={sizes} />}
      {/* <Text isCenterAlign>
        {props.ProductInfo.description?.replaceAll('-', '')}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Body, memoComparison);
