import React, { useState } from "react";
import { store } from "@/datas/type";
import { StoreService } from "@/features/service";
// import { number, string } from "zod";
// import { File, Image } from "lucide-react";
// import { isString } from "util";
// import { Button } from "./button";
// import EditLocationDialog from "./EditLocationDialog";
import { FaCheck } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const StoreList = () => {
  const [datas, setDatas] = useState<store[]>(StoreService.getStore());

  const [editedDataId, setEditedDataId] = useState<number | null>(null);
  const [editedDatanamaToko, setEditedDatanamaToko] = useState<string>("");
  const [editedDataselogan, setEditedDatanamaselogan] = useState<string>("");
  const [editedDatadeskripsi, setEditedDatadeskripsi] = useState<string>("");
  const [editedDatafile, setEditedDatafile] = useState<string | File>("");

  //functional for handling edit Actions
  const handleEditStart = (
    id: number,
    namaToko: string,
    deskripsi: string,
    selogan: string,
    Image: string | undefined | File
  ) => {
    setEditedDataId(id);
    setEditedDatanamaToko(namaToko);
    setEditedDatanamaselogan(selogan);
    setEditedDatadeskripsi(deskripsi);
    setEditedDatafile(Image);
  };

  const handleEditCancel = () => {
    setEditedDataId(null);
    setEditedDatanamaToko("");
    setEditedDatanamaselogan("");
    setEditedDatadeskripsi("");
    setEditedDatafile("");
  };

  const handleEditSave = (id: number) => {
    const isString = (value: any): value is string => typeof value === "string";
    if (
      isString(editedDatanamaToko) &&
      editedDatanamaToko.trim() !== "" &&
      isString(editedDataselogan) &&
      editedDataselogan.trim() !== "" &&
      isString(editedDatadeskripsi) &&
      editedDatadeskripsi.trim() !== "" &&
      isString(editedDatafile) &&
      editedDatafile.trim() !== ""
    ) {
      const updateStore = StoreService.updateStore({
        id,
        namaToko: editedDatanamaToko,
        selogan: editedDataselogan,
        deskripsi: editedDatadeskripsi,
        image: editedDatafile,
        completed: false,
      });

      setDatas((prevDatas) =>
        prevDatas.map((data) => (data.id === id ? updateStore : data))
      );
      setEditedDataId(null);
      setEditedDatanamaToko("");
      setEditedDatanamaselogan("");
      setEditedDatadeskripsi("");
      setEditedDatafile("");
    }
  };

  //!functional to delete data
  const handleDeleteData = (id: number) => {
    StoreService.deleteStore(id);
    setDatas((prevData) => prevData.filter((data) => data.id !== id));
  };

  return (
      <div className="dataCountainer">
      <div>input components</div>
      {datas.map((data) => (
        <div className="items" key={data.id}>
            {editedDataId == data.id ? (
                <div className="editedText">
                    <input type="text" value={editedDatanamaToko} onChange={(e)=> setEditedDatanamaselogan(e.target.value)} autoFocus={true}
                    />
                    <button onClick={()=> handleEditSave(data.id)}>
                        <FaCheck/>
                    </button>
                    <button className="cancelBtn" onClick={()=> handleEditCancel(data.id)}>
                        <FaEdit/>
                    </button>


                </div>
        ):(
            <div className="editBtn">
            <span>{data.namaToko}</span>
            <span>{data.deskripsi}</span>
            <span>{data.selogan}</span>
            {/* <span>{data.image}</span> */}
            <button onClick={()=>handleEditStart(data.id, data.namaToko, data.deskripsi,data.selogan,data.image)}>
                <FaEdit/>
            </button>
            </div>
        )}
        <button onClick={() => handleDeleteData(data.id)}>
              <RiDeleteBin5Fill />
            </button>
        </div>
    ))}
    </div>;

    // <div className="border rounded p-4 flex justify-between items-start">
    //   <div>
    //     <p>
    //       <strong>Nama Lokasi:</strong> {location.namaLokasi}{" "}
    //       <span className="bg-green-200 text-green-800 py-1 px-2 rounded">
    //         Alamat Utama
    //       </span>
    //     </p>
    //     <p>
    //       <strong>Alamat:</strong> {location.alamat}
    //     </p>
    //     <p>
    //       <strong>Kota/Kecamatan:</strong> {location.kota}
    //     </p>
    //     <p>
    //       <strong>Kode Pos:</strong> {location.kodePos}
    //     </p>
    //     <p>
    //       <strong>Pinpoint:</strong>{" "}
    //       <a href="#" className="text-blue-600">
    //         Sudah Pinpoint
    //       </a>
    //     </p>
    //   </div>
    //   <div className="flex space-x-2">
    //     {editingLocation && (
    //       <EditLocationDialog
    //         location={editingLocation}
    //         onSave={handleEditLocation}
    //       >
    //         <Button variant="ghost" onClick={() => onEdit(location.id)}>
    //           Edit
    //         </Button>
    //       </EditLocationDialog>
    //     )}
    //     <Button variant="ghost" onClick={() => onDelete(location.id)}>
    //       🗑️
    //     </Button>
    //   </div>
    // </div>
  );
};
