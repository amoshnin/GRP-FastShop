// PLUGINS IMPORTS //
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  borderColor?: string;
  backgroundColor?: string;
  isCenterAlign?: boolean;

  textSize?: number;
  textColor?: string;

  style?: any;
  text?: string;
  icon?: any;
  onPress?: () => void;
};

const Button: React.FC<PropsType> = (props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        props.style,
        {
          backgroundColor: colors.notification,
          alignSelf: props.isCenterAlign && ('center' as any),
        },
      ]}
      onPress={() => props.onPress && props.onPress()}>
      {props.icon && props.icon}
      {props.text && (
        <Text
          style={[
            styles.text,
            {
              color: props.textColor || colors.text,
              fontSize: props.textSize || 15,
            },
          ]}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 46,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default React.memo(Button, memoComparison);
