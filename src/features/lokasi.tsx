import { CardLokasi } from "./cardLokasi";
import { LokasiTokoHeader } from "./headerPengaturan";

export function LokasiToko() {
  return (
    <>
      <LokasiTokoHeader />
      <CardLokasi />
      <CardLokasi />
      <CardLokasi />
      <CardLokasi />
    </>
  );
}
