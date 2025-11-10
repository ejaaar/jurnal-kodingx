// control flow statements adalah instruksi yang mengontrol urutan eksekusi kode program untuk membuat keputusan

/**
 * control flow ada beberapa jenis, diantaranya:
 * 1. if statement
 * 2. if else statement
 * 3. if else if statement
 * 4. switch statement
 * 5. ternary operator
 */


// contoh if statement
    let nilai = 80;

    if (nilai >= 75) {
    console.log("Selamat, Anda lulus!");
    }


// contoh if else statement
    let nilai2 = 60;

    if (nilai2 >= 75) {
    console.log("Selamat, Anda lulus!");
    } else {
    console.log("Maaf, Anda tidak lulus.");
    }


// contoh if else if statement
    let nilai3 = 85;

    if (nilai3 >= 90) {
    console.log("Nilai Anda A");
    } else if (nilai3 >= 75) {
    console.log("Nilai Anda B");
    } else if (nilai3 >= 60) {
    console.log("Nilai Anda C");
    } else {
    console.log("Nilai Anda D");
    }


// contoh switch statement
    let hari = 3;
    let namaHari;

    switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak valid";
    }

    console.log(namaHari);


// contoh ternary operator
    let umur = 20;
    let status = (umur >= 18) ? "Dewasa" : "Anak-anak";
    console.log(status);
