// we can describe the shape of the object in line like other types

let rect:{l:number,b:number}= {l:12,b:12}

// this can be done for return and parameter types as well
// a better way to do this would be to use the "type" alias
// we can describe the shape of the object and the use it in the file
type Shape = {l:number,b:number}
let rect2:Shape = {l:12,b:12}

//object types can be nested
type Person = {
    name:string,
    address:{
        street:string,
        pin:number
    }
}

//make optional properties with ?
type Boy = {
    FirstName:string,
    LastName?:string
}

// mark properties as readonly
type Order = {
    readonly id:number,
    name:string
}

let order:Order = {
    id:1,
    name:"sdasa"
}
//we cannot change id now
// order.id = 2

// intersection types
// combine properties of two types

type Coloured = {
    color : string
}

type ColouredRectangle = Coloured & Shape

let newrect:ColouredRectangle = {
    l:1,
    b:2,
    color:"red"
}