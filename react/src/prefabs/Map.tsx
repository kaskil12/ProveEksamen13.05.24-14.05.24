import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
export function Map () {
    return (
            <div>
                <h1 className='text-gray-300 font-bold text-3xl'>Vår Lokasjon:</h1>
                <MapContainer 
                    center={[60.80758436467838, 11.053091129300938]} 
                    zoom={13} 
                    style={{ height: "400px", width: "600px", borderRadius: "15px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[60.80758436467838, 11.053091129300938]}>
                        <Popup>
                        vårt hjemmested <br /> Hamar
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
    )

}