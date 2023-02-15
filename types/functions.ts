// We can also specify the type of the function argument

const printQuote = (quote:string) =>{
    console.log(quote);
}

//this is allowed
printQuote("I have no wisdom");

//this will make TS complain 
// printQuote(23)

// default parameters
const square =  (num:number = 2)=>{
    console.log(num*num);
}

// return type 
// specify the type of the return value

const add = (num:number):number =>{
    return num+num
}
    
// when we use methods like map the parameter types are infered by ts 
//instead of being of the type "any"
const numArr = [1,534,23,56,76]

numArr.map((num)=>{
    return num
})

// void return type 
// used when the function should return nothing

const printSomething = ():void =>{
    console.log("lala");
}
//this can be inferred by ts but this is just for learning 


// "never" type
// this is a return type for a function that always throws an exception or never stops executing
// the loop function in three js can be a good example.

let loop = ():never =>{
    while(true){
        console.log("I am stuck");
        
    }
}
