// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
    console.log("Data awal (10 data):");
    index();

    // ===== Menambahkan minimal 2 data baru (proses push) =====
    const dataBaru = [
        { nama: "Kevin Wijaya",  umur: 24, alamat: "Jl. Cendrawasih No. 11, Jakarta", email: "kevin.wijaya@mail.com" },
        { nama: "Laila Putri",   umur: 22, alamat: "Jl. Mawar No. 12, Bandung",       email: "laila.putri@mail.com" }
    ];
    store(dataBaru);

    console.log("\nData setelah ditambahkan (12 data):");
    index();

    // ===== Menghapus data =====
    destroy("Andi Saputra");

    console.log("\nData setelah dihapus (11 data):");
    index();
};

main();
