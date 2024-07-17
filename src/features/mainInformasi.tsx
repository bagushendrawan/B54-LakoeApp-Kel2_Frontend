import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { HeaderInformasiToko } from "./headerPengaturan";
import { FormInformasiToko } from "./informasi";
// import { TemplatePesan } from "./templatePesan";
import { LocationContextProvider } from "@/context/LocationContext";
import { CardLokasi } from "./cardLokasi";
import { TemplateContextProvider } from "@/context/TemplateContext";
import { CardTemplate } from "./cardTemplatePesan";

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
            <LocationContextProvider><CardLokasi onSave={function (): void {
              throw new Error("Function not implemented.");
            }} /></LocationContextProvider>
          </TabsContent>
          <TabsContent value="templatePesan">
            <TemplateContextProvider><CardTemplate onSave={function (): void {
              throw new Error('Function not implemented.')
            }} /></TemplateContextProvider>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
