import { take, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {
    fetchBatmanStart,
    fetchBatmanSuccess,
    fetchBatmanSeriesDescStart,
    fetchBatmanSeriesDescSuccess,
} from '../actions';

import { FETCH_BATMAN_START, FETCH_BATMAN_SERIES_DESC_START } from '../constants';


export function* fetchbatmanSeriesList() {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');

    try {
        const data = yield res.json();
        yield put(fetchBatmanSuccess(data));
    } catch (error) {
        console.log('fetch batman error::', error);
    }
}

export function* fetchbatmanShowDesc(action) {
    try {

        let batid = action.payload;
        console.log('show description saga called final check id::', batid);
        const res = yield fetch(`https://api.tvmaze.com/shows/${batid}`);
        const show = yield res.json();
        console.log('show description final check::', show);
        yield put(fetchBatmanSeriesDescSuccess(show));
    } catch (error) {
        console.log('description error', error);
    }
}

// export function* watchFetchBatman() {
//     while (true) {
//         const { payload: { date } } = yield take(fetchBatmanStart);
//         yield call(fetchApod, date);
//     }
// }

export function* watchFetchBatman() {
    yield takeEvery(FETCH_BATMAN_START, fetchbatmanSeriesList);
    yield takeEvery(FETCH_BATMAN_SERIES_DESC_START, fetchbatmanShowDesc);
    // yield takeEvery(REQUEST_CATEGORIES_DATA, getCategoriesData);
    // yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}