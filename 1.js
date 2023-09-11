// function greet(msg) {
//     let a = 10;
//     console.log(msg);
//     return a;
// }

// let a = greet("Hello")
// greet("Welcome")
// greet("Thank You")

// console.log(a)


// let sum = (a,b,g) => {
//     console.log(g("Hello"))
//     return a+b
// }

// console.log(sum(17,20,greet))

// function sum(a,b) {
//     return a+b;
// }


// IIFE => Immediately Innvoked Function Expression

// (_ => {
//     console.log("Hello")
// })()



// 5! => 5x4x3x2x1
// 5! => 5x4!
// 4! => 4x3x2x1

// 1! = 1
// 0! = 1

// n! => n x (n-1)!


// const fact = (n) => {
//     if((n==0) || (n==1)){
//         return 1
//     }
//     return (n * fact(n-1))
// }

// console.log(fact(5))
// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}