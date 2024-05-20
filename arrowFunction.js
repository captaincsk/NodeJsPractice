const sayHello = () => {
    console.log("Heyy");
};
sayHello();
const add = (a,b) =>{
    return a+b;
}
console.log(add(4,5));
const add2 = (a,b) => a+b;
console.log(add2(5,6));

// there are no arguments keyword in arrow functions we nee to use 
// spread operator ("...") like ...nums to access or perform operations

const addNumber = (...nums) => {
    console.log(nums);
};

addNumber(10,20,30,40 );

// hoisting in arrow functions
// it doesn't support , you cant call the function before defining it 
const  sayHey = () =>
    {
        console.log("heyy there ");

    };

sayHello();

// this keyword 