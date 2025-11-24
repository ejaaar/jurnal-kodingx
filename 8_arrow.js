// arrow function = adalah fungsi menggunaakan panah => 

// contoh arrow function:
// fungsi biasa
function tambah(a, b) {
    return a + b;
}
console.log("Fungsi Biasa: " + tambah(3, 4)); // 3 + 4 = 7

// arrow function
const tambahArrow = (a, b) => {
    return a + b;
}
console.log(`fungsi arrow: ${tambahArrow(3, 4)}`); // 3 + 4 = 7

// arrow function dengan implicit return
//  implicit return = langsung mengembalikan nilai tanpa menggunakan kata kunci return
const kaliArrow = (a, b) => a * b;
console.log(`fungsi arrow dengan implicit return: ${kaliArrow(3, 4)}`); // 3 * 4 = 12

// arrow function tanpa parameter
const sapa = () => console.log("Halo, Selamat Datang!");
sapa(); // Halo, Selamat Datang!

// arrow function dengan 1 parameter
const kuadrat = x => x * x;
console.log(`fungsi arrow dengan 1 parameter: ${kuadrat(5)}`); // 5 * 5 = 25