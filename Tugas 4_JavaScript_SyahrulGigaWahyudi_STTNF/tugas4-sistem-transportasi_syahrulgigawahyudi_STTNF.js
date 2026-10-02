/* 
   Tugas Pertemuan 4 - JavaScript (OOP)
   Sistem Manajemen Transportasi
    */

/*  Class Kendaraan 
   Mewakili berbagai jenis kendaraan yang bisa disewa,
   masing-masing punya karakteristik berbeda (inheritance) */
class Kendaraan {
    constructor(jenis, merk, platNomor, hargaSewaPerHari) {
        this.jenis = jenis;
        this.merk = merk;
        this.platNomor = platNomor;
        this.hargaSewaPerHari = hargaSewaPerHari;
    }

    info() {
        return `${this.jenis} ${this.merk} (${this.platNomor}) - Rp${this.hargaSewaPerHari.toLocaleString("id-ID")}/hari`;
    }
}

/*  Subclass Mobil  */
class Mobil extends Kendaraan {
    constructor(merk, platNomor, hargaSewaPerHari, jumlahKursi) {
        super("Mobil", merk, platNomor, hargaSewaPerHari);
        this.jumlahKursi = jumlahKursi;
    }

    info() {
        return `${super.info()} | Kapasitas: ${this.jumlahKursi} kursi`;
    }
}

/*  Subclass Motor  */
class Motor extends Kendaraan {
    constructor(merk, platNomor, hargaSewaPerHari, tipe) {
        super("Motor", merk, platNomor, hargaSewaPerHari);
        this.tipe = tipe; // contoh: matic, manual
    }

    info() {
        return `${super.info()} | Tipe: ${this.tipe}`;
    }
}

/*  Class Pelanggan  */
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null; // belum menyewa apapun saat dibuat
    }

    // Metode untuk mencatat transaksi penyewaan kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} berhasil menyewa ${kendaraan.info()}`);
    }

    // Metode untuk mengakhiri sewa (opsional, melengkapi sistem)
    kembalikanKendaraan() {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} mengembalikan ${this.kendaraanDisewa.info()}`);
            this.kendaraanDisewa = null;
        } else {
            console.log(`${this.nama} tidak sedang menyewa kendaraan apapun.`);
        }
    }
}

/*  Class SistemPenyewaan 
   Mengelola seluruh data pelanggan dan menampilkan
   daftar pelanggan yang sedang menyewa kendaraan */
class SistemPenyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("===== Daftar Pelanggan yang Sedang Menyewa Kendaraan =====");

        const pelangganMenyewa = this.daftarPelanggan.filter(
            pelanggan => pelanggan.kendaraanDisewa !== null
        );

        if (pelangganMenyewa.length === 0) {
            console.log("Tidak ada pelanggan yang sedang menyewa kendaraan.");
        } else {
            pelangganMenyewa.forEach(pelanggan => {
                console.log(
                    `Nama: ${pelanggan.nama} | No. HP: ${pelanggan.nomorTelepon} | Kendaraan: ${pelanggan.kendaraanDisewa.info()}`
                );
            });
        }

        console.log("");
    }
}

/* 
   Contoh Pemanggilan (Testing)
    */

// Membuat data kendaraan
const avanza = new Mobil("Toyota Avanza", "B 1234 ABC", 350000, 7);
const nmax = new Motor("Yamaha NMAX", "B 5678 XYZ", 100000, "Matic");
const innova = new Mobil("Toyota Innova", "B 9999 QWE", 500000, 7);

// Membuat data pelanggan
const pelanggan1 = new Pelanggan("Dodi Prayodi", "08123456789");
const pelanggan2 = new Pelanggan("Siti Aminah", "08987654321");
const pelanggan3 = new Pelanggan("Budi Santoso", "08112233445");

// Membuat sistem penyewaan
const sistem = new SistemPenyewaan();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Menampilkan daftar sebelum ada transaksi sewa
sistem.tampilkanPelangganMenyewa();

// Transaksi penyewaan kendaraan
pelanggan1.sewaKendaraan(avanza);
pelanggan2.sewaKendaraan(nmax);
// pelanggan3 belum menyewa apapun

// Menampilkan daftar pelanggan yang sedang menyewa
sistem.tampilkanPelangganMenyewa();

// Pelanggan 1 mengembalikan kendaraan, lalu menyewa kendaraan lain
pelanggan1.kembalikanKendaraan();
pelanggan1.sewaKendaraan(innova);

// Menampilkan daftar terbaru
sistem.tampilkanPelangganMenyewa();
