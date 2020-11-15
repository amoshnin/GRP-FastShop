// PLUGINS IMPORTS //
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import FormSlider from 'react-native-form-slider';
import Firebase from '~/API/FirebaseConfig';

import * as yup from 'yup';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import AntDesign from 'react-native-vector-icons/AntDesign';

// REDUX
import {getOnlineStatusSelector} from '~/Redux/Selectors/GeneralSelectors';
import {registerUserThunkCreator} from '~/Redux/Reducers/AuthReducers/AuthSetReducer';

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  navigation: any;
  route: {params: any};
};

const EmailAuthScreen: React.FC<PropsType> = (props) => {
  const [errorVisible, setErrorVisible] = useState(false as boolean);
  // FIELDS //
  const [email, setEmail] = useState(null as string | null);
  const [password, setPassword] = useState(null as string | null);
  const [name, setName] = useState(null as string | null);

  const {isRegister, backButtonClicked} = props.route.params;
  const isOnline = useSelector(getOnlineStatusSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();

  let data = [
    {
      title: "What's your email?",
      subtitle: 'Email is required',
      value: email,
      setFunction: (field: string) => {
        setEmail(field);
      },
      validationSchema: yup
        .string()
        .required('Validation.EmailRequired')
        .email('Validation.InvalidEmail')
        .typeError('Validation.EmailRequired'),
    },
    {
      title: isRegister ? 'Enter your password?' : "What's your password?",
      subtitle: 'To keep your account safe',
      validationSchema: yup
        .string()
        .min(6, 'Validation.ShortPassword')
        .max(16, 'Validation.LongPassword')
        .matches(/[a-zA-Z]/ as any, 'Validation.PasswordLatin')
        .required('Validation.PasswordRequired')
        .typeError('Validation.PasswordRequired'),
      value: password,
      setFunction: (field: string) => {
        setPassword(field);
      },

      isPassword: true,
      email,
      name,
    },
  ];

  useEffect(() => {
    navigation.addListener('blur', () => {
      setEmail(null);
      setName(null);
      setPassword(null);
    });
  }, [props.route.params]);

  data = isRegister
    ? [
        data[0],
        {
          title: "What's your full name?",
          subtitle: 'Just to be a little more polite',
          value: name,
          setFunction: (field: string) => {
            setName(field);
          },
          validationSchema: yup
            .string()
            .required('Validation.NameRequired')
            .typeError('Validation.NameRequired'),
        },
        data[1],
      ]
    : data;

  return (
    <FormSlider
      data={data}
      errorData={{
        setErrorVisibility: setErrorVisible,
        errorVisibility: errorVisible,
        errorText: !isOnline
          ? 'Please check your network connection'
          : isRegister
          ? 'Something went wrong, please try again later'
          : 'Wrong email or password combination entered. Please try again.',
      }}
      backHandler={{
        setBackButtonClicked: (clickedStatus: boolean) =>
          props.navigation.setParams({backButtonClicked: clickedStatus}),
        goBackFunction: () => navigation.goBack(),
        backButtonClicked,
      }}
      submitFunction={async (values: any) => {
        if (isRegister) {
          await Firebase.auth()
            .createUserWithEmailAndPassword(email as string, values.field)
            .then(async () => {
              navigation.goBack();
              await dispatch(registerUserThunkCreator(name));
            })
            .catch((err) => {
              setErrorVisible(true);
            });
        } else {
          await Firebase.auth()
            .signInWithEmailAndPassword(email as string, values.field)
            .then(() => navigation.goBack())
            .catch((err) => {
              setErrorVisible(true);
            });
        }
      }}
      buttonStyle={{
        backgroundColor: colors.notification,
      }}
      buttonIcon={<AntDesign name={'arrowright'} color={'white'} size={24} />}
    />
  );
};

export default React.memo(EmailAuthScreen, memoComparison);
