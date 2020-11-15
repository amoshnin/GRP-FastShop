// PLUGINS IMPORTS //
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  style?: any;
  label?: string;
  labelColor?: string;

  icon?: any;

  backgroundColor?: string;
  textColor?: string;

  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: any;

  value?: string | null;
  onChangeText?: (text: string) => void;
};

const TextInputComponent: React.FC<PropsType> = (props) => {
  const {colors} = useTheme();

  return (
    <View>
      <TextInput
        style={[
          styles.wrapper,
          props.style,
          {backgroundColor: props.backgroundColor || colors.card},
          {
            color: props.textColor || 'white',
            opacity: props.disabled ? 0.7 : 1,
            paddingLeft: props.icon && 40,
          },
        ]}
        placeholder={props.label}
        placeholderTextColor={props.labelColor || 'gray'}
        value={props.value as string}
        onBlur={props.onBlur}
        onChangeText={(text: string) =>
          props.onChangeText && props.onChangeText(text)
        }
        editable={!props.disabled}
        autoFocus={props.autoFocus}
      />

      {props.icon && <View style={styles.icon}>{props.icon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
  },

  icon: {
    position: 'absolute',
    top: 18,
    left: 11,
  },
});

export default React.memo(TextInputComponent, memoComparison);
