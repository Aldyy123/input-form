import * as ExcelJS from 'exceljs'

const saveDataToExcel = (data: any) => {
    // Membuat workbook baru
    const workbook = new ExcelJS.Workbook();

    // Membuat worksheet baru
    const worksheet = workbook.addWorksheet("Lokasi");

    // Menambahkan header ke worksheet
    worksheet.addRow(["Nama", "RT", "RW", "Provinsi", "Kota/Kabupaten", "Kecamatan", "Kelurahan", "Jumlah Sosialisasi", "Kesan & Pesan"]);

    // Menambahkan data dari array ke worksheet
        worksheet.addRow([
            data.nama,
            data.rt,
            data.rw,
            data.provinsi,
            data.kota,
            data.kecamatan,
            data.kelurahan,
            data.jumlahSosial,
            data.kesanPesan,
        ]);

    // Menyimpan workbook ke dalam file Excel
    workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.xlsx";
        a.click();
        window.URL.revokeObjectURL(url);
    });
};

export default saveDataToExcel;
