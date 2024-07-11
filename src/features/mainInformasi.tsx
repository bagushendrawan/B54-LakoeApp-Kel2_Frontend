import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { HeaderInformasiToko } from "./headerPengaturan";
import { FormInformasiToko } from "./informasi";
import { LokasiToko } from "./lokasi";
import { TemplatePesan } from "./templatePesan";
<<<<<<< HEAD
import { createFileRoute } from "@tanstack/react-router";
=======
>>>>>>> origin/crud-setting

export function MainSetting() {
  return (
    <>
<<<<<<< HEAD
      <Tabs defaultValue="informasi" className="mt-5">
=======
      <Tabs defaultValue="informasi" className="mt-5 w-screen">
>>>>>>> origin/crud-setting
        <TabsList className="w-screen justify-start">
          <TabsTrigger value="informasi">Informasi</TabsTrigger>
          <TabsTrigger value="lokasi">Lokasi</TabsTrigger>
          <TabsTrigger value="templatePesan">Template Pesan</TabsTrigger>
        </TabsList>
        <div className="ml-5 my-7">
          <TabsContent value="informasi">
            <HeaderInformasiToko />
            <FormInformasiToko />
          </TabsContent>
          <TabsContent value="lokasi">
            <LokasiToko />
          </TabsContent>
          <TabsContent value="templatePesan">
            <TemplatePesan />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
