// console.log(decodeURIComponent(document.cookie))

// document.cookie = 
// `${encodeURIComponent("a+b=c")}=${encodeURIComponent("console.log('Hello');")};path=/Home;expires=`


// localStorage.setItem("name",JSON.stringify([{"name1":"Rohan","name2":"ajay"}]))

// console.log(JSON.parse(localStorage.getItem("name")))

// console.log(localStorage.getItem(localStorage.key(1)))

// console.log(localStorage.key(0))

// for(let i=0; i<localStorage.length; i++){
//     let key = localStorage.key(i)

//     let value = localStorage.getItem(key)

//     console.log(key, value)
// }

localStorage.setItem("Address","Andheri")

window.addEventListener("storage", () => {
    console.log(JSON.parse(window.localStorage.getItem("Address")));
  });