interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
  }
  
  export function CardTransaction({ }: MyButtonProps) {
    return (
        <div className="w-full h-12 bg-slate-100 rounded-md shadow-md my-4 px-24 flex justify-between items-center">
            <p id="no">1.</p>
            <p id="desc">This is a description</p>
            <p id="nilai">IDR 10000</p>
            <p id="status">PESANAN_SELESAI</p>
            <p id="tipe">SKU1232</p>
            <p id="tanggal">{Date.now()}</p>
            {/* <button disabled={disabled}>{title}</button> */}
        </div>
    );
  }