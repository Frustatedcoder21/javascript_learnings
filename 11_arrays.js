// array, here shallow copies are made 
 const myArr=[0,1,2,3,4,5] //first way
const myArr2=new Array(1,2,3,4,5) //2nd way 
myArr.push(6)
console.log(myArr)
myArr.pop()

myArr.unshift(-1) //insert item in first place of the array shifting the other array elements
console.log(myArr)  
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9)); //returns answer in T/F
console.log(myArr.indexOf(3))

const newArr=myArr.join() // this converts array into string with comma separated
console.log(newArr);

 console.log("array before",myArr)
 const myn=myArr.slice(2,4) // it will select elements from 2 to 4 , 4 excluding
 console.log(myn)
 console.log("Original array after slice",myArr) // no changes in arrays are made on applying slice
 
 const myn2=myArr.splice(2,4)  // it will select elements from index 2 to 4 both inclusive
 console.log(myn2)  
 console.log("Original array after splice",myArr) //original array changes as we apply splice the splice part gets excluded from original array



