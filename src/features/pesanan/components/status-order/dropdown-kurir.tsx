import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DropdownKurir() {
  return (
    <>
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Kurir" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gosend">GoSend</SelectItem>
            <SelectItem value="grabexpress">Grab Express</SelectItem>
            <SelectItem value="anteraja">AnterAja</SelectItem>
            <SelectItem value="jne">JNE</SelectItem>
            <SelectItem value="j&t">J&T</SelectItem>
            <SelectItem value="lionparcel">Lion Parcel</SelectItem>
            <SelectItem value="ninja express">Ninja Express</SelectItem>
            <SelectItem value="posindonesia">POS Indonesia</SelectItem>
          </SelectContent>
        </Select>
    </>
  );
}
