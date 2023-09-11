// Arrays---

let arr = ["red", "green", "yellow"]
console.log(arr[0])

console.log(arr.length)

arr[4] = "black"
// arr[3] = 10

console.log(arr)

console.log(arr.toString())
console.log(arr.join(" "))

// insert into array--
// 1. from end point--
arr.push("white")

// 2. from start point--
arr.unshift(10)

console.log(arr)

// remove from array--
// 1. from end point--
console.log(arr.pop())

console.log(arr)

// 2. from start point--
console.log(arr.shift())

console.log(arr)

// delete arr[4]

// console.log(arr)


// doent change the original array---

let arr1 = [10, 19, 26, 17]
let arr2 = [10, 19, 26, 17]

console.log(arr2.concat(arr1, arr))

console.log(arr.slice(2, 5))

// console.log(arr.reverse())  // => changes original array---


let numArr = [5, 6, 7, 14, 1, 19, 4, 24, 3, 0, 8, -9]

// const compare = (a,b) => {
//     return a-b      // => ascending order
//     return b-a      // => descending order
// }

console.log(numArr.sort((a, b) => { return b-a }))


// arr.splice(
//      kidhar add karna hai,
//      kitne elements delete karna hai,
//      elements to be added
// )
// changes original array

console.log(arr.splice(2,2,10,"orange","gray"))

console.log(arr)


for(let val of arr){
    console.log(val)
}

for(let key in arr){
    console.log(key,arr[key])
}

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

numArr.forEach((val)=>{
    console.log(val*val)
})

console.log(Array.from(numArr,(val) => 
{ return val * val }))

let arr3 = Array.from("9789575868")

console.log(Array.from(arr3,(val) => {
    return Number.parseInt(val)
}))




let n = Math.floor(Math.random() * 100) + 1

console.log(n)