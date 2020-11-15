// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from '~/Content/Shared/Components/Components';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import SocialMediaSection from './SocialMediaSection/SocialMediaSection';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const BottomPanel = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <View style={[styles.wrapper, {backgroundColor: colors.card}]}>
      <View>
        <Text size={24} isCenterAlign>
          Login or Register
        </Text>
      </View>
      <View>
        <View style={styles.buttons_wrap}>
          <Button
            text={'LOGIN'}
            backgroundColor={'white'}
            textColor={'black'}
            style={styles.button}
            onPress={() =>
              navigation.navigate('EmailAuthScreen', {
                isRegister: false,
              })
            }
          />
          <Button
            text={'REGISTER'}
            backgroundColor={'white'}
            textColor={'black'}
            style={styles.button}
            onPress={() =>
              navigation.navigate('EmailAuthScreen', {
                isRegister: true,
              })
            }
          />
        </View>
        <SocialMediaSection />
      </View>
    </View>
  );
};

const BORDER_RADIUS = 20;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    justifyContent: 'space-around',
  },

  buttons_wrap: {
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    marginHorizontal: 20,
  },
});

export default React.memo(BottomPanel, memoComparison);
