// operator

/**
 * operator arithmetic/aritmatika adalah simbol-simbol yang digunakan untuk melakukan operasi matematika pada nilai atau variabel.
 * +    : penjumlahan
 * -    : pengurangan
 * *    : perkalian
 * **   : pangkat
 * /    : pembagian
 * %    : modulus (sisa bagi)
 * ++   : increment (menambah nilai 1)
 * --   : decrement (mengurangi nilai 1)

 */

// contoh operator aritmatika:
let x = 10;
let y = 3;

console.log("Penjumlahan: " + (x + y)); // 13
console.log("Pengurangan: " + (x - y)); // 7
console.log("Perkalian: " + (x * y));   // 30
console.log("Pangkat: " + (x ** y));    // 1000
console.log("Pembagian: " + (x / y));   // 3.3333...
console.log("Modulus: " + (x % y));     // 1

x++; // increment
console.log("Increment: " + x); // 11

y--; // decrement
console.log("Decrement: " + y); // 2


console.log('');
// -------------------------------------------------------
console.log('');


/**
 * operator assignment/penugasan adalah simbol-simbol yang digunakan untuk memberikan nilai pada variabel.
 * =    : penugasan sederhana
 * +=   : penugasan penjumlahan
 * -=   : penugasan pengurangan
 * *=   : penugasan perkalian
 * /=   : penugasan pembagian
 * %=   : penugasan modulus 
 */

// contoh operator penugasan:
let a = 5;

a += 3; // a = a + 3
console.log("Penugasan Penjumlahan: " + a); // a = 8

a -= 4; // a = a - 4
console.log("Penugasan Pengurangan: " + a); // a = 4

a *= 2; // a = a * 2
console.log("Penugasan Perkalian: " + a); // a = 8

a /= 2; // a = a / 2
console.log("Penugasan Pembagian: " + a); // a = 4

a %= 2; // a = a % 2
console.log("Penugasan Modulus: " + a); // a = 0


console.log('');
// -------------------------------------------------------
console.log('');


/**
 * operator comparison/perbandingan adalah simbol-simbol yang digunakan untuk membandingkan dua nilai atau variabel.
 * ==   : sama dengan (nilai saja)
 * ===  : identik (nilai dan tipe data)
 * !=   : tidak sama dengan (nilai saja)
 * !==  : tidak identik (nilai dan tipe data)
 * >    : lebih besar dari
 * <    : lebih kecil dari
 * >=   : lebih besar atau sama dengan
 * <=   : lebih kecil atau sama dengan
 */

// contoh operator perbandingan:
let m = 10;
let n = '10';

console.log("Sama dengan (==): " + (m == n)); // true
console.log("Identik (===): " + (m === n)); // false

console.log("Tidak sama dengan (!=): " + (m != n)); // false
console.log("Tidak identik (!==): " + (m !== n)); // true

console.log("Lebih besar dari (>): " + (m > 10)); // false
console.log("Lebih kecil dari (<): " + (m < 10)); // false
console.log("Lebih besar atau sama dengan (>=): " + (m >= 10)); // true
console.log("Lebih kecil atau sama dengan (<=): " + (m <= 10)); // true


console.log('');
// -------------------------------------------------------
console.log('');


/**
 * operator logical/logika adalah simbol-simbol yang digunakan untuk menggabungkan ekspresi logika.
 * note : ekspresi logika adalah pernyataan yang menghasilkan nilai true atau false
 * &&   : AND (dan) = kedua nilai harus true untuk menghasilkan true
 * ||   : OR (atau) = salah satu nilai harus true untuk menghasilkan true
 * !    : NOT (bukan/negasi/kebalikan nilai aslinya) = membalik nilai true menjadi false dan sebaliknya
 */

// contoh operator logika:
let t = true;
let f = false;

console.log("AND (&&): " + (t && f)); // false
console.log("AND (&&): " + (t && t)); // true

console.log("OR (||): " + (t || f));  // true
console.log("OR (||): " + (f || f));  // false

console.log("NOT (!): " + (!t));       // false 
console.log("NOT (!): " + (!f));       // true