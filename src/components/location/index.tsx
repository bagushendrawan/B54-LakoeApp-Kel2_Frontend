import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLng, latLng } from "leaflet";
import "tailwindcss/tailwind.css";
import { useEffect, useRef, useState } from "react";
import { SearchControl } from "./search";
import { getAddress } from "./geoCoding";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { IoIosPin } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { Button } from "../button";

// const ChangeView = ({ center }: { center: [number, number] }) => {
//   const map = useMap();
//   map.setView(center);
//   return null;
// };

const MapComponent = () => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    0, 0,
  ]);

  const [position, setPosition] = useState<L.LatLng | null>(null);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const markerRef = useRef<L.Marker<any>>(null)

  const updatePosition = async (latLng: L.LatLng) => {
    setPosition(latLng);
    const address = await getAddress(latLng.lat, latLng.lng);
    setAddress(address);
  };

  useEffect(() => {
    const success = async (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      const latLng = new L.LatLng(latitude, longitude);
      await updatePosition(latLng);
    };

    const error = (error: GeolocationPositionError) => {
      console.error(error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, error);
    } else {
      console.error("Not Supported");
    }
  }, []);

  const onDrag = async () => {
    const marker = markerRef.current
    if(marker != null) {
        const latLng = marker.getLatLng()
        await updatePosition(latLng)
    }
  }

  console.log(position);

//   const handleMarkerDragEnd = (event: L.LeafletEvent) => {
//     const marker = event.target;
//     const position = marker.getLatLng();
//     setMarkerPosition([position.lat, position.lng]);
//   };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
            Ubah Pin Point
          </Button>
        </DialogTrigger>
        <DialogContent className="text-sm sm:max-w-[600px]">
          <DialogHeader className="border-b-2 py-3">
            <DialogTitle>Tandai Pin Point</DialogTitle>
          </DialogHeader>

          <div className="p-3 border border-blue-900 bg-blue-100 rounded-md flex gap-3 items-center">
            <IoWarning />
            <p>Pastikan pin point lokasi sesuai dengan alamat!</p>
          </div>

          <div>
            <MapContainer
              className="sm:max-w-[600px] h-[400px]"
              center={markerPosition}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {position && (
                <Marker
                  position={position}
                  draggable={true}
                  eventHandlers={{ dragend: onDrag }}
                  ref={markerRef}
                >
                  <Popup>Pilih Lokasi Anda</Popup>
                </Marker>
              )}
              {/* <ChangeView center={markerPosition} /> */}
              <SearchControl setPosition={updatePosition} />
            </MapContainer>
          </div>

          <div className="flex gap-3 items-center text-blue-500">
            <IoIosPin className="text-2xl" />
            <p>{address}</p>
          </div>

          <div className="flex gap-5 justify-center">
            <Button className="w-5/12 bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
              Kembali
            </Button>
            <Button className="w-5/12 bg-blue-700 text-white border border-blue-900 hover:bg-blue-200 hover:text-black">
              Pilih Lokasi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapComponent;
