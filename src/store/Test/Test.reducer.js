import {
  HELLO_WORLD,
} from './Test.action';

const getInitialState = () => ({
  lolkek: '',
});

export const TestReducer = (
  state = getInitialState(),
  action,
) => {
  switch (action.type) {
    case HELLO_WORLD:
      return {
        ...state,
        lolkek: action.lolkek,
      };

    default:
      return state;
  }
};

export default TestReducer;
