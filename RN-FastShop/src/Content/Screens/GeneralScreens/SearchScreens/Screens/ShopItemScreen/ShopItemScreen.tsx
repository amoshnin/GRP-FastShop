// PLUGINS IMPORTS //
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// COMPONENTS IMPORTS //
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {getWebsiteInfoThunkCreator} from '~/Redux/Reducers/ListsReducers/ListsGetReducer';
//
import {getWebsiteInfoSelector} from '~/Redux/Selectors/ListsSelectors';
import {ShopDataType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;
  route: {params: {shopData: ShopDataType}};
};

const ShopItemScreen: React.FC<PropsType> = (props) => {
  const {shopData} = props.route.params;
  const dispatch = useDispatch();
  const websiteInfo = useSelector(getWebsiteInfoSelector);

  useEffect(() => {
    dispatch(getWebsiteInfoThunkCreator(shopData.website, shopData.placeID));
  }, [shopData]);

  return (
    <ScrollView style={styles.wrapper}>
      <Header shopData={shopData} websiteInfo={websiteInfo} />
      <Body shopData={shopData} />
      <Footer websiteInfo={websiteInfo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});

export default React.memo(ShopItemScreen, memoComparison);
