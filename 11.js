
// resolve(value)
// reject(error)


// let p = new Promise((resolve,reject)=>{
//     resolve("Promise done")
//     // reject("Promise failed")
// })

// console.log(p)

// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Code Finished")
// })

// p.then((val)=>{
//     console.log(val)
// },(err)=>{
//     console.log(err)
// })

// p.then((val)=>{
//     console.log(val)
//     return val // only returns to the next .then()
// }).then((val2)=>{
//     console.log(val2)
// })


const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(script)
        }
        script.onerror = () => {
            reject(new Error("Error while loading Script"))
        }
        document.head.append(script)
    })
}

let p1 = loadScript("6-10/9.js")

console.log(p1)

p1.then((val) => {
    console.log(`${val.src} is loaded`)
}).catch((err) => {
    console.log(err.message)
})

setTimeout(() => {
    console.log(p1)
}, 1000)