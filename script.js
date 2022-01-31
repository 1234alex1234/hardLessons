let num = 266219;
let str = String(num);
let arrStr = str.split("");
let result = 1;

for (let i = 0; i < arrStr.length; i++) {
   result = arrStr[i] * result;
  
}

console.log(result);

let resultPow = result ** 3;
let resultPowStr = String(resultPow);
let firstNumbers = resultPowStr.substring(0, 2);

console.log(+firstNumbers);
