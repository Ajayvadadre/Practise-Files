// -----class and objects-----

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age | 0;
    }

    static greet(){
        console.log("welcome")
    }

    showDetails(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

// let obj1 = new Person("Rohan",36)
// let obj2 = new Person("Akash",16)

// obj1.showDetails()
// obj2.showDetails()

// console.log(obj1)

// --------------Prototype------>>> used to save backup data
// let a = {
//     num1: 18,
//     num2: 17,
//     run: ()=>{
//         console.log("a object")
//     }
// }

// let b = {
//     run: ()=>{
//         console.log("b object")
//     }
// }

// a.__proto__ = b

// console.log(a)

// console.log(a.run())

//------------setter and getter---->> used to get and set a function or object(abstraced)-- not used mostly
class Employee extends Person{
    constructor(name,age,salary){
        super(name,age)
        this.salary = salary
    }

    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }

    showDetails(){
        super.showDetails()
        console.log(`My salary is ${this.salary}`)
    }
}

let emp1 = new Employee("Shubham",26,10000)

emp1.name = "Akash"
console.log(emp1.name)

emp1.showDetails()

Person.greet()