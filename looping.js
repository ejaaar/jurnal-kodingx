// looping

// 1. for loop => lopp yang berjalan dengan jumlah yang telah ditentukan sampai kondisi terpenuhi
//  for(initialization; condition; increment) {statements}
//  contoh for loop : 
for (let i = 0; i < 5; i++) {
    console.log(`for loop ke : ${i}`);
}


// 2. while loop => lopp yang berjalan selama kondisi bernilai true 
//  while(condition) {statements} 
//  contoh while loop : 
let n = 0;

while (n < 5) {
  n++;
  console.log('while loop ke : ' + n);
}

while (true) {
    console.log("while loop infinite");
    break; // untuk menghentikan loop agar tidak berjalan terus menerus
}


// 3. do while loop => loop yang menjalankan kode satu kali terlebih dahulu sebelum memeriksa kondisi
//  do {statements} while(condition);
//  contoh do while loop : 
let m = 0;

do {
  m++;
  console.log('do while loop ke : ' + m);
} while (m < 5);


// 4. for each loop => loop yang digunakan untuk mengulang elemen-elemen dalam sebuah array
//  array.forEach(function(element) {statements});
//  contoh for each loop : 
let arr = [10, 20, 30, 40, 50];

arr.forEach(function(num) {
  console.log('for each loop nilai : ' + num);
});

