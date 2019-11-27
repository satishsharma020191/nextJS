import { take, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {
    fetchBatmanStart,
    fetchBatmanSuccess,
    fetchBatmanSeriesDescStart,
    fetchBatmanSeriesDescSuccess,
} from '../reducers/batman';


export function* fetchbatmanSeriesList() {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');

    try {
        const data = yield res.json();
        yield put(fetchBatmanSuccess(data));
    } catch (error) {
        console.log('fetch batman error::', error);
    }
}

export function* fetchbatmanShowDesc(payload) {
    console.log('description saga called::', payload);


    // const { id } = query;
    try {
        // let { batid } = payload;
        const res = yield fetch(`https://api.tvmaze.com/shows/757`);
        const show = yield res.json();
        console.log('show description::', show);
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
    yield takeEvery(fetchBatmanStart, fetchbatmanSeriesList);
    yield takeEvery(fetchBatmanSeriesDescStart, fetchbatmanShowDesc);
    // yield takeEvery(REQUEST_CATEGORIES_DATA, getCategoriesData);
    // yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}