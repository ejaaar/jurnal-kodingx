// variables
// let and const
/**
 * sifat dari let adalah
 * 1. block scoped
 * 2. tidak bisa di redeclare
 * 3. bisa di reassign
 * 
 * 
 * sifat dari const adalah
 * 1. block scoped
 * 2. tidak bisa di redeclare
 * 3. tidak bisa di reassign
 * 
 * Note:
 * redeclare = mendeklarasikan ulang variable yang sama dalam scope yang sama
 * declaration = membuat variable untuk pertama kali
 * reassign = memberikan nilai baru pada variable yang sudah ada
*/ 

// contoh let dan const:

let a = 10;
a = 20; // reassign
console.log(a); // 20
//! let a = 30; // redeclare -> error 

const b = 15;
// b = 25; // reassign -> error
console.log(b); // 15
//! const b = 35; // redeclare -> error