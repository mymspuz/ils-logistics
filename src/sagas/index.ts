import { put, all, take, call } from 'redux-saga/effects'

import { ITransportationRequest } from '../interfaces/RequestsTypes'
import { getRouter } from '../data'

function* selectRequest(request: ITransportationRequest): any {
    // router data
    const result = yield call(getRouter, request)
    yield put({type: 'transportRequests/setRouteRequest', payload: result})
    // center map
    const half = Math.round(result.length / 2)
    yield put({type: 'map/setCenterMap', payload: { lat: result[half][0], lng: result[half][1]}})
    // bounds map
    const bounds = [result[0], result.slice(-1)[0]]
    yield put({type: 'map/setBoundsMap', payload: bounds})
}

function* watchSelectRequest() {
    while (true) {
        const { payload } = yield take('transportRequests/setSelectRequest')
        yield call(selectRequest, payload)
    }
}

export default function* rootSaga() {
    yield all([
        watchSelectRequest()
    ])
}