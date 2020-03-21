import { TODOS } from '../actions/types';

export default function(
  state = {
    list: []
  },
  action: any
) {
  switch (action.type) {
    case TODOS:
      return { ...state, list: [...action.payload] };
    default:
      return { ...state };
  }
}
