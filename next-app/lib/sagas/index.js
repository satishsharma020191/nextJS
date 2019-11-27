import { all } from 'redux-saga/effects';
import { watchFetchBatman } from './batman';

export default function* rootSaga() {
    try {
        yield all([
            watchFetchBatman(),
        ]);
    } catch (err) {
        console.log(err);
    }
}