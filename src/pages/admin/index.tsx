/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Dropdown from './components/dropDownSort';
import IconInput from './components/iconInput';
import CardItem from './components/cardItem';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { CarouselSize } from '@/components/location/test';

const tabs = [
    { name: 'Semua', id: 'all' },
    { name: 'Menunggu', id: 'waiting' },
    { name: 'Dalam Proses', id: 'process' },
    { name: 'Selesai', id: 'done' },
    { name: 'Dibatalkan', id: 'rejected' }
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('all');

    const action = ["Terakhir Diubah", "Permintaan Terbaru", "Permintaan Terlama", "Nominal Tertinggi", "Nominal Terendah"];

    const [transactions, setTransactions] = useState([
        {
            id: 1,
            store_name: "Store 1",
            store_logo: "https://via.placeholder.com/150",
            nominal: 5500000,
            status: 'waiting',
            metode: 'OVO',
            rek: '08453235478',
            created: 2
        },
        {
            id: 2,
            store_name: "Store 2",
            store_logo: "https://via.placeholder.com/150",
            nominal: 2500000,
            status: 'done',
            metode: 'Gopay',
            rek: '0845534538',
            created: 3
        },
        {
            id: 3,
            store_name: "Store 3",
            store_logo: "https://via.placeholder.com/150",
            nominal: 2000000,
            status: 'process',
            metode: 'BCA',
            rek: '6453235478',
            created: 1
        },
        {
            id: 4,
            store_name: "Store 4",
            store_logo: "https://via.placeholder.com/150",
            nominal: 300000,
            status: 'rejected',
            metode: 'OVO',
            rek: '08398235478',
            created: 4
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAction, setSelectedAction] = useState("Terakhir Diubah");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSortAction = (action: string) => {
        setSelectedAction(action);
    };

    const sortTransactions = (transactions: any[]) => {
        switch (selectedAction) {
            case "Permintaan Terbaru":
                return [...transactions].sort((a, b) => b.created - a.created);
            case "Permintaan Terlama":
                return [...transactions].sort((a, b) => a.created - b.created);
            case "Nominal Tertinggi":
                return [...transactions].sort((a, b) => b.nominal - a.nominal);
            case "Nominal Terendah":
                return [...transactions].sort((a, b) => a.nominal - b.nominal);
            default:
                return transactions;
        }
    };

    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearchTerm = transaction.store_name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = activeTab === 'all' || transaction.status === activeTab;
        return matchesSearchTerm && matchesStatus;
    });

    const sortedAndFilteredTransactions = sortTransactions(filteredTransactions);

    return (
        <div className="w-full min-h-screen p-4 bg-white rounded">
            <p className="text-2xl font-bold">Withdraw</p>
            <div className="w-full flex mt-4 border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`w-full py-2 text-lg ${activeTab === tab.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <div className="flex justify-center items-center gap-2">
                            <div className="min-w-6 min-h-6 flex justify-center items-center px-2 text-white bg-blue-600 rounded-full">9+</div>
                            {tab.name}
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex gap-2 my-4">
                {/* search sort */}
                <IconInput value={searchTerm} onChange={handleSearchChange} />

                {/* action sort */}
                <Dropdown options={action} selectedOption={selectedAction} onSelect={handleSortAction} />
            </div>

            {sortedAndFilteredTransactions.length === 0 ? (
                <div className="w-full flex justify-center items-center gap-4 border p-4 rounded shadow-md">
                    <FaFileInvoiceDollar size={'4rem'} color="#909090" />
                    <div>
                        <p className="text-xl font-bold">
                            Tidak ada permintaan
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    {sortedAndFilteredTransactions.map((transaction) => (
                        <CardItem key={transaction.id} transaction={transaction} />
                    ))}
                </div>
            )}

            <CarouselSize />
        </div>
    );
};

export default AdminPage;
