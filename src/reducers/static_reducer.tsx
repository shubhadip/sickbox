import { SAVE_LOCATION_DATA } from '../actions/types';

export default function(
  state = {
    data: [],
    states: []
  },
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case SAVE_LOCATION_DATA:
      const states = (action.payload || []).map(data => {
        return {
          id: data.id,
          name: data.name
        };
      });
      return { ...state, ...{ states, data: action.payload } };
    default:
      return { ...state };
  }
}
