// PLUGINS IMPORTS //
import React, {useState} from 'react';
import {View, Linking, StyleSheet} from 'react-native';
import {Text, Icon} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import PopupContent from './PopupContent/PopupContent';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// REDUX
import {ShopDataType, WebsiteInfoType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  shopData: ShopDataType;
  websiteInfo: WebsiteInfoType;
};

const Header: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean);
  const isOpened = props.websiteInfo.open_time.open_now;

  return (
    <>
      <View style={styles.wrapper}>
        <Text size={24} isCenterAlign>
          {props.shopData.name}
        </Text>
        <View style={styles.social_wrapper}>
          <Text>{props.shopData.rating}</Text>

          <Icon
            icon={
              <View style={styles.row}>
                <Ionicons
                  name={'ios-time-outline'}
                  color={isOpened ? 'green' : 'red'}
                  size={26}
                />
                <Text
                  style={styles.icon_text}
                  color={isOpened ? 'green' : 'red'}>
                  {isOpened ? 'OPEN' : 'CLOSED'}
                </Text>
              </View>
            }
          />

          <Icon
            icon={
              <EvilIcons name={'external-link'} color={'white'} size={38} />
            }
            onPress={() => Linking.openURL(props.shopData.website)}
          />

          <Icon
            icon={<Feather name={'info'} color={'white'} size={26} />}
            onPress={() => setPopupVisible(true)}
          />
        </View>
      </View>

      <PopupContent
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        websiteInfo={props.websiteInfo}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 30,
  },

  social_wrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon_text: {
    marginLeft: 5,
  },
});

export default React.memo(Header, memoComparison);
