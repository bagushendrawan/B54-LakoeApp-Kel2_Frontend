import React, { Dispatch, SetStateAction, useState } from "react";
import { LocationService } from "@/features/serviceLokasi";
import { Location } from "@/datas/type";
import { v4 as uuidv4 } from "uuid";

interface PropTypes {
  setDatas: Dispatch<SetStateAction<Location[]>>;
}

export const StoreForm: React.FC<PropTypes> = ({ setDatas }) => {
  const [formData, setFormData] = useState<store>({
    id: uuidv4(),
    namaToko: "",
    selogan: "",
    deskripsi: "",
    image: null,
    completed: false,
  });

  const handleAddLocation = () => {
    if (
      (formData.namaToko.trim() !== "",
      formData.namaToko.trim() !== "",
      formData.namaToko.trim() !== "",
      formData.namaToko.trim() !== "",
      )
      // newDatafile !== null)
    ) {
      const newStore = {
        namaLokasi: newDatanamaLokasi,
        alamat: newDataAlamat,
        kota: newDataKota,
        kodePos: newDataKodePos,
        pinPoint: newDataPinPoint,
      };

      const newData = LocationService.addStore(
        newStore.namaLokasi,
        newStore.alamat,
        newStore.kota,
        newStore.kodePos,
        newStore.pinPoint
      );
      setDatas((prevDatas) => [...prevDatas, newData]);

      setNewDataLokasi("");
      setNewDatanamaAlamat("");
      setNewDataKota("");
      setNewDataKodePos("");
      setNewDataPinPoint("");
    }
  };
  return (
    <div className="inputForm">
      <input
        type="text"
        value={newDatanamaLokasi}
        onChange={(e) => setNewDataLokasi(e.target.value)}
        placeholder="Nama Toko"
      />
      <input
        type="text"
        value={newDataAlamat}
        onChange={(e) => setNewDatanamaAlamat(e.target.value)}
        placeholder="Slogan"
      />
      <input
        type="text"
        value={newDataKota}
        onChange={(e) => setNewDataKodePos(e.target.value)}
        placeholder="Deskripsi"
      />
      <input
        type="text"
        value={newDataKota}
        onChange={(e) => setNewDataKota(e.target.value)}
        placeholder="Deskripsi"
      />
      <input
        type="text"
        value={newDataKodePos}
        onChange={(e) => setNewDataPinPoint(e.target.value)}
        placeholder="Deskripsi"
      />
      <input
        type="text"
        value={newDataPinPoint}
        onChange={(e) => setNewDataPinPoint(e.target.value)}
        placeholder="Deskripsi"
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAddLocation}>Add Store</button>
    </div>
  );
};
