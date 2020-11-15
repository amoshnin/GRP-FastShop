// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
  images: Array<string>;
};

const {height, width} = Dimensions.get('screen');
const UpperSection: React.FC<PropsType> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (props.images && props.images.length > 0) {
    return (
      <View>
        <Carousel
          data={props.images}
          renderItem={({item}: {item: string}) => (
            <Image source={{uri: item}} style={styles.image} />
          )}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => setActiveIndex(index)}
        />

        <Pagination
          dotsLength={props.images.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.pagination}
          dotStyle={styles.dot_style}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  } else {
    return <Image source={{uri: props.product.image}} style={styles.image} />;
  }
};

const DOT_SIZE = 10;
const styles = StyleSheet.create({
  image: {
    height: height / 1.6,
    resizeMode: 'cover',
  },

  pagination: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 0,
  },

  dot_style: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginHorizontal: 8,
    backgroundColor: 'white',
  },
});

export default React.memo(UpperSection, memoComparison);
