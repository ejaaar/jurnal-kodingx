console.log('tes');

/**
 * array => struktur data yang bisa menyimpan lebih dari satu nilai
 * 
 * syntax array
 *  mendefinisikan array dengan nilai default
 *  keywordVarible namaArray = [nilai1, nilai2, nilai3,..]
 * 
 * es6 
 * keywordVariable NamaArray = new array{banyakData}
 * 
 * 
 * index => urutan datanya (semua index start dari 0)
 * 
 * method array : 
 * mutating = merubah isi data
 *  push() => untuk menambahkan nilai, di index terakhir
 *  namaArr.push(nilainya)
 * 
 *  pop() => untuk menghapus nilai, di index terakhir
 *  namaArr.pop()
 * 
 *  unshitf() => untuk menambahkan nilai, di index pertama
 *  namaArr.unshift(nilainya)
 * 
 *  shift() => untuk menghapus nilai, di index pertama
 *  namaArr.shift()
 * 
 *  splice() => untuk menambah, menghapus, mengedit isi array
 *  namaArr.splice(index, jumlahDataDihapus, itemBaru1,)
 * 
 *  sort() => untuk mengurutkan data dari kecil ke besar
 *  namaArr.sort(datanya)
 * 
 *  reverse() => untuk mengurutkan data dari besar ke kecil
 *  namaArr.reverse(datanya)
 * 
 *  splice() => untuk menambah, menghapus, mengedit isi array
 *  namaArr.splice(index, jumlahDataDihapus, itemBaru1,)
 * 
 * Nan-Mutating = membuat array baru 
 */

let dataNilai = new Array(90) // membuat panjang data array 90
console.log(dataNilai.length);


let dataNama = ['A', 'B', 'C'];
console.log(`DATA NAMA : ${dataNama}`);

dataNama.push('D')
console.log(`DATA NAMA AFTER PUSH : ${dataNama}`);

dataNama.pop()
console.log(`DATA NAMA AFTER POP : ${dataNama}`);

dataNama.unshift("Q")
console.log(`DATA NAMA AFTER UNSHIFT : ${dataNama}`);

dataNama.shift()
console.log(`DATA NAMA AFTER SHIFT : ${dataNama}`);



let dataSiswa = ['galih', 'aksa', 'dapeng']
console.log(dataSiswa);

// hapus data
// namaArr.splice(index, jumlahDataHapus, itemBaru)
dataSiswa.splice(0,1);
console.log(dataSiswa);

// tambah data
// namaArr.splice(index, jumlahDataHapus, itemBaru)
dataSiswa.splice(0,0, 'galih-v2')
console.log(dataSiswa);

// edit data / mengganti data
// namaArr.splice(index, jumlahDataHapus, itemBaru)
dataSiswa.splice(0,0, 'galuh')
console.log(dataSiswa);


// menggurutkan data
// sort 
let number = [1,5,3,2,5]
number.sort()
console.log(number);

let siswa = ['aksa', 'dapeng', 'galih', 'galang']
siswa.sort()
console.log(siswa);


let dataNumber = [1,12,13,3,21,20,5,6,80]
dataNumber.sort()
console.log(dataNumber);

dataNumber.sort((a,b) => a - b) // mengurutkan yang lebih akurat
console.log(dataNumber);  

// reverse()
dataNumber.reverse()
console.log(dataNumber);

dataNumber.reverse((a,b) => a - b)
console.log(dataNumber);

number.reverse()
console.log(number);

siswa.reverse()
console.log(siswa);
