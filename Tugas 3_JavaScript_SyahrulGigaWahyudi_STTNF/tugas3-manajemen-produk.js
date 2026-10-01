/* ============================================================
   Tugas Pertemuan 3 - JavaScript
   Sistem Manajemen Produk Toko Online
   ============================================================ */

// ========== Array Data Produk ==========
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// ========== Fungsi Menambah Produk ==========
function tambahProduk(nama, harga, stok) {
    // id baru dibuat otomatis berdasarkan id terakhir di array + 1
    const idBaru = produkToko.length > 0
        ? produkToko[produkToko.length - 1].id + 1
        : 1;

    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan dengan id ${idBaru}`);
}

// ========== Fungsi Menghapus Produk ==========
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);

    if (index !== -1) {
        const namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk "${namaProduk}" dengan id ${id} berhasil dihapus`);
    } else {
        console.log(`Produk dengan id ${id} tidak ditemukan`);
    }
}

// ========== Fungsi Menampilkan Produk ==========
function tampilkanProduk() {
    console.log("===== Daftar Produk Toko =====");

    if (produkToko.length === 0) {
        console.log("Tidak ada produk yang tersedia.");
    } else {
        produkToko.forEach(produk => {
            console.log(
                `ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString("id-ID")} | Stok: ${produk.stok}`
            );
        });
    }

    console.log("===============================");
}

/* ============================================================
   Contoh Pemanggilan Fungsi (Testing)
   ============================================================ */

// Menampilkan daftar produk awal
tampilkanProduk();

// Menambahkan produk baru
tambahProduk("Monitor", 1500000, 4);
tambahProduk("Webcam", 450000, 8);

// Menampilkan daftar produk setelah ditambah
tampilkanProduk();

// Menghapus produk dengan id 2 (Mouse)
hapusProduk(2);

// Menghapus produk yang tidak ada (contoh error handling)
hapusProduk(99);

// Menampilkan daftar produk setelah dihapus
tampilkanProduk();
