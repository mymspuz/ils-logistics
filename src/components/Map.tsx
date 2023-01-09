import React, { useEffect } from 'react'
import { MapContainer, Polyline, TileLayer, useMap } from 'react-leaflet'
import { Marker, MarkerLayer } from 'react-leaflet-marker'

import { styleMap } from './styles'
import { useAppSelector } from '../hooks'

const MapComponent: React.FC = () => {
    const currentRout = useAppSelector((state) => state.transportRequests.selectRequest)
    const route = useAppSelector(state => state.transportRequests.routeRequest)
    const center = useAppSelector(state => state.map.centerMap)
    const bounds = useAppSelector(state => state.map.boundsMap)

    const RecenterAutomatically: React.FC<{ center: any }> = ({center}) => {
        const map = useMap()
        useEffect(() => {
            map.setView(center)
            map.fitBounds(bounds)
        }, [center])
        return null
    }

    return (
        <MapContainer
            center={center}
            zoom={10}
            bounds={bounds}
            scrollWheelZoom={false}
            style={styleMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {currentRout &&
                <MarkerLayer>
                    <Marker
                        position={{ lat: currentRout.latFrom, lng: currentRout.lngFrom }}
                        size={[40, 40]}
                        interactive
                        riseOnHover
                    >
                        <div style={{
                            background: 'red',
                            textAlign: 'center'
                        }}>
                            From
                        </div>
                    </Marker>
                    <Marker
                        position={{ lat: currentRout.latTo, lng: currentRout.lngTo }}
                        size={[40, 40]}
                        interactive
                        riseOnHover
                    >
                        <div style={{
                            background: 'green',
                            textAlign: 'center'
                        }}>
                            To
                        </div>
                    </Marker>
                </MarkerLayer>
            }
            <Polyline pathOptions={{ color: 'red' }} positions={route} />
            <RecenterAutomatically center={center} />
        </MapContainer>
    )
}

export default MapComponent