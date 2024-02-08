const val_0=400 //here javascripts automatically detects the type of value
console.log(val_0);
const val= new Number(500) // here we specify that it must be number
console.log(val);
console.log(val.toString())  // here we are converting number to string 
console.log(val.toString().length)// here we are finding length of string
console.log(val.toFixed(2)) // give the value to the number of precision applied to the given number

// ---------------------------------------------------MATHS--------------------------------------------------------------
console.log(Math.abs(-8))
console.log(Math.round(2.366))
console.log(Math.ceil(2.4))
console.log(Math.round(Math.random()))

const min=10
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min)