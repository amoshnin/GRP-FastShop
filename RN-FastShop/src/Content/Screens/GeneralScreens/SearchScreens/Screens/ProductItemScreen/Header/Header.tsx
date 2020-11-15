// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import UpperSection from './UpperSection/UpperSection';
import InfoSection from './InfoSection/InfoSection';

import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ProductType, ProductInfoType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  product: ProductType;
  ProductInfo: ProductInfoType;
};

const Header: React.FC<PropsType> = (props) => {
  const images = props.ProductInfo.imagesList;

  return (
    <>
      <UpperSection product={props.product} images={images} />
      <InfoSection product={props.product} />
    </>
  );
};

export default React.memo(Header, memoComparison);
