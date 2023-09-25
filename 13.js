// let p = fetch("https://jsonplaceholder.typicode.com/posts")

// console.log(p)

// p.then((res)=>{
//     return res.json()
// }).then((val)=>{
//     console.log(val)
// })

// p.then(async(res)=>{
//     console.log(res.headers)
//     let val = await res.json()
//     console.log(val)
// })

let prom = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        userId: 2,
        title: "New post",
        body: "new post for testing"
    })
})

prom.then((res)=>{
    return res.json()
}).then((val)=>{
    let heading = document.createElement("h2")
    heading.innerHTML = val.title;
    document.body.appendChild(heading)
    let para = document.createElement("p")
    para.innerHTML = val.body;
    document.body.appendChild(para)
})