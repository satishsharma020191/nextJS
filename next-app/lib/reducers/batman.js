import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchBatmanStart, fetchBatmanSuccess, fetchBatmanSeriesDescStart, fetchBatmanSeriesDescSuccess } = createActions({
  FETCH_BATMAN_START: date => ({ date }),
  FETCH_BATMAN_SUCCESS: batman => ({ batman }),
  FETCH_BATMAN_SERIES_DESC_START: batid => ({ batid }),
  FETCH_BATMAN_SERIES_DESC_SUCCESS: showData => ({ showData }),

});

export const reducer = handleActions(
  {
    // [fetchBatmanStart]: state => {
    //   console.log('reducer called fetchApodStart', state);
    //   return ({ ...state, error: null, isLoading: true })
    // },
    [fetchBatmanSuccess]: (state, { payload: batman }) => {
      console.log('fetchsuccessdata::', batman);
      return ({
        error: null,
        isLoading: false,
        data: batman,
      })
    },

    [fetchBatmanSeriesDescSuccess]: (state, { payload: showData }) => {
      console.log('fetchsuccessdata::', showData);
      return ({ data: showData })
    },
    // [fetchBatmanSeriesDescStart]: (state, payload) => {
    //   console.log('api desciption data reducer call::', payload);
    //   // return ({ error, isLoading: false, data: [] })
    //   return ({ ...state, error: null, isLoading: true });
    // },
  },
  defaultState,
);