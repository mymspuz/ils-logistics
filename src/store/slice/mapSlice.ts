import { LatLngBoundsExpression, LatLngExpression } from 'leaflet'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = {
    centerMap: LatLngExpression | undefined
    boundsMap: LatLngBoundsExpression
}

const initialState: TState = {
    centerMap: { lat: 59.84660399, lng: 30.29496392 },
    boundsMap: [[59.84660399, 30.29496392], [59.84660399, 30.29496392]]
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setCenterMap: (state, action: PayloadAction<LatLngExpression>) => {
            state.centerMap = action.payload
        },
        setBoundsMap: (state, action: PayloadAction<LatLngBoundsExpression>) => {
            state.boundsMap = action.payload
        }
    }
})

export const {
    setCenterMap,
    setBoundsMap
} = mapSlice.actions

export default mapSlice.reducer