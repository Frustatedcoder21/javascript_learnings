const person={
    firstname:"Mayank",
    lastname:"Pandey"
}
function print(hometown,state){
    console.log(this.firstname+" "+ this.lastname +" "+ hometown+" "+state);
    
}
print.call(person,"kolkata","west bengal");
// difference between call and apply is in apply we use arraylist and in apply we send individually
print.apply(person,["kolkata","west bengal"])

let details=print.bind(person,"dehradun","uttarakhand")
//binds creates the new function with owner object in which the passed arguments are there
console.log(details);
details()