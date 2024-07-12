// import { FC } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { MdOutlineDelete } from 'react-icons/md';

const BulkDeleteProductDialog = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full" variant={'outline'}>
                    <MdOutlineDelete size={'1.3rem'} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Hapus 4 Produk?</DialogTitle>
                    <DialogDescription>
                        Produk yang dihapus tidak akan bisa dibatalkan. Pastikan produk yang kamu pilih itu sudah benar.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="flex justify-end space-x-2 mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline" className='rounded-full'>
                                Batalkan
                            </Button>
                        </DialogClose>

                        <DialogClose>
                            <Button
                                className="px-4 py-2 text-white bg-blue-500 rounded-full"
                            >
                                Ya, Hapus
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BulkDeleteProductDialog;