let username1 = "TuPutaMadr3";
let username2 ="TuPut4Madr3";

let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/gi; 

let result1 = userCheck.test(username1);
let result2 = userCheck.test(username2);

let resultado1 = username1.match(userCheck);
let resultado2 = username2.match(userCheck)

console.log(result1);
console.log(resultado1);

console.log(result2);
console.log(resultado2);