import { FETCH_BATMAN_SUCCESS, FETCH_BATMAN_SERIES_DESC_SUCCESS } from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BATMAN_SUCCESS:
      return {
        ...state,
        batmanSeries: action.payload
      }

    case FETCH_BATMAN_SERIES_DESC_SUCCESS:
      return { ...state, showData: action.payload }

    default:
      return state;
  }
} 