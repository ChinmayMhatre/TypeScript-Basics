
// Not really necessary but just to learn about type annotations
let FirstName: string = "Harry"

//can be changed to another string
FirstName = "Ron"

//try changing Firstname to a number
// FirstName = 9


// All types of numbers like float, int are just of the type number(all lowercase)
let RollNo:number = 12

// Change it to different number
RollNo = 24

// try changing it to a different string
// RollNo = "25"


// boolean are true or false
let isStudent:boolean = true

// Change value
isStudent = false

// try changing it to a different type
// isStudent = 98

//Type Inference

//TypeScript can makeout the type from the declaration
//typeScript knows this is a string
let lastName = "potter"

// Now comes the funniest type "Any"
// it does what it says allows all types of variables
//sort of defeats the purpose of typescript
let age:any = 21
age = "this is also allowed"

// Sometimes we need to explicitly give the type
// when we declare a variable without initializing it
// It gives it the "any" type
let answer;


