import { Button } from '@/components/button';
import { FC } from 'react';
import { GoDotFill } from 'react-icons/go';

interface ITransaction {
    id: number;
    store_name: string;
    store_logo: string;
    nominal: number;
    status: string;
    metode: string;
    rek: string;
    created: number;
}

interface ICardItemProps {
    transaction: ITransaction;
}

const CardItem: FC<ICardItemProps> = ({ transaction }) => {
    return (
        <div className="w-full border p-4 rounded shadow-md">
            <div className="w-full flex items-center gap-4">
                <img
                    src={transaction.store_logo}
                    alt={transaction.store_name}
                    width={'90rem'}
                />

                <div className="w-full">
                    <div className="flex flex-col">
                        <p className="flex flex-1 text-2xl font-bold">
                            {transaction.store_name}
                        </p>

                        <div className="flex">
                            <div className="flex flex-1 items-center gap-2">
                                <p className="text-xl">Rp{transaction.nominal}</p>
                                <GoDotFill color="#909090" />
                                <p className="text-xl">{transaction.metode}</p>
                                <GoDotFill color="#909090" />
                                <p className="text-xl">{transaction.rek}</p>
                            </div>
                            {transaction.status === 'waiting' && (
                                <Button variant={'outline'} className="rounded-full">
                                    Proses Permintaan
                                </Button>
                            )}

                            {transaction.status === 'process' && (
                                <div className="flex gap-2">
                                    <Button variant={'outline'} className="rounded-full">
                                        Batalkan Permintaan
                                    </Button>

                                    <Button variant={'outline'} className="rounded-full">
                                        Selesaikan Permintaan
                                    </Button>
                                </div>
                            )}

                            {transaction.status === 'rejected' && (
                                <p className="text-red-600">* Permintaan dibatalkan karena nominal kurang dari Rp500.000</p>
                            )}

                            {transaction.status === 'done' && (
                                <p className="text-green-600">* Permintaan selesai</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardItem;