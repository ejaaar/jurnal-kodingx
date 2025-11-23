// Type & Conversion

// tipe data primitif di JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// contoh tipe data primitif:
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol(""); // Symbol
let bigInt = 9007199254740991n; // BigInt

console.log("Tipe data Number: " + typeof num);
console.log("Tipe data String: " + typeof str);
console.log("Tipe data Boolean: " + typeof bool);
console.log("Tipe data Undefined: " + typeof undef);
console.log("Tipe data Null: " + typeof nul);
console.log("Tipe data Symbol: " + typeof sym);
console.log("Tipe data BigInt: " + typeof bigInt);

console.log('');
// -------------------------------------------------------
console.log(''); 

// tipe data modern di JavaScript:
// 1. Object
// 2. Array
// 3. Function

// contoh tipe data modern:
let obj = {name: "John", age: 30}; // Object

let arr = [1, 2, 3, 4, 5]; // Array

let funct = function name() {
    console.log('fungsi');
} // Function

console.log("Tipe data Object: " + typeof obj);
console.log("Tipe data Array: " + typeof arr);
console.log("Tipe data Function: " + typeof func);