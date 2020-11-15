// PLUGINS IMPORTS //
import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import geolocation from '@react-native-community/geolocation';

// COMPONENTS IMPORTS //
import TypesSection from './TypesSection/TypesSection';
import MarkersSection from './MarkersSection/MarkersSection';
import CarouselSection from './CarouselSection/CarouselSection';
import ButtonsSection from './ButtonsSection/ButtonsSection';

import LoadingScreen from '~/Content/Shared/Screens/LoadingScreen/LoadingScreen';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {getProductsThunkCreator} from '~/Redux/Reducers/ListsReducers/ListsGetReducer';
//
import {getProductsListSelector} from '~/Redux/Selectors/ListsSelectors';
import {useOrderProducts} from '~/Content/Shared/Helpers/Hooks/utils';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: {params: any};
};
const MapsScreen: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(true as boolean);
  const [location, setLocation] = useState({
    longitude: -0.735478,
    latitude: 37.929871,
    latitudeDelta: 0.00022,
    longitudeDelta: 0.0221,
  });
  const [searchLocation, setSearchLocation] = useState({
    longitude: -0.735478,
    latitude: 37.929871,
  });
  const [selectedType, setSelectedType] = useState('clothing_store' as string);
  const dispatch = useDispatch();
  const lists = useSelector(getProductsListSelector);
  const products = useOrderProducts(lists);
  const mapRef = useRef(null);

  useEffect(() => {
    // geolocation.getCurrentPosition((info) => {
    //   const {latitude, longitude} = info.coords;
    //   const location = {
    //     latitude,
    //     longitude,
    //   };
    //   setLocation((prev) => ({...prev, ...location}));
    //   setSearchLocation(location);
    // });
  }, []);

  const r = 400;
  const getProducts = () => {
    setLoading(true);
    const {searchQuery} = props.route.params;
    dispatch(
      getProductsThunkCreator(
        searchQuery,
        searchLocation.latitude,
        searchLocation.longitude,
        r,
        selectedType,
      ),
    );
    setTimeout(() => {
      if (products.length <= 0) {
        setLoading(false);
      }
    }, 5000);
  };

  useEffect(() => {
    getProducts();
  }, [searchLocation]);

  useEffect(() => {
    getProducts();
  }, [props.route.params]);

  useEffect(() => {
    getProducts();
  }, [selectedType]);

  useEffect(() => {
    if (products && products.length > 0) setLoading(false);
  }, [products]);

  const searchFailed = !loading && products.length <= 0;
  return location.longitude !== 0 ? (
    <>
      <TypesSection
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <MapView
        ref={mapRef}
        style={styles.wrapper}
        onRegionChange={(location) => setLocation(location)}
        initialRegion={location}>
        <Circle center={searchLocation} radius={r} />
        <MarkersSection lists={lists} />
      </MapView>

      <ButtonsSection
        location={location}
        setSearchLocation={setSearchLocation}
      />
      <CarouselSection
        mapRef={mapRef}
        lists={lists}
        products={products}
        loading={loading}
        searchFailed={searchFailed}
      />
    </>
  ) : (
    <LoadingScreen />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default React.memo(MapsScreen, memoComparison);
