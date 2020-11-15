import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {ProductTypeItemType} from '~/Redux/Types/ListsTypes';

//

const ICON_COLOR = 'white';
const ICON_SIZE = 20;

const TypesList: Array<ProductTypeItemType> = [
  {
    title: 'clothing_store',
    icon: <Ionicons name={'ios-shirt'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'pharmacy',
    icon: (
      <AntDesign name={'medicinebox'} color={ICON_COLOR} size={ICON_SIZE} />
    ),
  },
  {
    title: 'book_store',
    icon: <Ionicons name={'book'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'bicycle_store',
    icon: <Ionicons name={'bicycle'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'pet_store',
    icon: <FontAwesome5 name={'dog'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'store',
    icon: (
      <Fontisto name={'shopping-bag-1'} color={ICON_COLOR} size={ICON_SIZE} />
    ),
  },
  {
    title: 'supermarket',
    icon: <Ionicons name={'bicycle'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'convenience_store',
    icon: <Ionicons name={'bicycle'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'jewelry_store',
    icon: <FontAwesome name={'diamond'} color={ICON_COLOR} size={ICON_SIZE} />,
  },
  {
    title: 'liquor_store',
    icon: (
      <FontAwesome5 name={'wine-bottle'} color={'white'} size={ICON_SIZE} />
    ),
  },
  {
    title: 'furniture_store',
    icon: <Ionicons name={'bicycle'} color={'white'} size={ICON_SIZE} />,
  },
  {
    title: 'home_goods_store',
    icon: <Ionicons name={'bicycle'} color={'white'} size={ICON_SIZE} />,
  },
  {
    title: 'electronics_store',
    icon: <Ionicons name={'bicycle'} color={'white'} size={ICON_SIZE} />,
  },
  {
    title: 'shopping_mall',
    icon: <Ionicons name={'bicycle'} color={'white'} size={ICON_SIZE} />,
  },
];

export default TypesList;
