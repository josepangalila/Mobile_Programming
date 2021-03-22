

//Array
//      
// let numbers = new Array(1, 2, 3, 4, 5);
// let jose = new Array("jose", "pangalila", 33, true);

// console.log(numbers);
// console.log(jose);

// jose[3] = false;

// console.log(numbers.length[numbers - 1 ]);
// console.log(jose.length[jose - 1]);

//Object

const jose = {
    firstName: "jose",
    lastName:"pangalila",
    age:20,
    isMarried: false,
    sayHello: function () {
        console.log("Hello Jose ");         //function
    },
};

// const jose = new Object();
// jose.firstName = "Jose";
// jose.lastName = "Pangalila";
// jose.age = 20;
// jose.isMarried = false;

console.log(jose.lastName);             //
console.log(jose ["isMarried"]);        //

jose.addres = "Manado";
jose["nationality"] = "Indonesia";
console.log(jose);
jose.sayHello();        // function