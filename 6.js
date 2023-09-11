// let a = document.body.firstElementChild

// console.log(a)

// console.log(a.rows[1])

// console.log(a.caption)

// console.log(a.tHead)
// console.log(a.tHead.rows[0].cells)
// console.log(a.tBodies)
// console.log(a.tFoot)

// let b = a.tBodies[0]

// console.log(b.rows)

// let c = b.rows[0]
// console.log(c.cells)
// console.log(c.sectionRowIndex)
// console.log(c.rowIndex)

// let d = c.cells[0]
// d.innerText = 36
// console.log(d)
// console.log(d.cellIndex)



// let table = document.getElementsByTagName("table")

// console.log(table[0])


// let input = document.getElementsByName("fullname")

// console.log(input)
// console.log(input["fullname"])

// let t = document.querySelectorAll(".details")

// console.log(t)


// document.querySelectorAll(".details")[0] == document.querySelector(".details")


// let t = document.getElementsByTagName("table")[0]

// console.log(t)
// console.log(t.tagName)
// console.log(t.matches("#details"))
// console.dir(t.closest(".details"))

// console.log(document.body.contains(t))

// for(let i in t){
//     console.log(t[i].matches(".details"))
// }


let d = document.getElementsByClassName("details")
console.log(d.outerHTML)
console.log(d)

for(let a of d){
    // console.log(a.tagName)
    console.log(a.innerHTML)
    // let o = a.outerHTML
    // console.log(typeof o)
    // console.log(typeof a)
    // console.log(a.outerHTML)
}

// let b = document.body.childNodes

// console.log(b)

// for(let i of b){
//     // console.log(i.tagName)
//     console.log(i.nodeName)
// }


// let c = b[4]
// console.log(c.data)
// console.log(c.nodeValue)