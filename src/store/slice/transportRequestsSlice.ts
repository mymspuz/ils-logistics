import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LatLngExpression } from 'leaflet'

import { ITransportationRequest } from '../../interfaces/RequestsTypes'

type TState = {
    transportRequests: ITransportationRequest[]
    selectRequest: ITransportationRequest | null
    routeRequest: LatLngExpression[]
}

const initialState: TState = {
    transportRequests: [],
    selectRequest: null,
    routeRequest: [],
}

const transportRequestsSlice = createSlice({
    name: 'transportRequests',
    initialState,
    reducers: {
        setTransportRequests: (state, action: PayloadAction<ITransportationRequest[]>) => {
            state.transportRequests = action.payload
        },
        setSelectRequest: (state, action: PayloadAction<ITransportationRequest>) => {
            state.selectRequest = action.payload
        },
        setRouteRequest: (state, action: PayloadAction<LatLngExpression[]>) => {
            state.routeRequest = action.payload
        }
    }
})

export const {
    setTransportRequests,
    setSelectRequest,
    setRouteRequest
} = transportRequestsSlice.actions

export default transportRequestsSlice.reducer