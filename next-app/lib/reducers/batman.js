

import { FETCH_BATMAN_SUCCESS, FETCH_BATMAN_SERIES_DESC_SUCCESS } from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BATMAN_SUCCESS:
      console.log('fetch batman series data in reducer', action);
      return state = {
        ...state,
        batmanSeries: action.payload
      }

    case FETCH_BATMAN_SERIES_DESC_SUCCESS:
      console.log('reducer single series desc::', action.payload);
      return state = { ...state, showData: action.payload }

    default:
      return state;
  }
} 