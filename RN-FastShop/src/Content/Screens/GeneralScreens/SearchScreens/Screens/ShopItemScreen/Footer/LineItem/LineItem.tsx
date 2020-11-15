// PLUGINS IMPORTS //
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  text: string;
};

const LineItem: React.FC<PropsType> = (props) => {
  return (
    <Text style={styles.text} color={'silver'}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 4,
    paddingLeft: '20%',
  },
});

export default React.memo(LineItem, memoComparison);
