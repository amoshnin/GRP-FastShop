// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  sizes: Array<string>;
};
const SizesSection: React.FC<PropsType> = (props) => {
  return (
    <ScrollView
      style={styles.wrapper}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {props.sizes.map((size) => (
        <View style={styles.block}>
          <Text>{size}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const BLOCK_SIZE = 45;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 25,
    paddingLeft: 10,
  },

  block: {
    borderWidth: 2,
    borderColor: 'white',
    height: BLOCK_SIZE,
    width: BLOCK_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 3,
  },
});

export default React.memo(SizesSection, memoComparison);
