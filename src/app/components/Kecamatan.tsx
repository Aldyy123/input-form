import { useGetCity, useGetKecamatan } from "@/hooks/useProvince";
import filterData from "@/shared/utils/filterData";

export default function Kecamatan({
    kota,
    setKecamatan
}: any) {
  const { data, isLoading } = useGetKecamatan(kota.id);

    return(
        <div className="w-3/12">
          <select
            name="district"
            placeholder="Kecamatan"
            disabled={kota.id ? false : true}
            onChange={(e) => setKecamatan(filterData(data, e.target.value))}
            className="p-2 w-full border rounded-md"
          >
            {isLoading ? <option>Loading...</option> : (
              data.map((item: any) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))
            )}
          </select>
        </div>
    )
}