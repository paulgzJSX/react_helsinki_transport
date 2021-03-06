import { useContext } from 'react'
import { LegPath, GetCurrentCoords } from '../../components'
import { RouteContext } from "../../context/RouteContext"
import PointSelection from './PointSelection/PointSelection'

import { MapContainer, TileLayer } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


export default function Map() {
    const { selectedLeg, allowCoords } = useContext(RouteContext)

    return (
        <div id="mapid">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={[60.19, 24.94]}
                zoom={10}
                scrollWheelZoom={true}
                maxBounds={[[59.9, 24.3],[60.45, 25.5]]}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedLeg && <LegPath selectedLeg={selectedLeg} />}
                {allowCoords?.state && <GetCurrentCoords />}
                <PointSelection />
            </MapContainer>
        </div>
    )
}
