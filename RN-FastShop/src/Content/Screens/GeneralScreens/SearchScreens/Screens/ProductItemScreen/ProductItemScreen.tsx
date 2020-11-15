// PLUGINS IMPORTS //
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import Body from './Body/Body';
import PurchaseButton from './PurchaseButton/PurchaseButton';

import LoadingScreen from '~/Content/Shared/Screens/LoadingScreen/LoadingScreen';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {getProductInfoSelector} from '~/Redux/Selectors/ListsSelectors';
import {ProductType} from '~/Redux/Types/ListsTypes';
//
import {getProductInfoThunkCreator} from '~/Redux/Reducers/ListsReducers/ListsGetReducer';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: {params: {product: ProductType}};
};
const ProductItemScreen: React.FC<PropsType> = (props) => {
  const {product} = props.route.params;
  const dispatch = useDispatch();
  const ProductInfo = useSelector(getProductInfoSelector);

  useEffect(() => {
    dispatch(
      getProductInfoThunkCreator(product.shopData?.website, product.link),
    );
  }, [product]);

  if (product && Object.values(product).length > 0) {
    return (
      <>
        <ScrollView>
          <Header product={product} ProductInfo={ProductInfo} />
          <Body product={product} ProductInfo={ProductInfo} />
        </ScrollView>

        <PurchaseButton product={product} />
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default React.memo(ProductItemScreen, memoComparison);
