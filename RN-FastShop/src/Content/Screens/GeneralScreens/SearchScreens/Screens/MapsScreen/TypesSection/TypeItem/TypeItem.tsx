// PLUGINS IMPORTS //
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductTypeItemType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  type: ProductTypeItemType;

  selectedType: string;
  setSelectedType: (newSelectedType: string) => void;
};
const TypeItem: React.FC<PropsType> = (props) => {
  const {colors} = useTheme();
  const isSelected = props.selectedType === props.type.title;

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        {backgroundColor: isSelected ? colors.notification : colors.card},
      ]}
      onPress={() => {
        props.setSelectedType(props.type.title);
      }}>
      {props.type.icon}
      <Text style={styles.title}>{props.type.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 33,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginLeft: 10,
  },
});

export default React.memo(TypeItem, memoComparison);
