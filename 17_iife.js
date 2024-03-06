// immediately invoked function expression
(function message(){
    console.log(`Hello`)
})();   //this is done so that the function are not get polluted from outside
(function name(){
    console.log(`Mayank`)
})();