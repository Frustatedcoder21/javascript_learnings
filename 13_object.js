// object literals
const mysym= Symbol("key1")

const jsuser= {  //object creation
    name:"Hitesh",  // here "name" is key and "hitesh" is value
    age:18,
    [mysym]:"mykey1",  // symbols are written within square bracket
    location:"jaipur",
    email:"hitesh@google.com"
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])

