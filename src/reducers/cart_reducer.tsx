import { SAVE_CART_DETAILS } from '../actions/types';

export default function(
  state = {},
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case SAVE_CART_DETAILS:
      const carts = (action.payload && action.payload.carts) || {};
      return { ...state, ...carts };
    default:
      return { ...state };
  }
}
