// PLUGINS IMPORTS //
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import TypeItem from './TypeItem/TypeItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import TypesList from './Data/TypesList';

// REDUX

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  selectedType: string;
  setSelectedType: (newSelectedType: string) => void;
};

const TypesSection: React.FC<PropsType> = (props) => {
  return (
    <ScrollView
      style={styles.wrapper}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {TypesList.map((type) => (
        <TypeItem
          type={type}
          selectedType={props.selectedType}
          setSelectedType={props.setSelectedType}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 15,
    zIndex: 99,
  },
});

export default React.memo(TypesSection, memoComparison);
