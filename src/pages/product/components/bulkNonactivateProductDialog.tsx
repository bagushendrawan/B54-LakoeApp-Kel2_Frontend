// import { FC } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { FC } from 'react';

interface IBulkNonactivateProps {
    selectedProduct: [number, boolean][];
}

const BulkNonactivateProductDialog: FC<IBulkNonactivateProps> = ({ selectedProduct }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-full" variant={'outline'}>
                    Nonaktifkan Produk
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Nonaktifkan {selectedProduct.length} Produk?</DialogTitle>
                    <DialogDescription>
                        Produk yang dinonaktifkan tidak akan dapat dilihat oleh calon pembeli. Pastikan tindakan kamu benar.
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
                                Ya, Nonaktifkan
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BulkNonactivateProductDialog;