const score = "33";
//console.log(typeof score);
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log( valueInNumber);
//let valueBoolean=0;
//let valueBoolean="abc";
let valueBoolean = "";
let convertValueBoolean = Boolean(valueBoolean);
//console.log(convertValueBoolean);
//************************************notes ********************************/
//*************boolean********* */
// 1=>true
//0=>false
//""=> false
//"abc"=>true
//********************number */
//"123abc"=>NAN
//""=> undefine

//************************Operation */

let value = 3;
let newValue = -value;
//console.log(newValue);
let str1 = "Arvind";
let str2 = " savita";
let newStr = str1 + str2;
//console.log(newStr);
//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+2+2);
//console.log(1+"2"+2);
//console.log(true)
//output=>true
//console.log(+true)
//output =>1
//console.log(false)
//output=>false
//console.log(+false)
//output =>0
//*********************Prefix and  postfix operator************ */

let x=3
let y=x++;
console.log(` Postfix x:${x},y:${y}`);
//output x: 4,y:3

let a=2;
let b=++a
console.log(`prefix a:${a},b: ${b}`);
//output a: 3,b:3
let c=a+b;
console.log(c);
//output c: 6

let counter=100
++counter;
 //let cd=++counter
console.log(counter);
