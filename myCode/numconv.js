let num1 = '150';
let flo1 = '1.50';

console.log("**********Converting strings to integers**********");

console.log(parseInt('108'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));


console.log("**********Converting strings to float**********");

console.log(parseInt('1.25abc'));
console.log(parseInt(flo1));
console.log(parseInt('ABC'));


console.log("**********Converting strings to Examples**********");

console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1 + 1}`));


console.log("**********Converting strings to string**********");

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());