"use client"
import { useGetProvince } from '@/hooks/useProvince';
import Image from 'next/image'
import { FormEventHandler, useState } from 'react';
import Kota from './components/Kota';
import Kecamatan from './components/Kecamatan';
import Kelurahan from './components/Kelurahan';
import saveDataToExcel from '@/shared/utils/excel';
import filterData from '@/shared/utils/filterData';

export default function Home() {
  const [provinsi, setProvinsi] = useState<any>(0)
  const [kota, setKota] = useState<any>(0)
  const [kecamatan, setKecamatan] = useState<any>(0)
  const [kelurahan, setKelurahan] = useState<any>(0)
  const [nameUser, setNameUser] = useState<any>(null)
  const [rt, setRt] = useState<any>(0)
  const [rw, setRw] = useState<any>(0)
  const [kesanPesan, setkesanPesan] = useState<any>(null)
  const [jumlahSosial, setJumlahSosial] = useState<any>(0)

  const { data, isLoading } = useGetProvince();

  if (isLoading) return <div>Loading...</div>


  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    const data = {
      nama: nameUser,
      rt: rt,
      rw: rw,
      provinsi: provinsi?.name,
      kota: kota.name,
      kecamatan: kecamatan.name,
      kelurahan: kelurahan.name,
      jumlahSosial,
      kesanPesan
    }

    console.log(data);
    
    saveDataToExcel(data)

  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center my-10 font-bold text-xl'>Form Input Lokasi</h1>
      <form onSubmit={submit} className="space-y-4 flex justify-center items-center flex-col">
        <div className='w-3/12'>
          <input type="text" className='p-2 border rounded-md w-full' placeholder='Masukan nama...' onChange={(e) => setNameUser(e.target.value)} />
        </div>
        <div className='w-3/12'>
          <input type="text" className='p-2 border rounded-md w-full' placeholder='RT...' onChange={(e) => setRt(e.target.value)} />
        </div>
        <div className='w-3/12'>
          <input type="text" className='p-2 border rounded-md w-full' placeholder='RW...' onChange={(e) => setRw(e.target.value)} />
        </div>
        <div className='w-3/12'>
          <select
            name="province"
            placeholder="Provinsi"
            onChange={(e) => setProvinsi(filterData(data, parseInt(e.target.value)))}
            className="p-2 border rounded-md w-full"
          >
            {data.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {provinsi ? <Kota provinsi={provinsi} setKota={setKota} /> : null}
        {kota ? <Kecamatan kota={kota} setKecamatan={setKecamatan} /> : null}
        {kecamatan ? <Kelurahan kecamatan={kecamatan} setKelurahan={setKelurahan} /> : null}
        <div className='w-3/12'>
          <input type="text" className='p-2 border rounded-md w-full' placeholder='Jumlah sosial...' onChange={(e) => setJumlahSosial(e.target.value)} />
        </div>
        <div className='w-3/12'>
          <input type="text" className='p-2 border rounded-md w-full' placeholder='Kesan pesan...' onChange={(e) => setkesanPesan(e.target.value)} />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  )
}
