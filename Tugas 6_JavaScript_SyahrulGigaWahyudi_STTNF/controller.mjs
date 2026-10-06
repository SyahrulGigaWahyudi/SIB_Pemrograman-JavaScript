// controller.mjs
import users from "./data.mjs";

// ========== Melihat Data ==========
const index = () => {
    console.log("===== Daftar Data Pengguna =====");

    const hasil = users.map((user, i) => {
        return `${i + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`;
    });

    hasil.forEach(baris => console.log(baris));

    console.log(`Total data: ${users.length}`);
    console.log("=================================");
};

// ========== Menambah Data ==========
// Bisa menerima satu object atau array of object (untuk tambah lebih dari 1 data)
const store = (dataBaru) => {
    if (Array.isArray(dataBaru)) {
        users.push(...dataBaru);
        console.log(`${dataBaru.length} data berhasil ditambahkan`);
    } else {
        users.push(dataBaru);
        console.log(`Data "${dataBaru.nama}" berhasil ditambahkan`);
    }
};

// ========== Menghapus Data ==========
// Menghapus data berdasarkan nama
const destroy = (nama) => {
    const idx = users.findIndex(user => user.nama === nama);

    if (idx !== -1) {
        const dihapus = users.splice(idx, 1);
        console.log(`Data "${dihapus[0].nama}" berhasil dihapus`);
    } else {
        console.log(`Data dengan nama "${nama}" tidak ditemukan`);
    }
};

export { index, store, destroy };
