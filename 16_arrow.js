console.log("-------------------------------this keyword----------------------------")
const user={
    Name:"Mayank",
    Age:18,
    welcomeMessage: function() {
        console.log(`${this.Name} is ${this.Age} years old`);  // this points to current context
        console.log(this)  // here this prints the whole context object
    }
}
user.welcomeMessage()
console.log("---------------------------arrow function-------------------------------------------")
const add=(num1,num2)=>{  //explicit return // if we wrap the function inside curly braces then we have to write return
    return num1+num2
}
console.log(add(3,4))
const sub=(num1,num2)=>(num2-num1)  //implicit return // if single line of function is there then we can write it like that

console.log(sub(3,4))