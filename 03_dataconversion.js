let val="33"  
/*if val="33abce" string is also included then
 it will show that it is number but
  there will be NAN on printing the value*/
console.log(typeof (val));
let valueInNumber=Number(val)
console.log(typeof valueInNumber);
/*
"33"=>33
"33ab"=>Nan
Null=0
undefined=Nan
true=1
false=0
*/
let islogged=1
let booleanIsLogged=Boolean(islogged)
console.log(booleanIsLogged)
let value=22
let toString=String(value)
console.log(typeof toString)