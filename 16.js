// let arr = [["red","lightred"],"yellow","blue","green","black"]

// let [,,,...restOfColor] = arr

// console.log(...arr)

// // console.log(color1)
// // console.log(color2)
// console.log(restOfColor)

// let obj = {
//     fname: "Akash",
//     age: 17,
//     gender: "Male"
// }

// // let {fname} = obj

// // console.log(fname)

// let obj2 = {
//     ...obj,
//     age:18,
//     city:"Mumbai"
// }

// console.log(obj2)

// console.log(obj)

// // let temp = {
// //     ...obj,

// // }

// console.log({...obj})

// // {
// //      fname: "Akash",
// //      age: 18,
// //      gender: "Male",

// // }

//----------regex--(regular_expression)----------
let str = "a@a.com"

console.log(str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))


// let mob = "9876543291"

// console.log(mob.match(/^\d{10}$/))