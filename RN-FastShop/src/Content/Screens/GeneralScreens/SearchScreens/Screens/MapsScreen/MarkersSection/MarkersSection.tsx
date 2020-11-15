// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import MarkerItem from './MarkerItem/MarkerItem';
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX
import {ListType} from '~/Redux/Types/ListsTypes';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  lists: Array<ListType>;
};
const MarkersSection: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.lists &&
        props.lists.map((marker) => <MarkerItem marker={marker} />)}
    </>
  );
};

export default React.memo(MarkersSection, memoComparison);
