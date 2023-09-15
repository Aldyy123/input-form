import { useGetCity } from "@/hooks/useProvince";
import filterData from "@/shared/utils/filterData";

export default function Kota({
    provinsi,
    setKota
}: any) {
    const { data: dataKota, isLoading: isLoadingKota } = useGetCity(provinsi.id);

    return (
        <div className="w-3/12">
            <select
                name="city"
                placeholder="Kota"
                disabled={provinsi.id ? false : true}
                onChange={(e) => setKota(filterData(dataKota, e.target.value))}
                className="p-2 w-full border rounded-md"
            >
                {isLoadingKota ? <option>Loading...</option> : (
                    dataKota.map((item: any) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))
                )}
            </select>
        </div>
    )
}