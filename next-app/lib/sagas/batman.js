import { take, put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {
    fetchBatmanStart,
    fetchBatmanSuccess
} from '../reducers/apod';


export function* fetchApod(date) {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');

    try {
        const data = yield res.json();
        yield put(fetchBatmanSuccess(data));
    } catch (error) {
        console.log('fetch batman error::', error);
    }
}

export function* watchFetchBatman() {
    while (true) {
        const { payload: { date } } = yield take(fetchBatmanStart);
        yield call(fetchApod, date);
    }
}