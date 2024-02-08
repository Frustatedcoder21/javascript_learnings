const myDate= new Date()
console.log(myDate.toDateString()); // this gives the current date 
console.log(myDate.toLocaleString()); // this provides the date with time
  let myCreatedDate= new Date(2023,0,23) //this is the way of inputting date yy-mm-dd
  let mycreatedDate= new Date(2023,0,23,5,3)// here yy-mm-dd with hour-minutes
  let mycreateddate= new Date("2023-01-14")  //giving input in conventional way
  console.log(mycreateddate.toLocaleString());
  let myTimeStamp= Date.now()
  console.log(myTimeStamp) // gives answers in milliseconds
  console.log(myCreatedDate.getTime()) // gives the time duration of specified date in milliseconds
  
  