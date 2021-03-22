let hello;
hello = "Hello Word !!!";

const birthYear = 2001;

let age = 19;
age += 2;
let ApakahSudahMenikah = false;
let alamat;

console.log(hello);
console.log(birthYear);
console.log(age);
console.log(ApakahSudahMenikah);
console.log(alamat);

let namaDepan = "Jose"
let namaBelakang = "Pangalila"

let namaLenkap = namaDepan + " " + namaBelakang + ". Usia saya adalah " + age;
console.log(namaLenkap);

let permainan = "Bola";
permainan += " Basket";

console.log(permainan);

console.log(10 == "10" ); //Loose equality
console.log(10 === "10"); //Strict equality


// const hasil = 10 %2  === 0 ? "Genap" : "Ganjil";
// const hasil1 = 11 %2  === 0 ? "Genap" : "Ganjil";
// console.log(hasil); 
// console.log(hasil1); 

let angka = 11;

const hasil = angka %2 === 0 && true ? "Genap" : "Ganjil";
console.log(hasil);

//Single line conmment
/* 
    Multiple line comment
*/
//Function

//Function Declaration
// function ucapanSalam() {
//     console.log("selamat Siang");
// }
// ucapanSalam();

// // Function expression
// const ucapanSalam2 = function () {
//     console.log("Selamat Siang dari function expression");

// };
// ucapanSalam2();

 //Function Declaration
// function ucapanSalam() {
//     return "Selamat Siang";                                  dengan menggunakan return.
// }
// console.log(ucapanSalam());
// // Function expression
// const ucapanSalam2 = function () {
//     return "Selamat Siang dari function expression ";
// };
// console.log(ucapanSalam2());

function ucapkanSalam(salam) {
    return salam;
}
//Argumnet
console.log(ucapkanSalam("selamat siang dari function  declaration ke 2"));

//Function expression
const ucapkanSalam2 = function () {
    return "Selamat siang dari function expression ke 2";
};
console.log(ucapkanSalam2());



// const olahraga = 'basketball';

// function namaAtlet() {
//   let atlet = 'Lionel Messi';
//   const noMessi = 10;
//   console.log(olahraga); // Output: basketball
//   if (olahraga === 'basketball') {
//      atlet = 'Kobe Bryant';
//      const noKobe = 24;
//      console.log(olahraga); // Output: basketball
//   }
//   return atlet;
// }

// console.log(namaAtlet()); // Output: Kobe Bryant
// console.log(olahraga); // Output: basketball



const olahraga = 'basketball';

function namaAtlet() {
  let atlet = 'Lionel Messi'; // lingkup fungsi
  const noMessi = 10; // lingkup fungsi
  if (olahraga === 'basketball') { 

     const noKobe = 24; // lingkup blok
     console.log(noMessi); // Output: 10  
    console.log(atlet);
    }
  console.log(noKobe); // Output: Uncaught ReferenceError: noKobe is not defined
  return atlet;
}

namaAtlet();
