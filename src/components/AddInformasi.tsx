import React, { useContext, useState } from 'react';
import { InformasiContext } from '@/context/InformasiContext';
import { Informasi } from '@/datas/type';
import { Label } from './label';
import { Input } from './input';
import { Textarea } from './textarea';
import { Button, buttonVariants } from './button';
import { HeaderLogoToko } from '@/features/headerPengaturan';

export const AddInformasi: React.FC = () => {
    const context = useContext(InformasiContext);
    const [namaToko, setNamaToko] = useState('');
    const [selogan, setSelogan] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [image, setImage] = useState('');

    if (!context) {
        return null;
    }

    const { informs, setInforms } = context;

    const handleAdd = () => {
        const newInformasi: Informasi = {
            id: informs.length + 1,
            namaToko,
            selogan,
            deskripsi,
            image,
        };
        setInforms([...informs, newInformasi]);
        setNamaToko('');
        setSelogan('');
        setDeskripsi('');
        setImage('');
    };
    console.log(informs);


    return (

        <div className="w-full">
            <div className="flex gap-9">
                <div className="mt-3">
                    <Label className="py-10">Selogan</Label>
                    <Input
                        placeholder="Buat Selogan Untuk Toko"
                        className="mt-3 mb-3"
                        value={selogan}
                        onChange={(e) => setSelogan(e.target.value)}
                    ></Input>
                    <Label>Nama Toko</Label>
                    <Input
                        className="mt-3 mb-3"
                        value={namaToko}
                        onChange={(e) => setNamaToko(e.target.value)}
                    ></Input>
                </div>
                <div className="flex-col mr-10 mt-3 ">
                    <Label className="py-10">Deskripsi</Label>
                    <Textarea
                        className="mt-3 mb-5"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end mr-10 border-b pb-5">
                <Button className={buttonVariants({ variant: 'custom', borderRadius: 'xl' })} onClick={handleAdd} type="submit">Simpan</Button>
            </div>
            <HeaderLogoToko />
            <div className="border-b">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input
                        id="picture"
                        type="file"
                        value={image}
                    // onChange={"handleFileChange"}
                    />
                </div>
            </div>
        </div>


















        // // ================================
        // <div>
        //     <h2>Add Location</h2>
        //     <input
        //         type="text"
        //         placeholder="Name"
        //         value={namaToko}
        //         onChange={(e) => setNamaToko(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Description"
        //         value={selogan}
        //         onChange={(e) => setSelogan(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         placeholder="Description"
        //         value={deskripsi}
        //         onChange={(e) => setDeskripsi(e.target.value)}
        //     />
        //     <button onClick={handleAdd}>Add</button>
        // </div>
    );
};
