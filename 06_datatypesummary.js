// primitive
/*  7 types :
     1.String
     2.Number
     3.Boolean
     4.null
     5.undefinded
     6.Symbol
     7.BigInt
     */
    const id=Symbol('123') //both have 123 value but when symbol is applied to it different values are returned
    const anotherId=Symbol('123')
    console.log(id===anotherId) //output-false

/* Reference(Non primitive)
 1. Array
 2. Objects
 3. Functions */
 const heros =["shaktiman","nagraj","doga"] // array
 let myObj={   //this is object
    name:"hitesh",
    age:32,
 }
 const myFunction=function(){  //this is function
    console.log("hello world")
 }
 console.log(typeof myFunction)
 const val=null
 console.log(typeof val)  // output= object

 const val_2=undefined
 console.log(typeof val_2) //output=undefined


 // javascript is dynamically typed language