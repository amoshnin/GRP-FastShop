// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  element: ReactNode;
  icon: ReactNode;

  onPress?: () => void;
};
const LineItem: React.FC<PropsType> = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      {props.icon}

      {props.element}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default React.memo(LineItem, memoComparison);
