// PLUGINS IMPORTS //
import React from 'react';
import {View, StyleSheet} from 'react-native';

// COMPONENTS IMPORTS //
import {Accordion} from '~/Content/Shared/Components/Components';
import LineItem from './LineItem/LineItem';
import ReviewItem from './ReviewItem/ReviewItem';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// REDUX
import {WebsiteInfoType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  websiteInfo: WebsiteInfoType;
};

const Footer: React.FC<PropsType> = (props) => {
  return (
    <View>
      <Accordion
        title={'Work time'}
        icon={<Ionicons name={'ios-time-outline'} color={'silver'} size={24} />}
        list={props.websiteInfo.open_time.weekday_text}
        renderItem={(item) => <LineItem text={item} />}
      />
      <Accordion
        title={`Reviews (${props.websiteInfo.reviews.length})`}
        icon={<AntDesign name={'star'} color={'silver'} size={22} />}
        list={props.websiteInfo.reviews}
        renderItem={(item) => <ReviewItem review={item} />}
        style={styles.accordion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {marginTop: -15},
});

export default React.memo(Footer, memoComparison);
