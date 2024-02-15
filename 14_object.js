// Singleton
const user = {
    id: 123,
    Name: "Samdhish",
    email: "samdhish.com"
};
console.log(user); // prints the whole object with keys and values
console.log("---------------------------------------------------------------")
console.log(Object.keys(user)) //prints the keys of the given object
console.log(Object.values(user)) //prints the values of the gives object


// Singleton with nested object
const user_base = {
    email: "email.com",
    fullname: {   //nested object
        firstname: "Mayank",
        lastname: "Pandey"
    },
    id: 123
};

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };

// Merging objects using Object.assign()
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);


const usr=[{
    Name:"Mayank",
    Email:"Mayank.com"

},{
    Name:"Saket",
    Email:"Saket.com"
}
]
console.log(usr)

console.log(Object.keys(usr))
console.log(Object.values(usr))


// Destructuring
const course={
    courseName:"JS",
    price:999,
    courseInstructor:"Mayank"

}
const {courseInstructor:instructor}=course
console.log(instructor  )