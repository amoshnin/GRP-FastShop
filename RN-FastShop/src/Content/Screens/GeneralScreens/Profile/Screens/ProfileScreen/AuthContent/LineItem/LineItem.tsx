// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';
import {RectButton} from 'react-native-gesture-handler';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  text: string;
  icon: ReactNode;

  onPress?: () => void;
};
const LineItem: React.FC<PropsType> = (props) => {
  return (
    <RectButton style={styles.wrapper} onPress={props.onPress && props.onPress}>
      {props.icon}
      <Text style={styles.text}>{props.text}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 5,
  },

  text: {
    position: 'absolute',
    alignSelf: 'center',
    left: 48,
  },
});

export default React.memo(LineItem, memoComparison);
