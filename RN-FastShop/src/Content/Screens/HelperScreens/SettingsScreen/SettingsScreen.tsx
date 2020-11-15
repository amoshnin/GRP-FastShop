// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button} from '~/Content/Shared/Components/Components';
import AsyncStorage from '@react-native-community/async-storage';
import RangeSlider from 'rn-range-slider';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
// @ts-ignore
import Slider from 'react-native-slider';

// COMPONENTS IMPORTS //
import BlockItem from './BlockItem/BlockItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ActionCreatorsList} from '~/Redux/Reducers/GeneralReducers/GeneralGetReducer';
import {getSearchSettingsSelector} from '~/Redux/Selectors/GeneralSelectors';

/////////////////////////////////////////////////////////////////////////////

const SettingsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const SearchSettings = useSelector(getSearchSettingsSelector);

  const SLIDER_WIDTH = '90%';
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <BlockItem title={`Radius (${SearchSettings.radius} m)`}>
          <Slider
            value={SearchSettings.radius}
            onValueChange={(radius: number) =>
              dispatch(
                ActionCreatorsList.setSearchSettingsActionCreator({
                  ...SearchSettings,
                  radius,
                }),
              )
            }
            step={1}
            maximumValue={20000}
            width={SLIDER_WIDTH}
          />
        </BlockItem>

        <BlockItem
          title={`Price (${SearchSettings.startPrice} - ${SearchSettings.endPrice})`}>
          <RangeSlider
            style={styles.range_slider}
            gravity={'center'}
            min={0}
            max={8000}
            step={5}
            selectionColor="#2E2E2E"
            blankColor="#643636"
            labelBackgroundColor={'#191919'}
            initialHighValue={SearchSettings.endPrice}
            initialLowValue={SearchSettings.startPrice}
            onValueChanged={(startPrice: any, endPrice: any) =>
              dispatch(
                ActionCreatorsList.setSearchSettingsActionCreator({
                  ...SearchSettings,
                  startPrice,
                  endPrice,
                }),
              )
            }
          />
        </BlockItem>
      </ScrollView>
      <Button
        text={'Save'}
        style={styles.button}
        onPress={async () => {
          await AsyncStorage.setItem(
            'searchSettings',
            JSON.stringify(SearchSettings),
          );
          navigation.goBack();
        }}
        isCenterAlign
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
  },

  container: {flex: 1},

  button: {
    marginBottom: 50,
  },

  range_slider: {height: 80, marginTop: -40},
});

export default React.memo(SettingsScreen, memoComparison);
