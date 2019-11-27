import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchBatmanStart, fetchBatmanSuccess, fetchApodFail } = createActions({
  FETCH_BATMAN_START: date => ({ date }),
  FETCH_BATMAN_SUCCESS: apod => ({ apod }),
  FETCH_APOD_FAIL: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchBatmanStart]: state => {
      console.log('reducer called fetchApodStart', state);
      return ({ ...state, error: null, isLoading: true })
    },
    [fetchBatmanSuccess]: (state, { payload: apod }) => {
      console.log('fetchsuccessdata::', apod);
      return ({
        error: null,
        isLoading: false,
        data: apod,
      })
    },
    [fetchApodFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);