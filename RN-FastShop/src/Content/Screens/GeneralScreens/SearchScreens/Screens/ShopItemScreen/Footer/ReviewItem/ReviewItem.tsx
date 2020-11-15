// PLUGINS IMPORTS //
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ReviewItemType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  review: ReviewItemType;
};

const ReviewItem: React.FC<PropsType> = (props) => {
  console.log(props.review);

  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: props.review.profile_photo_url}}
        style={styles.avatar}
      />

      <View>
        <Text style={styles.title} isBold>
          {props.review.author_name}
        </Text>
        <Text size={14}>{props.review.text}</Text>
      </View>
    </View>
  );
};

const AVATAR_SIZE = 40;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    resizeMode: 'contain',
    marginRight: 18,
  },

  title: {
    marginBottom: 1,
  },
});

export default React.memo(ReviewItem, memoComparison);
