// const loadScript = (src, callback) => {
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () => {
//         callback(script)
//     }
//     document.head.append(script)
// }


// loadScript("9.js",(script)=>{
//     console.log(script.src + " is loaded")
// })


// const loadScript = (src, callback) => {
//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () => {
//         callback(null, script)
//     }
//     script.onerror = () => {
//         callback(new Error("Error while Loading script"))
//     }
//     document.head.append(script)
// }


// loadScript("91.js",(error,script)=>{
//     if(error){
//         console.log(error.message)
//     }else{
//         console.log(script.src + " is loaded")
//     }
// })


// loadScript("9.js",(error,script) => {
//     if(error){
//         console.log(error.message)
//     }else{
//         console.log(script.src + " is loaded");
//         loadScript("8.js",(error,script) => {
//             if(error){
//                 console.log(error.message)
//             }else{
//                 console.log(script.src + " is loaded")
//                 loadScript("7.js",(error,script) => {
//                     if(error){
//                         console.log(error.message)
//                     }else{
//                         console.log(script.src + " is loaded")
//                     }
//                 })
//             }
//         })
//     }
// })

// call back function example
const greet = (msg,add) => {
    console.log(msg)
    add(12,15)
}

greet("Good Morning",(a,b) => {
    console.log(a+b)
})