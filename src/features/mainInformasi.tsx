import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { HeaderInformasiToko } from "./headerPengaturan";
import { FormInformasiToko } from "./informasi";
// import { TemplatePesan } from "./templatePesan";
import { LocationContextProvider } from "@/context/LocationContext";
import { CardLokasi } from "./cardLokasi";
import { TemplateContextProvider } from "@/context/TemplateContext";
import { CardTemplate } from "./cardTemplatePesan";
import { Label } from "@/components/label";

export function MainSetting() {
  return (
    <>
      <div className="m-4 p-10 rounded-sm bg-white h-screen">
        <div className="mb-5">
          <Label className="font-bold text-2xl">Suka Suka Store</Label>
        </div>
        <Tabs defaultValue="informasi">
          <div>
            <TabsList className="border-b-2">
              <TabsTrigger value="informasi">Informasi</TabsTrigger>
              <TabsTrigger value="lokasi">Lokasi</TabsTrigger>
              <TabsTrigger value="templatePesan">Template Pesan</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="informasi">
            <HeaderInformasiToko />
            {/* <InformasiList /> */}
            <FormInformasiToko />
          </TabsContent>
          <TabsContent value="lokasi">
            <LocationContextProvider>
              <CardLokasi
                onSave={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </LocationContextProvider>
          </TabsContent>
          <TabsContent value="templatePesan">
            <TemplateContextProvider>
              <CardTemplate
                onSave={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </TemplateContextProvider>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
