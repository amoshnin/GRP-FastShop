// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import * as GoogleSignIn from "expo-google-sign-in"

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const SocialMediaSection = () => {
  // const [googleUser, setGoogleUser] = useState(
  //   null as GoogleSignIn.GoogleUser | null
  // )

  // useEffect(() => {
  //   const initAsync = async () => {
  //     await GoogleSignIn.initAsync()
  //     syncUserWithStateAsync()
  //   }

  //   initAsync()
  // }, [])

  // const syncUserWithStateAsync = async () => {
  //   const user = await GoogleSignIn.signInSilentlyAsync()
  //   setGoogleUser(user)
  // }

  // const signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync()
  //     const { type } = await GoogleSignIn.signInAsync()
  //     if (type === "success") {
  //       syncUserWithStateAsync()
  //     }
  //   } catch ({ message }) {
  //     alert("login: Error:" + message)
  //   }
  // }

  const onGooglePress = async () => {
    // if (googleUser) {
    //   await GoogleSignIn.signOutAsync()
    //   setGoogleUser(null)
    // } else {
    //   signInAsync()
    // }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('~/Images/icons/apple.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onGooglePress}>
        <Image
          source={require('~/Images/icons/google.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('~/Images/icons/facebook.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const ICON_SIZE = 27;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: 20,
    marginTop: 25,
  },

  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  },

  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default React.memo(SocialMediaSection, memoComparison);
