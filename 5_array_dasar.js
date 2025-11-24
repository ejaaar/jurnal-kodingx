// array dasar - push, pop, slice, splice, indexOf, join ,sort

// 1. push => menambahkan elemen baru di akhir array
let buah = ['apel', 'jeruk', 'mangga'];
buah.push('pisang');
console.log(`push: ${buah}`); // Output: ['apel', 'jeruk', 'mangga', 'pisang']



// 2. pop => menghapus elemen terakhir dari array
let buah2 = ['apel', 'jeruk', 'mangga'];
buah2.pop();
console.log(`pop: ${buah2}`); // Output: ['apel', 'jeruk']



// 3. slice => mengambil sebagian elemen dari array tanpa mengubah array asli
let buah3 = ['apel', 'jeruk', 'mangga', 'pisang', 'kiwi'];
let slicedBuah = buah3.slice(1, 4);  // mengambil elemen dari index 1 sampai index sebelum 4
console.log(`slice: ${slicedBuah}`); // Output: ['jeruk', 'mangga', 'pisang']



// 4. splice => mengubah isi array dengan menambahkan, menghapus, atau mengganti elemen
// urutan : namaArr.splice(index, jumlahDataHapus, itemBaru)

let buah4 = ['apel', 'jeruk', 'mangga', 'pisang'];
// hapus 
buah4.splice(0,1); // menghapus index 0 sebanyak 1 elemen
console.log(`splice hapus: ${buah4}`); // Output: ['jeruk', 'mangga', 'pisang']

//tambah
buah4.splice(0,0,'kiwi'); // menambah kiwi di index 0 
console.log(`splice tambah: ${buah4}`); // Output: ['kiwi', 'jeruk', 'mangga', 'pisang']

// ubah
buah4.splice(1,1,'anggur'); // menghapus index 1 dan mengganti index 1 dengan anggur
console.log(`splice ubah: ${buah4}`); // Output: ['kiwi', 'anggur', 'mangga', 'pisang']



// 5. indexOf => mencari urutan index dari elemen tertentu dalam array
let index = ['a', 'b', 'c', 'd', 'e'];
let urutan = index.indexOf('c');
console.log(`indexOf: ${urutan}`); // Output: 2



// 6. join => menggabungkan semua elemen array menjadi 1 string 
let gabung = ['halo', 'dunia', 'agartha'];
console.log(`sebelum join: ${gabung}`); // Output: ['halo', 'dunia', 'agartha']

let hasilGabung = gabung.join(' '); // menggabungkan dengan spasi
console.log(`setelah join: ${hasilGabung}`); // Output: 'halo dunia agartha'



// 7. sort => mengurutkan elemen array 
// mengurut number
let number = [1,5,3,2,5]
number.sort()
console.log(number);

let dataNumber = [1,12,13,3,21,20,5,6,80] 
dataNumber.sort() // mengurutkan dari angka pertama tiap index
console.log(dataNumber);

dataNumber.sort((a,b) => a - b) // mengurutkan yang lebih akurat dari angka terkecil ke terbesar
console.log(dataNumber);  

// mengurut string
let siswa = ['aksa', 'dapeng', 'galih', 'galang']
siswa.sort() // mengurutkan secara alfabet a-z dari dan dari kapital ke kecil
console.log(siswa);

let huruf = ['d', 'a', 'c', 'b','e','b','A','cc','ca', '9']
huruf.sort() 
console.log(huruf);