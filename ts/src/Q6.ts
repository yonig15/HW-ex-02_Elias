//6)	what is arrow function in JavaScript,
//define two functions at least in two ways using function keyword and arrow function (anonymous function).

function mult(x: number, y: number) {
  return x * y;
}
let res1 = mult(6, 7);

let res2 = (a: number, b: number) => a * b;

console.log(res1);
console.log(res2(6, 7));
