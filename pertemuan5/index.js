// let scores = [90, 75, 80];
// let arrJohn = ["john", "Doe", 33, true];
// // console.log(arrJohn[4], [1]);  

// // console.log(arrJohn[1], arrJohn[2]);

// let obJohn = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     scores: [100, 90, 80],
//     sayHello: function() {
//         console.log("Hello Jose ");
//     },
//     address: {
//         street: "Jl. Arnold Monontu",
//         city: "Minahasa utara",
//         province: "Sulawesi Utara",
//         postCode: "95371",
//     },

// };

// console.log(obJohn.lastName); // dot notation
// console.log(obJohn["age"]); //bracket notation 
// console.log(obJohn.sayHello());
// console.log(obJohn.scores[0]);
// console.log(obJohn.address.province);

// Array dalam object
let users = [
    {
        fullName: 'John Doe',
        age 33,
        address: 'Manado'
    },
    {
        fullName: 'Jose Pangalila',
        age 20,
        address: 'Manado'
   
    },
    {
        fullName: 'Jeremy Malaka',
        age 21,
        address: 'Kendari'
   
    },
    
];
let listUsers = users.map(function (user){
    return user.fullName;

});

            //Array.forEach()
 
// let numbers = [1, 2, 3, 4, 5];

// for(let i=0; i< numbers.length; i++){
//     console.log(numbers[i]);
// }


// numbers.forEach(function(item, index, arr) {
//     console.log("Value : " + item + ", Index :" + index + ",Array : " + arr);
// });

        // Array.map()

    

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, arr) {
    item *= 2;
    console.log("Value : " + item + ", Index :" + index + ",Array : " + arr);
});

numbers.map(function(item){
    return (item *= 2);
});

console.log("Array numbers : ", numbers);
console.log("Array output : ", output); 






//




//Array Built Method
let arr = [1,2,3,4,5];
for (let i=0; i<arr.length; i++) {
    console.log (arr[i]);
}
 //ARRAY FOR EACH
arr.forEach(function(value,index,array){
    value *=2;
    console.log('value : ' + value +', index : ' +index + ',array :' +array)
})

//Map
let output = arr.map(function(value){
    return value*=2;
})

console.log("Array arr :" ,arr);
console.log("Array Output :" ,output);

//
let users = [
    {
        fullName: "John Doe",
        age: 33,
        adress: "Manado",
    },
    {
        fullName: "Michell Tene",
        age: 19,
        adress: "Timika",
    },
    {
        fullName: "James Smith",
        age: 29,
        adress: "Timika",

    },
];

users.map(function(user){
    console.log(user.fullName);

});

let selectUsers=users.map(function (users) {
    return users.fullName;
});

console.log("Filter users: ", filterUser);

console.log("Daftar Users",selectUsers);

//FILTER
let filterUser = users.filter(function(users){
    return users.address ==="Manado";
});

console.log("filter user :",filterUser);


