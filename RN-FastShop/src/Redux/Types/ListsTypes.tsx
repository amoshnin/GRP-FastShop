import {ReactNode} from 'react';

export type ShopDataType = {
  name: string;
  website: string;
  rating: number;
  geometry: {latitude: number; longitude: number};
  placeID: string;
};

export type ListType = {
  res: Array<ProductType>;
  shopData: ShopDataType;
};

export type ProductType = {
  title: string;
  image: string;
  link: string;
  price: string;
  shopData?: ShopDataType;
};

export type ProductTypeItemType = {
  title: string;
  icon: ReactNode;
};

export type ProductInfoType = {
  description: string | null;
  sizes: Array<string>;
  imagesList: Array<string>;
};

////////////////////////////////////

export type WebsiteInfoType = {
  reviews: Array<ReviewItemType>;
  location: string | null;
  open_time: {
    open_now: boolean;
    weekday_text: Array<string>;
  };
  types: Array<string>;
  phone_num: string | null;
};

export type ReviewItemType = {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
};
