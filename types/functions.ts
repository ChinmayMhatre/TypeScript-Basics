// We can also specify the type of the function argument

const printQuote = (quote:string) =>{
    console.log(quote);
}

//this is allowed
printQuote("I have no wisdom");

//this will make TS complain 
printQuote(23)

// default parameters
const square =  (num:number = 2)=>{
    console.log(num*num);
}

