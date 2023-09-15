import { useGetCity, useGetKecamatan, useGetKelurahan } from "@/hooks/useProvince";
import filterData from "@/shared/utils/filterData";

export default function Kelurahan({
    kecamatan,
    setKelurahan
}: any) {
  const { data, isLoading } = useGetKelurahan(kecamatan.id);

    return(
        <div className="w-3/12">
          <select
            name="village"
            placeholder="Kelurahan"
            disabled={kecamatan ? false : true}
            onChange={(e) => setKelurahan(filterData(data, e.target.value))}
            className="p-2 border w-full rounded-md"
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