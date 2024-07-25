import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/table";
import { FC } from "react";

interface ITableProps {
    dataWithdraw: IDataWithdraw[];
}

const TableWithdraw: FC<ITableProps> = ({ dataWithdraw }) => {
    return (
        <Table className="bg-white">
            <TableHeader className="bg-[#99F3BD]">
                <TableRow>
                    <TableHead className="text-center">No</TableHead>
                    <TableHead className="text-center">Withdraw ID</TableHead>
                    <TableHead className="text-center">Amount</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataWithdraw.map((withdraw, index) => (
                    <TableRow key={withdraw.id}>
                        <TableCell className="text-center">{index + 1}</TableCell>
                        <TableCell className="text-center">{withdraw.id}</TableCell>
                        <TableCell className="text-center">Rp{withdraw.nominal}</TableCell>
                        <TableCell className="text-center">{withdraw.status}</TableCell>
                        <TableCell className="text-center">{new Date(withdraw.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TableWithdraw;
