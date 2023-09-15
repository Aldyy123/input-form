import { Region } from "@/infra/region"
import { useQuery } from "react-query"

const region = new Region()

const useGetProvince = () => {
    return useQuery(['province'], region.getProvince)
}

const useGetCity = (id: number) => {
    return useQuery(['city'], () => region.getCity(id), {
       refetchInterval: 1000
    })
}

const useGetKecamatan = (id: number) => {
    return useQuery(['kecamatan'], () => region.getKecamatan(id), {
       refetchInterval: 1000
    })
}

const useGetKelurahan = (id: number) => {
    return useQuery(['kelurahan'], () => region.getKelurahan(id), {
         refetchInterval: 1000
    })
}

export {
    useGetProvince,
    useGetCity,
    useGetKecamatan,
    useGetKelurahan
}