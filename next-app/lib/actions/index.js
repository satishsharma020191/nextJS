import {
    FETCH_BATMAN_START,
    FETCH_BATMAN_SUCCESS,
    FETCH_BATMAN_SERIES_DESC_START,
    FETCH_BATMAN_SERIES_DESC_SUCCESS,
} from "../constants";

export const fetchBatmanStart = () => ({ type: FETCH_BATMAN_START });
export const fetchBatmanSuccess = (data) => {

    return ({ type: FETCH_BATMAN_SUCCESS, payload: data });
};

export const fetchBatmanSeriesDescStart = data => {
    console.log('action printing data::', data);
    return ({ type: FETCH_BATMAN_SERIES_DESC_START, payload: data })
};
export const fetchBatmanSeriesDescSuccess = data => {
    console.log('action called to update single batman', data);
    return ({ type: FETCH_BATMAN_SERIES_DESC_SUCCESS, payload: data })
};
