// stack-used for primitive datatype
// heap- used for non-primitive datatype
let name1= "Mayank"
let name2=name1  // here the copy of name1 is created and given to name2
 name2="Atul"
console.log(name1)
console.log(name2)

let userone={
    email:"user@gmail.com",
    upi:"user@ybl"

}
let usertwo=userone
console.log(usertwo.email)
console.log(userone.email)
usertwo.email="hello@gmail.com"
console.log(usertwo.email)
console.log(userone.email)
