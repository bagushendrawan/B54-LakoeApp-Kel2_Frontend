import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { HeaderInformasiToko } from "./headerPengaturan";
import { FormInformasiToko } from "./informasi";
// import { LokasiToko } from "./lokasi";
import { TemplatePesan } from "./templatePesan";
// import { UpdateInformasi } from "@/components/UpdateInformasi";
// import { CardLokasi } from "./cardLokasi";
// import { InformasiList } from "@/components/LocationCard";

export function MainSetting() {
  return (
    <>
      <Tabs defaultValue="informasi" className="mt-5 w-screen">
        <TabsList className="w-screen justify-start">
          <TabsTrigger value="informasi">Informasi</TabsTrigger>
          <TabsTrigger value="lokasi">Lokasi</TabsTrigger>
          <TabsTrigger value="templatePesan">Template Pesan</TabsTrigger>
        </TabsList>
        <div className="ml-5 my-7">
          <TabsContent value="informasi">
            <HeaderInformasiToko />
            {/* <InformasiList /> */}
            <FormInformasiToko />
          </TabsContent>
          <TabsContent value="lokasi">
            {/* <CardLokasi /> */}
          </TabsContent>
          <TabsContent value="templatePesan">
            <TemplatePesan />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
