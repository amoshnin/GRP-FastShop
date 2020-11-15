// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {List} from 'react-native-paper';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

// REDUX

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  style?: any;
  title: string;
  icon: ReactNode;
  renderItem: (item: any) => ReactNode;

  list: Array<any>;
};

const Accordion: React.FC<PropsType> = (props) => {
  return (
    <List.Section>
      <List.Accordion
        style={props.style}
        title={props.title}
        theme={{colors: {text: 'white'}}}
        left={(iconProps) => props.icon}>
        {props.list.map((item) => {
          return props.renderItem(item);
        })}
      </List.Accordion>
    </List.Section>
  );
};

export default React.memo(Accordion, memoComparison);
