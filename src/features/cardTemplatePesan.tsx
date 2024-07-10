import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { TableBody, TableCell, TableRow } from "@/components/table";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
export function CardTemplatePesan() {
  return (
    <>
      <Card className="pt-6">
        <CardContent className="flex justify-between">
          <div>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TableRow>Nama Lokasi</TableRow>
                  <TableRow>Alamat</TableRow>
                  <TableRow>Kota/Kecamatan</TableRow>
                  <TableRow>Kode Pos</TableRow>
                  <TableRow>Pinpoint</TableRow>
                </TableCell>
                <TableCell>
                  <TableRow className="font-bold">Nama Lokasi</TableRow>
                  <TableRow>Alamat</TableRow>
                  <TableRow>Kota/Kecamatan</TableRow>
                  <TableRow>Kode Pos</TableRow>
                  <TableRow>Pinpoint</TableRow>
                </TableCell>
              </TableRow>
            </TableBody>
          </div>
          <div>
            <Button
              className="bg-white border-2 mr-5 rounded-full"
              variant="outline"
            >
              <FaRegTrashCan color="black" />
            </Button>
            <Button
              className="bg-white border-2 mr-5 rounded-full"
              variant="outline"
            >
              <FaEdit color="black" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
