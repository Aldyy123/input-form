import baseUrl from "@/domain/api";


export class Region {
    async getProvince() {
        try {
            const province = await baseUrl.get('regional/provinsi')
            return province.data.data
        } catch (error) {
            throw error
        }
    }

    async getCity(id: number) {
        try {
            const city = await baseUrl.get(`regional/kota?provinsi_id=${id}`)
            return city.data.data
        } catch (error) {
            throw error
        }
    }

    async getKecamatan(id: number) {
        try {
            const kecamatan = await baseUrl.get(`regional/kecamatan?kota_id=${id}`)
            return kecamatan.data.data
        } catch (error) {
            throw error
        }
    }

    async getKelurahan(id: number) {
        try {
            const kelurahan = await baseUrl.get(`regional/kelurahan?kecamatan_id=${id}`)
            return kelurahan.data.data
        } catch (error) {
            throw error
        }
    }
}