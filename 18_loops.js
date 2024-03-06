const greet="Hello Mayank"
for (const wuish of greet) 
{
//  console.log(wuish)

}
const map = new Map()
map.set('IN',"India")
map.set('PK',"Pakistan")
map.set('FR',"France")
map.set('AF',"Africa")
for (const [key,value] of map) {
    console.log(key,': ',value)
    
}  // maps are uniteratable and works with only for of

const myObj={
    Name:"Mayank",
    Age:23,
    Course:"B.tech"
    
}
for (const key in myObj) {
    console.log(myObj[key])
} //objects and array are iteratable through for in