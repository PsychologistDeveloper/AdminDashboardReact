import { IS_MOBILE } from './Device.action';

export const getInitialState = () => ({
  isMobile: false,
});

export const DeviceReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case IS_MOBILE:
      const { isMobile } = action;

      return {
        ...state,
        isMobile,
      };

    default:
      return state;
  }
};

export default DeviceReducer;
