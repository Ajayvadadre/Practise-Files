//1 take an input from user
//2 compare the input from user with random number
//3 If ((input no = genrated no)) display "congrats number guessed is correct"
//4 If not then keep asking the number unitl the ((input no = generated no))



let n = Math.floor(Math.random() * 100) + 1   //ramdom no generator
// let i= parseInt(prompt(("Enter your number:  ")));
let counter = 0;
do{
    var i= parseInt(prompt(("Enter your number:  ")));
    counter++
    if(i<n){
        alert("Number enterd is less than generated")
    }
    if(i>n){
        alert("Number enterd is greater than generated")
    }
}while(i!==n)
alert("Congrats the number enterd is correct")
alert("your score is:"+counter) 













// while(i<100){ 
//     if(i<n){
//         alert("The number you guessed is less then generated number")
//     }else 
//     if(i>n){
//        alert("The number you guessed is greater then generated number");
//     }
//     else {
//        alert("Congrats number guessed is correct")
//     }
    // break
// }
