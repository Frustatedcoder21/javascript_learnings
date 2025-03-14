const person={
    firstname:"Mayank",
    lastname:"Pandey",
    printfullname:function(){
        console.log(this.firstname+" "+this.lastname);
        
    }
}
person.printfullname();
// suppose there is another object as well
const person2={
    firstname:"Sachin",
    lastname:"Tendulkar"
}

// function borrowing
// suppose we want to use function of another object
person.printfullname.call(person2);