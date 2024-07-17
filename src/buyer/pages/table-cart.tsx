import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/table"
import { useEffect } from "react";
import Axios from "axios"
   

   
  export function TableCart() {
    // const [items, setItems] = useState<>
    // useEffect(() => {
    //     async function fetchItems(){
    //       try {
    //         const response = await Axios({
    //           method: "get",
    //           url: `http://localhost:3000/cart-items/all`,
    //           headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`,
    //           },
    //         });
    //         console.log("fetch items",response.data);
            
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    //     fetchItems()
    //   },[])
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full">List Cart Item</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow >

            <div className="mt-3 flex gap-3 items-center">
                    <img src="" alt="image" className="w-3/12 rounded-sm" />

                    <div className="text-s">
                      <p>Nama Produk</p>
                      <p>1 item (100gr)</p>
                      <p>Rp 120.0000</p>
                    </div>
                  </div>
            </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }