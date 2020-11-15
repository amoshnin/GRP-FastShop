// PLUGINS IMPORTS //
import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '~/Content/Shared/Components/Components';
import Dialog, {
  DialogContent,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';

// COMPONENTS IMPORTS //
import {memoComparison} from '~/Content/Shared/Helpers/Functions/GeneralFunctions';

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  wrapperStyle?: any;
  animation?: 'SLIDE_BOTTOM';

  popupVisible: boolean;
  setPopupVisible: (popupVisibility: boolean) => void;

  children: ReactNode;
};
const Popup: React.FC<PropsType> = (props) => {
  return (
    <Dialog
      dialogStyle={[styles.wrapper, props.wrapperStyle]}
      visible={props.popupVisible}
      onTouchOutside={() => props.setPopupVisible(false)}
      dialogAnimation={
        props.animation === 'SLIDE_BOTTOM'
          ? new SlideAnimation({
              slideFrom: 'bottom',
            })
          : new ScaleAnimation({
              initialValue: 0,
              useNativeDriver: true,
            } as any)
      }>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
});

export default React.memo(Popup, memoComparison);
