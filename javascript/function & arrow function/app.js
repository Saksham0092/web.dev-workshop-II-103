function addnumbers(a, b) {
    return a + b;
}

console.log("normal function: ", addnumberfunc(2,3)); //5


// const functionname = function(parameters){
// return value;
// } 

const greetexp = function(){
    return "hello students"
}

// function expression with parameters
const squarefunc = function(n) {
    return n * n;

};

// syntax:
//const functionname = (parameters) => expression ;

const addnumberarrow = (a2, b2) => a2 + b2;

console.log("arrow function:", addnumbersarrow(5, 7)); //12

// ARROW FUNCTION WITH NO PARAMETERS
const greetarrow = () => "hello students!";
console.log("arrow function with no parameters:", greetarrow()); // hello students!

// syntax:
// array.map(functionname)

numbersarraybasic = [1, 2, 3, 4, 5];
numbersarraybasic.map(num1=> num1 * num1); 

