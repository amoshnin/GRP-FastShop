// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// COMPONENTS IMPORTS //
import SlideItem from './SlideItem/SlideItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ListType, ProductType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

const {width} = Dimensions.get('screen');
type PropsType = {
  mapRef: {current: any};
  lists: Array<ListType>;
  products: Array<ProductType>;

  loading: boolean;
  searchFailed: boolean;
};
const CarouselSection: React.FC<PropsType> = (props) => {
  const centerMapOnMarker = (markerIndex: number) => {
    const markerData = props.lists[markerIndex];

    if (!markerData || !props.mapRef.current) {
      return;
    }
    props.mapRef.current.animateToRegion({
      latitude: markerData.shopData.geometry.latitude,
      longitude: markerData.shopData.geometry.longitude,
      latitudeDelta: 0.0315,
      longitudeDelta: 0.0258,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Carousel
        data={
          props.loading || props.searchFailed ? [{} as any] : props.products
        }
        renderItem={({item}: {item: ProductType}) => (
          <SlideItem
            item={item}
            loading={props.loading}
            searchFailed={props.searchFailed}
          />
        )}
        sliderWidth={width}
        itemWidth={width / 1.2}
        removeClippedSubviews={false}
        onSnapToItem={(index) => centerMapOnMarker(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
  },
});

export default React.memo(CarouselSection, memoComparison);
