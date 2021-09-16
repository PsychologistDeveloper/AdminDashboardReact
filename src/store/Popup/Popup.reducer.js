import {
  UPDATE_ACTIVE_POPUP_ID,
} from './Popup.action';

const getInitialState = () => ({
  activePopupId: '',
});

export const PopupReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case UPDATE_ACTIVE_POPUP_ID:
      const { activePopupId } = action;

      return {
        ...state,
        activePopupId,
      };

    default:
      return state;
  }
};

export default PopupReducer;
