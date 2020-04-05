import { SAVE_ADDRESS } from '../actions/types';

export default function(
  state = {
    addresses: []
  },
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case SAVE_ADDRESS:
      const addresses = (action.payload && action.payload) || {};
      return { ...state, ...addresses };
    default:
      return { ...state };
  }
}
