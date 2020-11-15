// PLUGINS IMPORTS //
import React from 'react';
import {Text} from '~/Content/Shared/Components/Components';
import {StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import Popup from '~/Content/Shared/Components/Popup/Popup';
import LineItem from './LineItem/LineItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import Ionicons from 'react-native-vector-icons/Ionicons';

// REDUX
import {WebsiteInfoType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean;
  websiteInfo: WebsiteInfoType;

  setPopupVisible: (popupVisibility: boolean) => void;
};
const PopupContent: React.FC<PropsType> = (props) => {
  const isOpened = props.websiteInfo.open_time.open_now;

  const data = [
    {
      element: (
        <Text
          color={'black'}
          style={styles.text}>{`Address: ${props.websiteInfo.location}`}</Text>
      ),
      icon: <Ionicons name="md-location-outline" size={24} color="black" />,
      onPress: () => {},
    },
    {
      element: (
        <Text
          color={'black'}
          style={
            styles.text
          }>{`Phone number: ${props.websiteInfo.phone_num}`}</Text>
      ),
      icon: <Ionicons name="call-outline" size={24} color="black" />,
    },
    {
      element: (
        <Text color={'black'} style={styles.text}>
          {isOpened ? 'Opened' : 'Closed'}
        </Text>
      ),
      icon: <Ionicons name={'ios-time-outline'} color={'black'} size={26} />,
    },
  ];

  return (
    <Popup
      popupVisible={props.popupVisible}
      setPopupVisible={props.setPopupVisible}
      wrapperStyle={styles.wrapper}
      animation={'SLIDE_BOTTOM'}>
      {data.map((item) => {
        return (
          <LineItem
            element={item.element}
            icon={item.icon}
            onPress={item.onPress}
          />
        );
      })}
    </Popup>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 17,
  },

  text: {
    position: 'absolute',
    left: '16%',
  },
});

export default React.memo(PopupContent, memoComparison);
