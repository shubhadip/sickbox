import { INCREMENT } from '../actions/types';

export default function(
  state = {
    count: 0,
  },
  action: any,
) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    default:
      return { ...state };
  }
}
