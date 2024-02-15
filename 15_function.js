function add(number1,number2){
    console.log(number1+number2)
}
add(2,4)


function add(number1,number2){
    let result= number1 + number2
    return result
}
const result=add(2,4)

function calculate(num1,num2,...val){
    console.log("num1:",num1)  //
    console.log("num2:",num2)
    console.log("val:",val)

}
calculate(200,300,400,500)


//passing object

const user={
    username:"Mayank",
    age:23
}
function anyobject(user_base){
    console.log(`${user_base.username} is ${user_base.age} years old`)

}
anyobject(user)

// --------------------------mini hoisting----------------------------

const val=function(sum) // here function is being hold here inside the variable
{
    return sum+1
}

