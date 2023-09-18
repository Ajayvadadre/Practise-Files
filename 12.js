let p1 = new Promise((resolve,reject)=>{
    // resolve(1)
    reject("error1")
})
let p2 = new Promise((resolve,reject)=>{
    // resolve(2)
    reject("error2")
})
let p3 = new Promise((resolve,reject)=>{
    // resolve(3)
    reject("error3")
})

// p1.then((val)=>{
//     console.log(val)
// })
// p2.then((val)=>{
//     console.log(val)
// })
// p3.then((val)=>{
//     console.log(val)
// })

// console.log(Promise.all([p1,p2,p3]))
// console.log(Promise.allSettled([p1,p2,p3]))
// console.log(Promise.resolve(p1))
// console.log(Promise.reject(p1))
console.log(Promise.any([p1,p2,p3]))
// console.log(Promise.race([p1,p2,p3]))


// p1.then((val)=>{
//     return val
// })

// await p1


// const add = async (a,b) => {
//     let val = await p1
//     console.log(val)
//     console.log(a+b)
// }

// console.log(add(1,2))

// add(19,16).then(()=>{
//     alert("Function is executed")
// }).catch(()=>{

// })


// try 
// {
//     throw new Error("please enter number between 1 to 100")
//     console.log(a)


//     // setTimeout(()=>{
//     //     try{
//     //         console.log(a)
//     //     }
//     //     catch(err){
//     //         console.log(err.name)
//     //     }
//     // },2000)

// } 
// catch (error) {
//     if(error.name == "Error"){
//         console.log(error.message)
//     }
// }
// finally {
//     console.log("Completed")
// }


