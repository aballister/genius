import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import styles from '../contacts.module.css'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map() {
    return (
        <MapContainer
            className={styles.map}
            center={[50.432932, 30.483244]}
            scrollWheelZoom={false}
            zoom={16}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[50.432932, 30.483244]}>
                <Popup>
                    <div>
                        <img
                            alt=''
                            height={20}
                            src='images/location.png'
                        />
                        Василя Липківсього 25
                    </div>
                    <div>
                        <img
                            alt=''
                            height={20}
                            src='images/smartphone.png'
                        />
                        <div>
                            380 (66) 408-81-06
                            <br />
                            380 (63) 408-81-08
                            <br />
                            380 (67) 312-90-62
                        </div>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}