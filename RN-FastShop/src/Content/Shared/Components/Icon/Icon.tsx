// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  icon: ReactNode;

  style?: any;
  onPress?: () => void;
};
const Icon: React.FC<PropsType> = (props) => {
  return (
    <BorderlessButton
      style={props.style}
      onPress={props.onPress && props.onPress}>
      {props.icon}
    </BorderlessButton>
  );
};

export default React.memo(Icon, memoComparison);
