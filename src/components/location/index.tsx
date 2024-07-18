import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'tailwindcss/tailwind.css';
// import { useState } from 'react';

const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    map.setView(center);
    return null;
};

interface MapComponentProps {
    markerPosition: [number, number];
    setMarkerPosition: (position: [number, number]) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ markerPosition, setMarkerPosition }) => {

    const handleMarkerDragEnd = (event: L.LeafletEvent) => {
        const marker = event.target;
        const position = marker.getLatLng();
        setMarkerPosition([position.lat, position.lng]);
    };

    return (
        <div className="w-full">
            <MapContainer
                className="w-full h-48"
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
