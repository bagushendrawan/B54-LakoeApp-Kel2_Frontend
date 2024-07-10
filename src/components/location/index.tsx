import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';

// Menyelesaikan masalah icon marker yang hilang
// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    map.setView(center);
    return null;
};

const MapComponent = () => {
    const [markerPosition, setMarkerPosition] = useState<[number, number]>([
        0, 0,
    ]);

    const handleMarkerDragEnd = (event: L.LeafletEvent) => {
        const marker = event.target;
        const position = marker.getLatLng();
        setMarkerPosition([position.lat, position.lng]);
    };

    return (
        <div className="w-full">
            <MapContainer
                className="w-full h-48" // Tailwind class for width and height
                center={markerPosition}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={markerPosition}
                    draggable={true}
                    eventHandlers={{ dragend: handleMarkerDragEnd }}
                >
                    <Popup>Pilih Lokasi Anda</Popup>
                </Marker>
                <ChangeView center={markerPosition} />
            </MapContainer>
        </div>
    );
};

export default MapComponent;
