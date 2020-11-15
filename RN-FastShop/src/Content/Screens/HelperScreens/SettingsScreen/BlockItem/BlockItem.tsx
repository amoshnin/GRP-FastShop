// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  title: string;
  children: ReactNode;
};
const BlockItem: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text size={20} style={styles.title} isBold>
        {props.title}
      </Text>
      <View style={styles.children}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#302828',
    marginTop: 30,
    paddingBottom: 15,
  },

  title: {
    marginBottom: 8,
  },

  children: {},
});

export default React.memo(BlockItem, memoComparison);
