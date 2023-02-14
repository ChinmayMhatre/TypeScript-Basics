export { }
//Lets say you want a variable to be either a string or a number
let age: number | string = 23

// both of these can be done now
age = 22
age = "22"

// let's do this for arrays

let ledger: (string | number)[]= [23,"21"]

//what if we do this?
let thing:string|number[]
//this means thing is either a string or an array of numbers

// Literal types
// The are basically actual values that are accepted by the variable
const replyMessage = (reply:"Yaay" | "Boo") =>{
    return reply
}
// This function on accepts Yaay or Boo as the value of the parameter
