import {DefaultTheme, DarkTheme as Dark, Theme} from '@react-navigation/native';

export const LightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {...DefaultTheme.colors, notification: '#26a59as'},
};

export const DarkTheme: Theme = {
  ...Dark,
  dark: true,
  colors: {
    ...Dark.colors,
    background: '#151618',
    card: '#232323',
    //
    primary: '#8b6ff7',
    notification: '#8b6ff7',
    border: '#151618',
    text: '#fefefe',
  },
};
