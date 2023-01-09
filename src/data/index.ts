import axios from 'axios'

import { ITransportationRequest } from '../interfaces/RequestsTypes'
import { API_OSRM_ROOT } from '../constaints'

export async function getTransportationRequests(): Promise<ITransportationRequest[]> {
    return new Promise<ITransportationRequest[]>((resolve, reject) => {
        const result: ITransportationRequest[] = [
            {id: 1, latFrom: 59.84660399, lngFrom: 30.29496392, latTo: 59.82934196, lngTo: 30.42423701},
            {id: 2, latFrom: 59.82934196, lngFrom: 30.42423701, latTo: 59.82761295, lngTo: 30.41705607},
            {id: 3, latFrom: 59.83567701, lngFrom: 30.38064206, latTo: 59.84660399, lngTo: 30.29496392},
            {id: 4, latFrom: 59.84660399, lngFrom: 30.29496392, latTo: 59.82761295, lngTo: 30.41705607},
            {id: 5, latFrom: 59.83567701, lngFrom: 30.38064206, latTo: 59.84660399, lngTo: 30.29496392}
        ]
        resolve(result)
    })
}

export async function getRouter(route: ITransportationRequest) {
    try {
        const response = await axios.get(`${API_OSRM_ROOT}${route.lngFrom},${route.latFrom};${route.lngTo},${route.latTo}?overview=full`)

        const polyline = require('@mapbox/polyline')
        return polyline.decode(response.data.routes[0].geometry)
    } catch (error) {
        console.error(error)
    }
}