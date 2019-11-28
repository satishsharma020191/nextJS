

import { FETCH_BATMAN_SUCCESS, FETCH_BATMAN_SERIES_DESC_SUCCESS, FETCH_BATMAN_SERIES_DESC_START } from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BATMAN_SERIES_DESC_START:
      console.log('reducer called with pid', action);
      return { ...state, batid: action }
    case FETCH_BATMAN_SUCCESS:
      console.log('fetch batman series data in reducer', action);
      return {
        ...state,
        batmanSeries: action.payload
      }

    case FETCH_BATMAN_SERIES_DESC_SUCCESS:
      console.log('reducer single series desc::', action.payload);
      return { ...state, showData: action.payload }

    default:
      return state;
  }
} 