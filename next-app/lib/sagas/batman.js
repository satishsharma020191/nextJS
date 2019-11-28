import { take, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {
    fetchBatmanStart,
    fetchBatmanSuccess,
    fetchBatmanSeriesDescStart,
    fetchBatmanSeriesDescSuccess,
} from '../actions';

import { FETCH_BATMAN_START, FETCH_BATMAN_SERIES_DESC_START } from '../constants';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'tz3mymqfbbks';
const API_TOKEN = 'M1SZr2NOHdl1DF4gTRiZwObpJfTrd4GTQXkLY7calOo';

export function* fetchbatmanSeriesList() {
    const res = yield fetch(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=batmanSeries`);
    try {
        const data = yield res.json();
        let items = data.items;
        let finalArr = [];
        items.map((obj, i) => {
            finalArr.push(obj.fields);
        });
        console.log('this is first api response changed', finalArr);
        yield put(fetchBatmanSuccess(finalArr));
    } catch (error) {
        console.log('fetch batman error::', error);
    }
}

export function* fetchbatmanShowDesc(action) {
    try {

        let batid = action.payload;
        const res = yield fetch(`https://api.tvmaze.com/shows/${batid}`);
        const show = yield res.json();
        console.log('show description final check::', show);
        yield put(fetchBatmanSeriesDescSuccess(show));
    } catch (error) {
        console.log('description error', error);
    }
}

export function* watchFetchBatman() {
    yield takeEvery(FETCH_BATMAN_START, fetchbatmanSeriesList);
    yield takeEvery(FETCH_BATMAN_SERIES_DESC_START, fetchbatmanShowDesc);
}