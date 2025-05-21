import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import styles from '../contacts.module.css'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useEffect } from 'react';

function FitBounds({ markers }) {
    const map = useMap();

    useEffect(() => {
        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers);
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [markers, map]);

    return null;
}

export default function Map() {
    const markers = [
        [50.432932, 30.483244],
        [50.44247213156252, 30.429201298174576],
    ];
    return (
        <MapContainer
            className={styles.map}
            center={[50.432932, 30.483244]}
            scrollWheelZoom={false}
            zoom={13}
        >
            <FitBounds markers={markers} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[50.44247213156252, 30.429201298174576]}>
                <Popup>
                    <div>
                        <img
                            alt=''
                            height={20}
                            src='images/location.png'
                        />
                        Гарматна 38а
                    </div>
                    <div>
                        <img
                            alt=''
                            height={20}
                            src='images/smartphone.png'
                        />
                        <div>
                            380634164341
                            <br />
                            380634164341
                            <br />
                            380634164341
                        </div>
                    </div>
                </Popup>
            </Marker>
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
                            380634164341
                            <br />
                            380634164341
                            <br />
                            380634164341
                        </div>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}