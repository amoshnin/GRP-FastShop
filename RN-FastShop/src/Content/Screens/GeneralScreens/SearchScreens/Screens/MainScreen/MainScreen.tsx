// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from '~/Content/Shared/Components/Components';
import {useNavigation} from '@react-navigation/native';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const MainScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null as string | null);
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TextInput
        value={searchQuery}
        label={'Search product...'}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Button
        text={'Search'}
        onPress={() =>
          navigation.navigate('MapsScreen', {
            searchQuery,
          })
        }
        style={styles.button}
        isCenterAlign
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },

  button: {
    marginTop: 23,
  },
});

export default React.memo(MainScreen, memoComparison);
