console.log("I love HTML5!".match(/\s\w\w\w\w\d/g));
const obj = {hi: "hi", bye: "bye"};
console.log(obj);

let str = "+7(903)-123-45-67";
console.log(str.match(/\d/g).join(''));
console.log(str.replace(/\D/g, ""));
console.log("A\nB".match(/A.B/gs));

console.log(/^$/.test(""));

console.log("\d\.\d");
console.log("d.d");

let rex = /010-?\d{4}-?\d{4}/gi;
console.log("01033333333".match(rex));

let regexp = /".+"/g;
str =  'a "witch" and her "broom" is one';
console.log(str.match(regexp));

regexp = /(go)+/ig
console.log('Gogogo now!'.replace(regexp, "?"));

console.log(Boolean(0));
